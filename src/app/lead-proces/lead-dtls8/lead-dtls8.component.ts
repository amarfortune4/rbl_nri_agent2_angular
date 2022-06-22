import { Component, OnInit } from '@angular/core';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-dtls8',
  templateUrl: './lead-dtls8.component.html',
  styleUrls: ['./lead-dtls8.component.css']
})
export class LeadDtls8Component implements OnInit {
  nominationForm: any;
  applicantId: string = '';
  isOpted: string = '';
  isOpted_value: string = '';
  nominationId: string = '';
  nomineeAddressType: string = '';
  nomineeCity: string = '';
  nomineeCountry: string = '';
  nomineeDateOfBirth: string = '';
  nomineeFirstName: string = '';
  nomineeHouseNumber: string = '';
  nomineeHouseOrBuildingName: string = '';
  nomineeLandkmark: string = '';
  nomineeLastName: string = '';
  nomineeMiddleName: string = '';
  nomineePincode: string = '';
  nomineeRoadOrStreetName: string = '';
  nomineeState: string = '';
  nomineeTitle: string = '';
  processId: string = '';
  processName: string = '';
  relationship: string = '';
  regObj: any;
  applicantID: any;
  agentCommnentArrData: any;

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

  isApproved: boolean = true;
  approveMsg: string = '';


  constructor(private agentDataServiceService: AgentDataServiceService, private fb: FormBuilder, private agentCommonServiceService: AgentCommonServiceService, private activeRt: ActivatedRoute) { }

