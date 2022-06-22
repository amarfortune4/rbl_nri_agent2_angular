import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-dtls6',
  templateUrl: './lead-dtls6.component.html',
  styleUrls: ['./lead-dtls6.component.css']
})
export class LeadDtls6Component implements OnInit {

  @Output() showInternetBankingDivOut=new EventEmitter<string>()

      customerProfileForm:any;
      applicantId:string='';
      customerProfileId:string='';
      employmentTypeId:string='';
      employmentTypesName:string='';
      grossAnnualIncome:string='';
      grossIncomeRangeName:string='';
      industrieName:string='';
      industryTypeId:string='';
      occupationId:string='';
      occuptionTypeName:string='';
      processId:string='';
      processName:string='';
      qualification:string='';
      sourceIncome:string='';

      regObj:any;
      applicantID:any;
      agentCommnentArrData:any;


  display: string = "none";
  commentID: number = 0;
  commentData: string = '';
  displayCommentErr:string="none";


  isDisplayAddComment: boolean = true;
  isDisplayAddApprove: boolean = true;
  isDislplayCommentTextArea: boolean = true;
  isDislplayCommentUpdateBtn: boolean = false;
  isDisplayEditDeleteCommentSection: boolean = false;
  isDisplayProceedNext: boolean = false;


  isApproved:boolean=true;
  approveMsg:string='';

  constructor(private agentDataServiceService: AgentDataServiceService,private fb:FormBuilder,private agentCommonServiceService:AgentCommonServiceService,private activeRt:ActivatedRoute) { }

