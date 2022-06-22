import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-dtls2',
  templateUrl: './lead-dtls2.component.html',
  styleUrls: ['./lead-dtls2.component.css']
})
export class LeadDtls2Component implements OnInit {
@Output() showKycDivOut=new EventEmitter<string>()

 fatcaForm:any; 
 taxPurposeJurdction:string='';
 taxIdNumber:string='';
 tinDescNo:string='';
 taxCountry:string='';
 tinIssueCntry:string='';
 cityofBirth:string='';
 counrtryofBirth:string='';
 applicantID:number|null=0;
 rejObj:any;


 
birth_country:string="";
birth_county_id:string="";
city_of_birth:string="";
fatca_id:string="";
is_residence_for_tax:string="";
is_residence_for_tax_name:string="";
process_id:string="";
process_name:string="";
tax_identification_number:string="";
tin_country_id:string="";
tin_country_name:string="";
tin_description:string="";
tin_issue_county_id:string="";
tin_issues_country:string="";
agentCommnentArrData:any;

display: string = "none";
displayCommentErr="none";
commentID:number=0;
commentData:string='';

isDisplayAddComment:boolean=true;
isDisplayAddApprove:boolean=true;
isDislplayCommentTextArea:boolean=true;
isDislplayCommentUpdateBtn:boolean=false;
isDisplayEditDeleteCommentSection:boolean=false;
isDisplayProceedNext:boolean=false;


isApproved:boolean=false;
approveMsg:string='This section is approved';

  constructor(private agentDataServiceService: AgentDataServiceService ,private agentCommonServiceService:AgentCommonServiceService,private fb:FormBuilder,private activeRt:ActivatedRoute) { }

