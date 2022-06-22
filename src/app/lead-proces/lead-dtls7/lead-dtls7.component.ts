import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-dtls7',
  templateUrl: './lead-dtls7.component.html',
  styleUrls: ['./lead-dtls7.component.css']
})
export class LeadDtls7Component implements OnInit {
  @Output() showNominationDivOut=new EventEmitter<string>()
  

  internetBankingForm:any;
  applicantId: string = '';
  bankingFacilitiesId: string = '';
  cardAlertMode: string = '';
  dailyBalanceAlertMode: string = '';
  isCardAlertSelected: string = '';
  isCardAlertSelectedValue: string = '';
  isChequeBookSelected: string = '';
  isChequeBookSelectedValue: string = '';
  isDailyBalanceAlertSelected: string = '';
  isDailyBalanceAlertSelectedValue: string = '';
  processId: string = '';
  processName: string = '';
  


  cardVariant:string='';
  cardVariantName:string='';
  debitCardType:string='';
  isInternetBankingSelected:string='';
  isInternetBankingSelectedName:string='';
  isMobileBankingSelected:string='';
  isMobileBankingSelectedName:string='';

  regObj:any;
  applicantID:any;
  agentCommnentArrData:any;

  display: string = "none";
  commentID: number = 0;
  commentData: string = '';
  displayCommentErr="none";


  isDisplayAddComment: boolean = true;
  isDisplayAddApprove: boolean = true;
  isDislplayCommentTextArea: boolean = true;
  isDislplayCommentUpdateBtn: boolean = false;
  isDisplayEditDeleteCommentSection: boolean = false;
  isDisplayProceedNext: boolean = false;

  isApproved:boolean=true;
  approveMsg:string='';
  
  constructor(private agentDataServiceService: AgentDataServiceService,private agentCommonServiceService:AgentCommonServiceService,private fb:FormBuilder,private activeRt:ActivatedRoute) { }

  ngOnInit(): void {

    this.regObj=this.agentCommonServiceService.getUserFromLocalStorage();
    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));

    this.internetBankingForm=this.fb.group({
      comments:['',[Validators.required]]
    });

    let Obj1 = {
      user_id: this.regObj.user_id,
      process_id: 15,
      applicant_id: this.applicantID
    }

    this.agentDataServiceService.fetchInternetBank1(Obj1).subscribe((value) => {
      this.cardVariant=value?.data?.[0].card_variant
      this.cardVariantName=value?.data?.[0].card_variant_name
      this.debitCardType=value?.data?.[0].debit_card_type
      this.isInternetBankingSelected=value?.data?.[0].is_internet_banking_selected
      this.isInternetBankingSelectedName=value?.data?.[0].is_internet_banking_selected_name
      this.isMobileBankingSelected=value?.data?.[0].is_mobile_banking_selected
      this.isMobileBankingSelectedName=value?.data?.[0].is_mobile_banking_selected_name      

    })



    let Obj2 = {
      user_id: this.regObj.user_id,
      process_id: 16,
      applicant_id: this.applicantID,
      nomination_id:7
    }

    this.agentDataServiceService.fetchInternetBank2(Obj2).subscribe((value) => {

      this.applicantId = value?.data?.[0].applicant_id
      this.bankingFacilitiesId = value?.data?.[0].banking_facilities_id
      this.cardAlertMode = value?.data?.[0].card_alert_mode
      this.dailyBalanceAlertMode = value?.data?.[0].daily_balance_alert_mode
      this.isCardAlertSelected = value?.data?.[0].is_card_alert_selected
      this.isCardAlertSelectedValue = value?.data?.[0].is_card_alert_selected_value
      this.isChequeBookSelected = value?.data?.[0].is_cheque_book_selected
      this.isChequeBookSelectedValue = value?.data?.[0].is_cheque_book_selected_value
      this.isDailyBalanceAlertSelected = value?.data?.[0].is_daily_balance_alert_selected
      this.isDailyBalanceAlertSelectedValue = value?.data?.[0].is_daily_balance_alert_selected_value
      this.processId = value?.data?.[0].process_id
      this.processName = value?.data?.[0].process_name
     })


    

     let ObjC = {
      lead_id: this.regObj?.customerUserID,
      agent_id: this.regObj?.user_id,
      process_id: 16
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

        this.showNominationDivOut.emit();
        this.showNominationDivOut.emit();

        this.isApproved=true;
        this.approveMsg='This section is approved';
        
        }

        this.agentCommnentArrData = data;
        this.commentData = data?.data[0].comment;
        this.commentID = data?.data[0]?.comment_id;
        console.log('Comment data',data)
      }
    })
  }


  get comments(){return this.internetBankingForm.get('comments').value}

  addComment() {


    if(this.internetBankingForm.valid)
    {

    this.isDisplayAddComment = false;
    this.isDisplayAddApprove = true;
    this.isDislplayCommentTextArea = false;
    this.isDislplayCommentUpdateBtn = false;
    this.isDisplayEditDeleteCommentSection = true;
    this.isDisplayProceedNext = true;
        
    let Obj = {
      process_id:16,
      applicant_id: this.applicantID,
      parent_comment_id:0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.internetBankingForm.get('comments').value,
      lead_id:this.regObj?.customerUserID
    }

    this.agentDataServiceService.postAgentsComment(Obj).subscribe((value)=>{
      console.log(value);
      let ObjC={
        lead_id:this.regObj?.customerUserID,
        agent_id:this.regObj?.user_id,
        process_id:16
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
      this.openModalComment()
    }
    
    

  }

  updateComment() {

    if(this.internetBankingForm.valid)
    {
      this.isDisplayAddComment=false;
      this.isDisplayAddApprove=true;
      this.isDislplayCommentTextArea=false;
      this.isDislplayCommentUpdateBtn=false;
      this.isDisplayEditDeleteCommentSection=true;
      this.isDisplayProceedNext=true;
  
      let Obj = {
        process_id: 16,
        applicant_id: this.applicantID,
        parent_comment_id: 0,
        agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
        comment: this.internetBankingForm.get('comments').value,
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
        process_id: 16
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
    }else{

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
    this.showNominationDivOut.emit();
  }

  approveLead() {
    
   

    
    let Obj = {
      applicant_id: this.applicantID,
      process_id: 16,
      lead_id: this.regObj?.customerUserID
    }

    this.agentDataServiceService.approveLead(Obj).subscribe((value) => {
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
         
        this.showNominationDivOut.emit();
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