  ngOnInit(): void {

    this.regObj=this.agentCommonServiceService.getUserFromLocalStorage();
    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));

    this.customerProfileForm=this.fb.group({
      comments:['',[Validators.required]]
    })

    let Obj = {
      user_id: this.regObj.user_id,
      process_id: 14,
      applicant_id: this.applicantID
    }

    this.agentDataServiceService.fetchCustomerProfiler(Obj).subscribe((value) => {

      this.applicantId=value?.data?.[0].applicant_id
      this.customerProfileId=value?.data?.[0].customer_profile_id
      this.employmentTypeId=value?.data?.[0].employment_type_id
      this.employmentTypesName=value?.data?.[0].employment_types_name
      this.grossAnnualIncome=value?.data?.[0].gross_annual_income
      this.grossIncomeRangeName=value?.data?.[0].gross_income_range_name
      this.industrieName=value?.data?.[0].industrie_name
      this.industryTypeId=value?.data?.[0].industry_type_id
      this.occupationId=value?.data?.[0].occupation_id
      this.occuptionTypeName=value?.data?.[0].occuption_type_name
      this.processId=value?.data?.[0].process_id
      this.processName=value?.data?.[0].process_name
      this.qualification=value?.data?.[0].qualification
      this.sourceIncome=value?.data?.[0].source_income
    })


    

     let ObjC = {
      lead_id: this.regObj?.customerUserID,
      agent_id: this.regObj?.user_id,
      process_id: 14
    }

    this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {
      if (data?.data[0]?.comment_id) {
        this.isDisplayAddComment = false;
        this.isDisplayAddApprove = true;
        this.isDislplayCommentTextArea = false;
        this.isDislplayCommentUpdateBtn = false;
        this.isDisplayEditDeleteCommentSection = true;
        this.isDisplayProceedNext = true;

        if(data?.data[0]?.agent_status==="approved")
        {
          this.isDisplayAddComment = false;
        this.isDisplayAddApprove = false;
        this.isDislplayCommentTextArea = false;
        this.isDislplayCommentUpdateBtn = false;
        this.isDisplayEditDeleteCommentSection = false;
        this.isDisplayProceedNext = false;

        this.showInternetBankingDivOut.emit();
        this.showInternetBankingDivOut.emit();

        this.isApproved=true;
        this.approveMsg='This section is approved';
        
        }

        this.agentCommnentArrData = data;
        this.commentData = data?.data[0].comment;
        this.commentID = data?.data[0]?.comment_id;
      }
    })
  }

  get comments(){return this.customerProfileForm.get('comments').value}

  addComment() {

    if(this.customerProfileForm.valid)
    {

      this.isDisplayAddComment = false;
    this.isDisplayAddApprove = true;
    this.isDislplayCommentTextArea = false;
    this.isDislplayCommentUpdateBtn = false;
    this.isDisplayEditDeleteCommentSection = true;
    this.isDisplayProceedNext = true;
      
    let Obj = {
      process_id:14,
      applicant_id: this.applicantID,
      parent_comment_id:0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.customerProfileForm.get('comments').value,
      lead_id:this.regObj?.customerUserID
    }

    this.agentDataServiceService.postAgentsComment(Obj).subscribe((value)=>{
      console.log(value);
      let ObjC={
        lead_id:this.regObj?.customerUserID,
        agent_id:this.regObj?.user_id,
        "process_id":14
       }
       
       this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data)=>{
         console.log("This is agents comment",data);
         this.agentCommnentArrData=data;
       this.commentData = data?.data[0].comment;
       this.commentID = data?.data[0]?.comment_id;
       })
    },(err)=>
    {
      console.log(err);
    })
      
    }else
    {
      this.openModalComment();
    }

    

  }

  updateComment() {



    if(this.customerProfileForm.valid)
    {

      this.isDisplayAddComment=false;
    this.isDisplayAddApprove=true;
    this.isDislplayCommentTextArea=false;
    this.isDislplayCommentUpdateBtn=false;
    this.isDisplayEditDeleteCommentSection=true;
    this.isDisplayProceedNext=true;

    let Obj = {
      process_id: 14,
      applicant_id: this.applicantID,
      parent_comment_id: 0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.customerProfileForm.get('comments').value,
      lead_id: this.regObj?.customerUserID,
      comment_id: this.commentID
    }

    this.agentDataServiceService.postAgentsComment(Obj).subscribe((value) => {

      //console.log(value)
    }, (err) => {
      console.log(err);
    })



    let ObjC = {
      lead_id: this.regObj?.customerUserID,
      agent_id: this.regObj?.user_id,
      process_id: 14
    }

    this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {
      console.log("This is agents comment",data);
       if(data?.data[0]?.comment_id){
       this.isDisplayAddComment=false;
       this.isDisplayAddApprove=true;
       this.isDislplayCommentTextArea=false;
       this.isDislplayCommentUpdateBtn=false;
       this.isDisplayEditDeleteCommentSection=true;
       this.isDisplayProceedNext=true;

       this.agentCommnentArrData=data;
       this.commentData = data?.data[0].comment;
       this.commentID = data?.data[0]?.comment_id;
       }
    })
    }else
    {
      this.openModalComment();
    }
    
    



  }


  

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
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

  checkDeleteComment(){
    this.isDisplayAddComment=true;
    this.isDisplayAddApprove=true;
    this.isDislplayCommentTextArea=true;
    this.isDislplayCommentUpdateBtn=false;
    this.isDisplayEditDeleteCommentSection=false;
    this.isDisplayProceedNext=false; 

    this.openModal();
  }

  deleteComment(){
    window.location.reload();

    if (this.commentID > 0) {
      let Obj = {
        comment_id: this.commentID
      }
      this.agentDataServiceService.deleteComment(Obj).subscribe((value) => {
        console.log('Comment is deleted');
      });
    } else {

    }

  }

  proceedNext(){
    this.showInternetBankingDivOut.emit();
  }

  approveLead() {
    
   

    
    let Obj = {
      applicant_id: this.applicantID,
      process_id: 14,
      lead_id: this.regObj?.customerUserID
    }

    this.agentDataServiceService.approveLead(Obj).subscribe((value) => {
      console.log('THis lead is approved');
      this.isApproved=true;
      this.approveMsg='This section is approved'

      // location.href='#personalDtls';

      if(value?.msg)
      {
        this.isDisplayAddComment=false;
        this.isDisplayAddApprove=false;
        this.isDislplayCommentTextArea=false;
        this.isDislplayCommentUpdateBtn=false;
        this.isDisplayEditDeleteCommentSection=false;
        this.isDisplayProceedNext=false; 

        this.showInternetBankingDivOut.emit();
      }
      
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
