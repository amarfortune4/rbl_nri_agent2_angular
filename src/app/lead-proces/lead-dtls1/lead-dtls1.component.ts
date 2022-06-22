import { Component, ElementRef, OnInit, ViewChild,Output, EventEmitter } from '@angular/core';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-dtls1',
  templateUrl: './lead-dtls1.component.html',
  styleUrls: ['./lead-dtls1.component.css']
})
export class LeadDtls1Component implements OnInit {

  @Output() showFatcaDivOut = new EventEmitter<string>();

  personalDtlsForm: any;
  isDisplayComment: boolean = false;
  applicantFullName: string = '';
  accountType: string = '';
  accountVariant: string = '';
  aadhaarrNo: string = '';
  religion: string = '';
  category: string = '';
  isPoliticallyExposed: string = '';
  dob: string = '';
  maritalStatus: string = '';
  gender: string = '';

  applicantMaidenFullName: string = '';
  applicantMothersFullName: string = '';
  applicantFatherOrSpouceFullName: string = ''
  nationality: string = '';
  dateOfBecomingNri: string = '';



  aadhaar_number: string = '';
  account_type_id: string = '';
  account_type_name: string = '';
  account_varient: string = '';
  applicant_first_name: string = '';
  applicant_last_name: string = '';
  applicant_middle_name: string = '';
  applicant_personal_id: string = '';
  applicant_title: string = '';
  applicant_title_name: string = '';
  countrie_name: string = '';
  country_id: string = '';
  date_of_birth: string = '';
  is_politically_exposed: string = '';
  is_politically_exposed_name: string = '';
  is_trading_facility_opt: string = '';
  is_trading_facility_opt_name: string = '';
  marital_status: string = '';
  process_id: string = '';
  process_name: string = '';
  religion_category_id: string = '';
  religion_category_name: string = '';
  religion_id: string = '';
  religion_name: string = '';
  customerUserID:number=0;
  agentCommnentArrData:any;
  display: string = "none";
  displayCommentErr:string="none";


  

  isDisplayAddComment:boolean=true;
  isDisplayAddApprove:boolean=true;
  isDislplayCommentTextArea:boolean=true;
  isDislplayCommentUpdateBtn:boolean=false;
  isDisplayEditDeleteCommentSection:boolean=false;
  isDisplayProceedNext:boolean=false;



   commentData:string='';
   commentID:number=0;

   isApproved:boolean=false;
   approveMsg:string='';

   

   

  @ViewChild('commentSection')commentSection!: ElementRef<HTMLInputElement>;


  applicantID: number | null = 0;

  rejObj: any;

  constructor(private agentDataServiceService: AgentDataServiceService, private agentCommonServiceService: AgentCommonServiceService, private fb: FormBuilder, private rt: Router, private activeRt: ActivatedRoute) { }

