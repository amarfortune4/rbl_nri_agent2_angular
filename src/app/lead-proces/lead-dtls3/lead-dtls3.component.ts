import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-dtls3',
  templateUrl: './lead-dtls3.component.html',
  styleUrls: ['./lead-dtls3.component.css']
})
export class LeadDtls3Component implements OnInit {

  @Output() showContactDivOut = new EventEmitter<string>()

  otherPassport: string = '';
  issueDate: string = '';
  expiryDate: string = '';
  issuingAuth: string = '';
  placeOfIssue: string = '';


  passportNo: string = '';

  typeOfVisa: string = '';
  residentPermit: string = '';
  visaresipermitExpiryDate = '';
  panNo: string = '';
  form60: string = '';

  tempVisaChk1: string = '';
  docIssueDate: string = '';
  docExpiryDate: string = '';
  tempVisaChk2: string = '';
  temporaryVisaDec: string = '';

  regObj: any;
  kycDtlsForm: any;
  applicantID: any;
  agentCommnentArrData: any;


  display: string = "none";
  displayCommentErr:string="none";
  commentID: number = 0;
  commentData: string = '';


  isDisplayAddComment: boolean = true;
  isDisplayAddApprove: boolean = true;
  isDislplayCommentTextArea: boolean = true;
  isDislplayCommentUpdateBtn: boolean = false;
  isDisplayEditDeleteCommentSection: boolean = false;
  isDisplayProceedNext: boolean = false;

  isApproved: boolean = false;
  approveMsg: string = 'This section is approved';

  constructor(private agentDataServiceService: AgentDataServiceService, private agentCommonServiceService: AgentCommonServiceService, private fb: FormBuilder, private activeRt: ActivatedRoute) { }