  ngOnInit(): void {
    this.rejObj=this.agentCommonServiceService.getUserFromLocalStorage();
    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));
    this.fatcaForm=this.fb.group({
      comments:['',Validators.required]
    })

    let Obj = {
      user_id: this.rejObj.user_id,
      process_id: 7,
      applicant_id: this.applicantID
    }
    /*
    applicant_id: 29
birth_county_id: 3
city_of_birth: "Thane"
fatca_id: 2
is_residence_for_tax: 1
process_id: 6
process_name: "FATCA / CRS Declaration"
tax_identification_number: "1ABCA1212"
tin_country_id: 4
tin_description: "New Card"
tin_issue_county_id: 4
    */
    this.agentDataServiceService.fetchFatca(Obj).subscribe((value) => {
      //value?.data?.[0]?
      this.taxPurposeJurdction=value?.data?.[0]?.is_residence_for_tax;
      this.taxIdNumber=value?.data?.[0]?.tax_identification_number;
      this.tinDescNo=value?.data?.[0]?.tin_description;
      this.taxCountry=value?.data?.[0]?.tin_country_id;
      this.tinIssueCntry=value?.data?.[0]?.tin_issue_county_id;
      this.cityofBirth=value?.data?.[0]?.city_of_birth;
      this.counrtryofBirth=value?.data?.[0]?.birth_county_id;

      this.birth_country=value?.data?.[0]?.birth_country;
      this.birth_county_id=value?.data?.[0]?.birth_county_id;
      this.city_of_birth=value?.data?.[0]?.city_of_birth;
      this.fatca_id=value?.data?.[0]?.fatca_id;
      this.is_residence_for_tax=value?.data?.[0]?.is_residence_for_tax;
      this.is_residence_for_tax_name=value?.data?.[0]?.is_residence_for_tax_name;
      this.process_id=value?.data?.[0]?.process_id;
      this.process_name=value?.data?.[0]?.process_name;
      this.tax_identification_number=value?.data?.[0]?.tax_identification_number;
      this.tin_country_id=value?.data?.[0]?.tin_country_id;
      this.tin_country_name=value?.data?.[0]?.tin_country_name;
      this.tin_description=value?.data?.[0]?.tin_description;
      this.tin_issue_county_id=value?.data?.[0]?.tin_issue_county_id;
      this.tin_issues_country=value?.data?.[0]?.tin_issues_country;
    })



   


     let ObjC={
      lead_id:this.rejObj?.customerUserID,
      agent_id:this.rejObj?.user_id,
      process_id:7
     }
     
     this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data)=>{
       console.log("This is agents comment",data);
       if(data?.data[0]?.comment_id){
       this.isDisplayAddComment=false;
       this.isDisplayAddApprove=true;
       this.isDislplayCommentTextArea=false;
       this.isDislplayCommentUpdateBtn=false;
       this.isDisplayEditDeleteCommentSection=true;
       this.isDisplayProceedNext=true;

       if(data?.data[0]?.agent_status==="approved")
       {
        this.isDisplayAddComment=false;
        this.isDisplayAddApprove=false;
        this.isDislplayCommentTextArea=false;
        this.isDislplayCommentUpdateBtn=false;
        this.isDisplayEditDeleteCommentSection=false;
        this.isDisplayProceedNext=false;

        this.showKycDivOut.emit();
        this.showKycDivOut.emit();

        this.isApproved=true;
        this.approveMsg = 'This section is approved';

       }

       this.agentCommnentArrData=data;
       this.commentData = data?.data[0].comment;
       this.commentID = data?.data[0]?.comment_id;
       }
     })
  }



 get comments(){return this.fatcaForm.get('comments').value}

  addComment() {


    if(this.fatcaForm.valid)
    {
      this.isDisplayAddComment=false;
      this.isDisplayAddApprove=true;
      this.isDislplayCommentTextArea=false;
      this.isDislplayCommentUpdateBtn=false;
      this.isDisplayEditDeleteCommentSection=true;
      this.isDisplayProceedNext=true;
        
      let Obj = {
        process_id: 7,
        applicant_id: this.applicantID,
        parent_comment_id:0,
        agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
        comment: this.fatcaForm.get('comments').value,
        lead_id:this.rejObj?.customerUserID
      }
  
      this.agentDataServiceService.postAgentsComment(Obj).subscribe((value)=>{
        let ObjC={
          lead_id:this.rejObj?.customerUserID,
          agent_id:this.rejObj?.user_id,
          "process_id":7
         }
         
         this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data)=>{
           console.log("This is agents comment",data);
           this.agentCommnentArrData=data;
           this.commentData = data?.data[0].comment;
           this.commentID = data?.data[0]?.comment_id;
         })
        console.log(value)
      },(err)=>
      {
        console.log(err);
      })
    }else{
      this.openModalComment();
    }
    
   

  }


  updateComment() {



    if(this.fatcaForm.valid)
    {

      this.isDisplayAddComment=false;
      this.isDisplayAddApprove=true;
      this.isDislplayCommentTextArea=false;
      this.isDislplayCommentUpdateBtn=false;
      this.isDisplayEditDeleteCommentSection=true;
      this.isDisplayProceedNext=true;
  
      let Obj = {
        process_id: 7,
        applicant_id: this.applicantID,
        parent_comment_id: 0,
        agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
        comment: this.fatcaForm.get('comments').value,
        lead_id: this.rejObj?.customerUserID,
        comment_id: this.commentID
      }
  
      this.agentDataServiceService.postAgentsComment(Obj).subscribe((value) => {
  
        //console.log(value)
      }, (err) => {
        console.log(err);
      })
  
  
  
      let ObjC = {
        lead_id: this.rejObj?.customerUserID,
        agent_id: this.rejObj?.user_id,
        process_id: 7
      }
  
      this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {
        console.log("This is agents comment", data);
        this.agentCommnentArrData = data;
        this.commentData = data?.data[0].comment;
        this.commentID = data?.data[0]?.comment_id;
      })

    }else{
      this.openModalComment();
    }

   



  }
  editComment()
  {
    this.isDisplayAddComment=false;
    this.isDisplayAddApprove=true;
    this.isDislplayCommentTextArea=true;
    this.isDislplayCommentUpdateBtn=true;
    this.isDisplayEditDeleteCommentSection=false;
    this.isDisplayProceedNext=false;
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  checkDeleteComment()
  {
    this.isDisplayAddComment=true;
    this.isDisplayAddApprove=true;
    this.isDislplayCommentTextArea=true;
    this.isDislplayCommentUpdateBtn=false;
    this.isDisplayEditDeleteCommentSection=false;
    this.isDisplayProceedNext=false; 

    this.openModal();


  }


  deleteComment()
  {

    window.location.reload();

    if (this.commentID > 0) {
      let Obj = {
        comment_id: this.commentID
      }
      this.agentDataServiceService.deleteComment(Obj).subscribe((value) => {
        console.log('Comment is deleted');

        // this.rt.navigate([this.rt.url])
        //window.location.reload();
      });
    } else {

    }

  }

  proceedNext()
  {

    this.showKycDivOut.emit();

  }

  approveLead() {
    
    this.isDisplayAddComment=false;
    this.isDisplayAddApprove=false;
    this.isDislplayCommentTextArea=false;
    this.isDislplayCommentUpdateBtn=false;
    this.isDisplayEditDeleteCommentSection=false;
    this.isDisplayProceedNext=false; 

    
    let Obj = {
      applicant_id: this.applicantID,
      process_id: 7,
      lead_id: this.rejObj?.customerUserID
    }

    this.agentDataServiceService.approveLead(Obj).subscribe((value) => {
      console.log('THis lead is approved');
      this.isApproved=true;
      this.approveMsg='This section is approved';

      if(value?.msg)
      {
        this.isDisplayAddComment=false;
        this.isDisplayAddApprove=false;
        this.isDislplayCommentTextArea=false;
        this.isDislplayCommentUpdateBtn=false;
        this.isDisplayEditDeleteCommentSection=false;
        this.isDisplayProceedNext=false; 

        this.showKycDivOut.emit();
      }

      // location.href='#personalDtls';
      
    })

  }

  openModalComment()
  {
    this.displayCommentErr="block";
  }

  closeModalComment()
  {
    this.displayCommentErr="none";
  }

}