  ngOnInit(): void {


    console.log('This is native textArea',this.commentSection?.nativeElement);

    this.rejObj = this.agentCommonServiceService.getUserFromLocalStorage();

    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));
    this.personalDtlsForm = this.fb.group({
      comments: ['',Validators.required]
    })




    let Obj1 = {
      user_id: this.rejObj?.user_id,
      process_id: 1,
      applicant_id: this.applicantID
    }
    this.agentDataServiceService.fetchCountry(Obj1).subscribe((value) => {
      this.accountType = value?.data?.[0]?.account_type_id
    })

    let Obj2 = {
      user_id: this.rejObj?.user_id,
      process_id: 2,
      applicant_id: this.applicantID
    }
    this.agentDataServiceService.fetchAccntVariant(Obj2).subscribe((value) => {
      this.accountVariant = value?.data?.[0]?.account_varient
    })


    let Obj3 = {
      user_id: this.rejObj?.user_id,
      process_id: 4,
      applicant_id: this.applicantID
    }

    this.agentDataServiceService.fetchPersonalDtls1(Obj3).subscribe((value) => {
      this.applicantFullName = `${value?.data?.[0]?.applicant_first_name} ${value?.data?.[0]?.applicant_middle_name} ${value?.data?.[0]?.applicant_last_name}`
      this.aadhaarrNo = String(value?.data?.[0]?.aadhaar_number);
      this.religion = value?.data?.[0]?.religion_id;
      this.category = value?.data?.[0]?.religion_category_id;
      this.isPoliticallyExposed = value?.data?.[0]?.is_politically_exposed;
      let dateOfBirthObj = new Date(value?.data?.[0]?.date_of_birth);
      this.dob = `${dateOfBirthObj.getDate()}/${dateOfBirthObj.getMonth()}/${dateOfBirthObj.getFullYear()}`;
      this.maritalStatus = value?.data?.[0]?.marital_status;
      this.gender = value?.data?.[0]?.gender;





      this.aadhaar_number = value?.data?.[0].aadhaar_number;
      this.account_type_id = value?.data?.[0].account_type_id;
      this.account_type_name = value?.data?.[0].account_type_name;
      this.account_varient = value?.data?.[0].account_varient;
      this.applicant_first_name = value?.data?.[0].applicant_first_name;
      this.applicant_last_name = value?.data?.[0].applicant_last_name;
      this.applicant_middle_name = value?.data?.[0].applicant_middle_name;
      this.applicant_personal_id = value?.data?.[0].applicant_personal_id;
      this.applicant_title = value?.data?.[0].applicant_title;
      this.applicant_title_name = value?.data?.[0].applicant_title_name;
      this.countrie_name = value?.data?.[0].countrie_name;
      this.country_id = value?.data?.[0].country_id;
      this.date_of_birth = value?.data?.[0].date_of_birth;
      this.is_politically_exposed = value?.data?.[0].is_politically_exposed;
      this.is_politically_exposed_name = value?.data?.[0].is_politically_exposed_name;
      this.is_trading_facility_opt = value?.data?.[0].is_trading_facility_opt;
      this.is_trading_facility_opt_name = value?.data?.[0].is_trading_facility_opt_name;
      this.marital_status = value?.data?.[0].marital_status;
      this.process_id = value?.data?.[0].process_id;
      this.process_name = value?.data?.[0].process_name;
      this.religion_category_id = value?.data?.[0].religion_category_id;
      this.religion_category_name = value?.data?.[0].religion_category_name;
      this.religion_id = value?.data?.[0].religion_id;
      this.religion_name = value?.data?.[0].religion_name;

    })





    let Obj4 = {
      user_id: this.rejObj?.user_id,
      process_id: 5,
      applicant_id: this.applicantID
    }
    this.agentDataServiceService.fetchPersonalDtls2(Obj4).subscribe((value) => {
      this.applicantMaidenFullName = `${value?.data?.[0]?.maiden_title}. ${value?.data?.[0]?.maiden_first_name} ${value?.data?.[0]?.maiden_middle_name} ${value?.data?.[0]?.maiden_last_name}`
      this.applicantMothersFullName = `Mrs. ${value?.data?.[0]?.mother_first_name} ${value?.data?.[0]?.mother_middle_name}  ${value?.data?.[0]?.mother_last_name}`
      this.applicantFatherOrSpouceFullName = `${value?.data?.[0]?.in_relation_title}. ${value?.data?.[0]?.in_relation_first_name} ${value?.data?.[0]?.in_relation_middle_name} ${value?.data?.[0]?.in_relation_last_name}`;
      this.nationality = value?.data?.[0]?.nationality;


      let dtofbNri = new Date(value?.data?.[0]?.date_of_becoming_nri);
      this.dateOfBecomingNri = `${dtofbNri.getDate()}/${dtofbNri.getMonth()}/${dtofbNri.getFullYear()}`
    })


    let ObjC={
      lead_id:this.rejObj?.customerUserID,
      agent_id:this.rejObj?.user_id,
      process_id:5
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
        console.log('This is agent status',data?.data[0]?.agent_status);

       if(data?.data[0]?.agent_status==="approved")
       {

        this.isDisplayAddComment=false;
        this.isDisplayAddApprove=false;
        this.isDislplayCommentTextArea=false;
        this.isDislplayCommentUpdateBtn=false;
        this.isDisplayEditDeleteCommentSection=false;
        this.isDisplayProceedNext=false;

        this.showFatcaDivOut.emit()
        this.showFatcaDivOut.emit()

         this.isApproved=true; 
         this.approveMsg='This section is approved';
       }

       this.agentCommnentArrData=data;
       this.commentData = data?.data[0].comment;
       this.commentID = data?.data[0]?.comment_id;
       //this.isApproved=true;
       }
     })


  }


  get comments() { return this.personalDtlsForm.get('comments') }


  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }


  openModalComment()
  {
    this.displayCommentErr="block";
  }

  closeModalComment()
  {
    this.displayCommentErr="none";
  }



  addComment() {
   

    if(this.personalDtlsForm.valid)
    {

      // this.personalDtlsForm.controls.mar  
  

      

  this.isDisplayAddComment=false;
  this.isDisplayAddApprove=true;
  this.isDislplayCommentTextArea=false;
  this.isDislplayCommentUpdateBtn=false;
  this.isDisplayEditDeleteCommentSection=true;
  this.isDisplayProceedNext=true;


    let Obj = {
      process_id: 5,
      applicant_id: this.applicantID,
      parent_comment_id: 0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.personalDtlsForm.get('comments').value,
      lead_id:this.rejObj?.customerUserID
    }


    
      this.agentDataServiceService.postAgentsComment(Obj).subscribe((value) => {
        console.log(value)
      }, (err) => {
        console.log(err);
      })
      
    
    let ObjC={
      lead_id:this.rejObj?.customerUserID,
      agent_id:this.rejObj?.user_id,
      "process_id":5
     }
     
     this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data)=>{
       console.log("This is agents comment",data);
       this.agentCommnentArrData=data;
       this.commentData = data?.data[0].comment;
      this.commentID = data?.data[0]?.comment_id;
     })

    }else{
      this.openModalComment();
    }

  
      

  }

  updateComment() {


    if(this.personalDtlsForm.valid)
    {

    this.isDisplayAddComment=false;
    this.isDisplayAddApprove=true;
    this.isDislplayCommentTextArea=false;
    this.isDislplayCommentUpdateBtn=false;
    this.isDisplayEditDeleteCommentSection=true;
    this.isDisplayProceedNext=true;

    let Obj = {
      process_id: 5,
      applicant_id: this.applicantID,
      parent_comment_id: 0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.personalDtlsForm.get('comments').value,
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
      process_id: 5
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



  

  proceedNext() {
      this.showFatcaDivOut.emit();
      this.showFatcaDivOut.emit();
  }


  approveLead() {
    
   

    
    let Obj = {
      applicant_id: this.applicantID,
      process_id: 5,
      lead_id: this.rejObj?.customerUserID
    }

    this.agentDataServiceService.approveLead(Obj).subscribe((value) => {
      console.log('THis lead is approved');
      this.isApproved=true;
      this.approveMsg='This section is approved';

      // location.href='#personalDtls';

      if(value.msg)
      {
        this.showFatcaDivOut.emit();
        this.showFatcaDivOut.emit();
        this.isDisplayAddComment=false;
        this.isDisplayAddApprove=false;
        this.isDislplayCommentTextArea=false;
        this.isDislplayCommentUpdateBtn=false;
        this.isDisplayEditDeleteCommentSection=false;
        this.isDisplayProceedNext=false; 
      }
      
    })

  }











}