  ngOnInit(): void {

    this.regObj = this.agentCommonServiceService.getUserFromLocalStorage();
    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));

    this.kycDtlsForm = this.fb.group({
      comments: ['',Validators.required]
    })

    let Obj1 =
    {
      user_id: this.regObj?.user_id,
      process_id: 7,
      applicant_id: this.applicantID
    }

    /*
    applicant_id: 29
    expiry_date: "2023-03-13T18:30:00.000Z"
    form_is_60: "no"
    is_form_60: 0
    is_other_than_indian_passport: 1
    issue_date: "2020-06-14T18:30:00.000Z"
    issueing_authority: "Manager"
    kyc_details_id: 5
    pan_number: "abcde1234f"
    passport_number: "1ABCD4568"
    place_of_issue: "Thane"
    process_id: 7
    process_name: "KYC details"
    visa_permit_expiry_date: "2022-04-19T18:30:00.000Z"
    visa_type: 3


    applicant_id: 29
expiry_date: "2023-03-13T18:30:00.000Z"
form_is_60_value: "no"
is_form_60: 0
is_other_than_indian_passport: 1
is_other_than_indian_passport_name: "yes"
issue_date: "2020-06-14T18:30:00.000Z"
issueing_authority: "Manager"
kyc_details_id: 5
pan_number: "abcde1234f"
passport_number: "1ABCD4568"
place_of_issue: "Thane"
process_id: 7
process_name: "KYC details"
visa_permit_expiry_date: "2022-04-19T18:30:00.000Z"
visa_type: 3
visa_type_name: "Work"
    */



    this.agentDataServiceService.fetchKycDtls1(Obj1).subscribe((value) => {

      this.otherPassport = value?.data?.[0]?.is_other_than_indian_passport_name;
      let isseDateType = new Date(value?.data?.[0]?.issue_date);

      this.issueDate = `${isseDateType.getDate()}/${isseDateType.getMonth()}/${isseDateType.getFullYear()}`;

      let expiryDateType = new Date(value?.data?.[0]?.expiry_date);

      this.expiryDate = `${expiryDateType.getDate()}/${expiryDateType.getMonth()}/${expiryDateType.getFullYear()}`;

      this.issuingAuth = value?.data?.[0]?.issueing_authority;
      this.placeOfIssue = value?.data?.[0]?.place_of_issue;

      this.passportNo = value?.data?.[0]?.passport_number;

      this.typeOfVisa = value?.data?.[0]?.visa_type_name;

      this.residentPermit = '';


      let visaresipermitExpiryDateType = new Date(value?.data?.[0]?.visa_permit_expiry_date);

      this.visaresipermitExpiryDate = `${visaresipermitExpiryDateType.getDate()}/ ${visaresipermitExpiryDateType.getMonth()}/${visaresipermitExpiryDateType.getFullYear()}`;

      this.panNo = value?.data?.[0]?.pan_number;
      this.form60 = value?.data?.[0]?.is_form_60;



    })


    let Obj2 = {
      user_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      process_id: 8,
      applicant_id: this.applicantID
    }

    /* 
    applicant_id: 29
    is_temporary_visa_declaration: "yes"
    kyc_details_id: 5
    process_id: 8
    process_name: "KYC details Temp Visa declaration(1)"
    temporary_visa_declare_expiry_date: "2022-04-26T18:30:00.000Z"
    temporary_visa_declare_issue_date: "2022-03-15T18:30:00.000Z"
    */

    this.agentDataServiceService.fetchKycDtls2(Obj2).subscribe((value) => {
      this.tempVisaChk1 = value?.data?.[0]?.kyc_dtls_chk1;
      let docIssueDateType = new Date(value?.data?.[0]?.temporary_visa_declare_issue_date);
      this.docIssueDate = `${docIssueDateType.getDate()}/${docIssueDateType.getMonth()}/${docIssueDateType.getFullYear()}`;
      let docExpiryDateType = new Date(value?.data?.[0]?.temporary_visa_declare_expiry_date);
      this.docExpiryDate = `${docExpiryDateType.getDate()}/${docExpiryDateType.getMonth()}/${docExpiryDateType.getFullYear()}`;
      this.tempVisaChk2 = value?.data?.[0]?.kyc_dtls_chk2;
      this.temporaryVisaDec = value?.data?.[0]?.is_temporary_visa_declaration_name
    })



    let ObjC = {
      lead_id: this.regObj?.customerUserID,
      agent_id: this.regObj?.user_id,
      process_id: 8
    }

    this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {
      console.log("This is agents comment", data);
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

        this.showContactDivOut.emit();
        this.showContactDivOut.emit();

        this.isApproved=true;
        this.approveMsg = 'This section is approved';
        }

        this.agentCommnentArrData = data;
        this.commentData = data?.data[0].comment;
        this.commentID = data?.data[0]?.comment_id;
      }
    })



  }


  get comments() { return this.kycDtlsForm.get('comments').value }

  addComment() {


    if(this.kycDtlsForm.valid)
    {

      this.isDisplayAddComment = false;
    this.isDisplayAddApprove = true;
    this.isDislplayCommentTextArea = false;
    this.isDislplayCommentUpdateBtn = false;
    this.isDisplayEditDeleteCommentSection = true;
    this.isDisplayProceedNext = true;

    let Obj = {
      process_id: 8,
      applicant_id: this.applicantID,
      parent_comment_id: 0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.kycDtlsForm.get('comments').value,
      lead_id: this.regObj?.customerUserID
    }

    this.agentDataServiceService.postAgentsComment(Obj).subscribe((value) => {
      console.log(value);

      let ObjC = {
        lead_id: this.regObj?.customerUserID,
        agent_id: this.regObj?.user_id,
        process_id: 8
      }

      this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {
        console.log("This is agents comment", data);
        this.agentCommnentArrData = data;
        this.commentData = data?.data[0].comment;
        this.commentID = data?.data[0]?.comment_id;
      })

    }, (err) => {
      console.log(err);
    })

    }else{
      this.openModalComment();
    }


    

  }

  updateComment() {


    if(this.kycDtlsForm.valid){

      this.isDisplayAddComment = false;
    this.isDisplayAddApprove = true;
    this.isDislplayCommentTextArea = false;
    this.isDislplayCommentUpdateBtn = false;
    this.isDisplayEditDeleteCommentSection = true;
    this.isDisplayProceedNext = true;

    let Obj = {
      process_id: 7,
      applicant_id: this.applicantID,
      parent_comment_id: 0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.kycDtlsForm.get('comments').value,
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

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }


  editComment() {
    this.isDisplayAddComment = false;
    this.isDisplayAddApprove = true;
    this.isDislplayCommentTextArea = true;
    this.isDislplayCommentUpdateBtn = true;
    this.isDisplayEditDeleteCommentSection = false;
    this.isDisplayProceedNext = false;
  }

  checkDeleteComment() {
    this.isDisplayAddComment = true;
    this.isDisplayAddApprove = true;
    this.isDislplayCommentTextArea = true;
    this.isDislplayCommentUpdateBtn = false;
    this.isDisplayEditDeleteCommentSection = false;
    this.isDisplayProceedNext = false;

    this.openModal();
  }

  deleteComment() {

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
    this.showContactDivOut.emit();
  }

  approveLead() {

   

    this.isDisplayAddComment = false;
    this.isDisplayAddApprove = false;
    this.isDislplayCommentTextArea = false;
    this.isDislplayCommentUpdateBtn = false;
    this.isDisplayEditDeleteCommentSection = false;
    this.isDisplayProceedNext = false;


    let Obj = {
      applicant_id: this.applicantID,
      process_id: 8,
      lead_id: this.regObj?.customerUserID
    }

    this.agentDataServiceService.approveLead(Obj).subscribe((value) => {
      console.log('THis lead is approved');
      this.isApproved = true;
      this.approveMsg = 'This section is approved'

      if (value?.msg) {
        this.isDisplayAddComment = false;
        this.isDisplayAddApprove = false;
        this.isDislplayCommentTextArea = false;
        this.isDislplayCommentUpdateBtn = false;
        this.isDisplayEditDeleteCommentSection = false;
        this.isDisplayProceedNext = false;

        this.showContactDivOut.emit();
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