  ngOnInit(): void {

    this.regObj = this.agentCommonServiceService.getUserFromLocalStorage();
    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));


    this.nominationForm = this.fb.group({
      comments: ['', Validators.required]
    })
    let Obj1 = {
      user_id: this.regObj.user_id,
      process_id: 25,
      applicant_id: this.applicantID
    }
    this.agentDataServiceService.fetchNomination1(Obj1).subscribe((value) => {


      /*
      applicantId:string='';
      isOpted:string='';
      isOpted_value:string='';
      nominationId:string='';
      nomineeAddressType:string='';
      nomineeCity:string='';
      nomineeCountry:string='';
      nomineeDateOfBirth:string='';
      nomineeFirstName:string='';
      nomineeHouseNumber:string='';
      nomineeHouseOrBuildingName:string='';
      nomineeLandkmark:string='';
      nomineeLastName:string='';
      nomineeMiddleName:string='';
      nomineePincode:string='';
      nomineeRoadOrStreet_name:string='';
      nomineeState:string='';
      nomineeTitle:string='';
      processId:string='';
      processName:string='';
      relationship:string='';
      */


      this.applicantId = value?.data?.[0].applicant_id
      this.isOpted = value?.data?.[0].is_opted
      this.isOpted_value = value?.data?.[0].is_opted_value
      this.nominationId = value?.data?.[0].nomination_id
      this.nomineeAddressType = value?.data?.[0].nominee_address_type
      this.nomineeCity = value?.data?.[0].nominee_city
      this.nomineeCountry = value?.data?.[0].nominee_country

      let nomineeDateOfBirthType = new Date(value?.data?.[0].nominee_date_of_birth);
      this.nomineeDateOfBirth = `${nomineeDateOfBirthType.getDate()}/${nomineeDateOfBirthType.getMonth()}/${nomineeDateOfBirthType.getFullYear()}`;
      this.nomineeFirstName = value?.data?.[0].nominee_first_name
      this.nomineeHouseNumber = value?.data?.[0].nominee_house_number
      this.nomineeHouseOrBuildingName = value?.data?.[0].nominee_house_or_building_name
      this.nomineeLandkmark = value?.data?.[0].nominee_landkmark
      this.nomineeLastName = value?.data?.[0].nominee_last_name
      this.nomineeMiddleName = value?.data?.[0].nominee_middle_name
      this.nomineePincode = value?.data?.[0].nominee_pincode
      this.nomineeRoadOrStreetName = value?.data?.[0].nominee_roaNor_street_name
      this.nomineeState = value?.data?.[0].nominee_state
      this.nomineeTitle = value?.data?.[0].nominee_title
      this.processId = value?.data?.[0].process_id
      this.processName = value?.data?.[0].process_name
      this.relationship = value?.data?.[0].relationship
    })

    // let ObjC={
    //   lead_id:this.regObj?.customerUserID,
    //   agent_id:this.regObj?.user_id,
    //   process_id:26
    //  }

    //  this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data)=>{
    //    console.log("This is agents comment",data);
    //    this.agentCommnentArrData=data;
    //  })



    let Obj2 = {
      user_id: this.regObj.user_id,
      process_id: 26,
      applicant_id: this.applicantID
    }
    this.agentDataServiceService.fetchNomination2(Obj2).subscribe((value) => { })


    let Obj3 = {
      user_id: this.regObj.user_id,
      process_id: 27,
      applicant_id: this.applicantID
    }
    this.agentDataServiceService.fetchNomination3(Obj3).subscribe((value) => { })



    let ObjD = {
      lead_id: this.regObj?.customerUserID,
      agent_id: this.regObj?.user_id,
      process_id: 26
    }

    this.agentDataServiceService.fetchAgentCommentSummary(ObjD).subscribe((data) => {
      if (data?.data[0]?.comment_id) {
        this.isDisplayAddComment = false;
        this.isDisplayAddApprove = true;
        this.isDislplayCommentTextArea = false;
        this.isDislplayCommentUpdateBtn = false;
        this.isDisplayEditDeleteCommentSection = true;
        this.isDisplayProceedNext = true;

        this.agentCommnentArrData = data;
        this.commentData = data?.data[0].comment;
        this.commentID = data?.data[0]?.comment_id;
        console.log('Comment data', data)
      }
    })



  }


  get comments() { return this.nominationForm.get('comments').value }

  addComment() {


    

    if (this.nominationForm.valid) {

      this.isDisplayAddComment = false;
      this.isDisplayAddApprove = true;
      this.isDislplayCommentTextArea = false;
      this.isDislplayCommentUpdateBtn = false;
      this.isDisplayEditDeleteCommentSection = true;
      this.isDisplayProceedNext = true;

      let Obj = {
        process_id: 26,
        applicant_id: this.applicantID,
        parent_comment_id: 0,
        agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
        comment: this.nominationForm.get('comments').value,
        lead_id: this.regObj?.customerUserID
      }

      this.agentDataServiceService.postAgentsComment(Obj).subscribe((value) => {
        console.log(value);
        let ObjC = {
          lead_id: this.regObj?.customerUserID,
          agent_id: this.regObj?.user_id,
          process_id: 26
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
    }else
    {
      this.openModalComment();
    }



  }


  updateComment() {

    if(this.nominationForm.valid)
    {
      
    this.isDisplayAddComment = false;
    this.isDisplayAddApprove = true;
    this.isDislplayCommentTextArea = false;
    this.isDislplayCommentUpdateBtn = false;
    this.isDisplayEditDeleteCommentSection = true;
    this.isDisplayProceedNext = true;

    let Obj = {
      process_id: 26,
      applicant_id: this.applicantID,
      parent_comment_id: 0,
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      comment: this.nominationForm.get('comments').value,
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
      process_id: 26
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

        if (data?.data[0]?.agent_status === "approved") {
          this.isDisplayAddComment = false;
          this.isDisplayAddApprove = false;
          this.isDislplayCommentTextArea = false;
          this.isDislplayCommentUpdateBtn = false;
          this.isDisplayEditDeleteCommentSection = false;
          this.isDisplayProceedNext = false;


          this.isApproved = true;
          this.approveMsg = 'This section is approved';

        }

        this.agentCommnentArrData = data;
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
      });
    } else {

    }

  }

  proceedNext() {

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
      process_id: 26,
      lead_id: this.regObj?.customerUserID
    }

    this.agentDataServiceService.approveLead(Obj).subscribe((value) => {
      console.log('THis lead is approved');
      this.isApproved = true;
      this.approveMsg = 'This section is approved'

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
