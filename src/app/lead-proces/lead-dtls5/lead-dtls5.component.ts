import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lead-dtls5',
  templateUrl: './lead-dtls5.component.html',
  styleUrls: ['./lead-dtls5.component.css']
})
export class LeadDtls5Component implements OnInit {
  @Output() showCustomerProfilerDivOut=new EventEmitter<string>()

  addressDtlsForm: any;

  addressId: string = '';
  applicantId: string = '';
  currentAddressType: string = '';
  currentAddressTypeName: string = '';
  currentCity: string = '';
  currentCountryId: string = '';
  currentCountryName: string = '';
  currentHouseNumber: string = '';
  currentHouseOrBuildingName: string = '';
  currentLandmark: string = '';
  currentPincode: string = '';
  currentRoadOrStreetName: string = '';
  currentState: string = '';
  overseasAddressType: string = '';
  overseasAddressTypeName: string = '';
  overseasCity: string = '';
  overseasCountryId: string = '';
  overseasCountryName: string = '';
  overseasHouseNumber: string = '';
  overseasHouseOrBuildingName: string = '';
  overseasLandmark: string = '';
  overseasPincode: string = '';
  overseasRoadOrStreetName: string = '';
  overseasState: string = '';
  processId: string = '';
  processName: string = '';

  jurisdictionAddressType: string = '';
  jurisdictionAddressTypeName: string = '';
  jurisdictionCity: string = '';
  jurisdictionCountrieName: string = '';
  jurisdictionCountryId: string = '';
  jurisdictionHouseNumber: string = '';
  jurisdictionHouseOrBuildingName: string = '';
  jurisdictionLandmark: string = '';
  jurisdictionPincode: string = '';
  jurisdictionRoadOrStreetName: string = '';
  jurisdictionState: string = '';
  permanentAddressType: string = '';
  permanentCountryName: string = '';
  permenantAddressType: string = '';
  permenantCity: string = '';
  permenantCountryId: string = '';
  permenantHouseNumber: string = '';
  permenantHouseOrBuildingName: string = '';
  permenantLandmark: string = '';
  permenantPincode: string = '';
  permenantRoadOrStreetName: string = '';
  permenantState: string = '';
  prefferedMailing: string = '';

  regObj: any;
  applicantID: any;
  agentCommnentArrData: any;


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

  constructor(private agentDataServiceService: AgentDataServiceService, private fb: FormBuilder, private agentCommonServiceService: AgentCommonServiceService, private activeRt: ActivatedRoute) { }

  ngOnInit(): void {


    this.regObj = this.agentCommonServiceService.getUserFromLocalStorage();
    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));

    this.addressDtlsForm = this.fb.group({
      comments: ['',[Validators.required]]
    })

    let Obj1 =
    {
      user_id: this.regObj.user_id,
      process_id: 12,
      applicant_id: this.applicantID
    }


    this.agentDataServiceService.fetchAddressDtls1(Obj1).subscribe((value) => {


      this.addressId = value?.data?.[0].address_id
      this.applicantId = value?.data?.[0].applicant_id
      this.currentAddressType = value?.data?.[0].current_address_type
      this.currentAddressTypeName = value?.data?.[0].current_address_type_name
      this.currentCity = value?.data?.[0].current_city
      this.currentCountryId = value?.data?.[0].current_country_id
      this.currentCountryName = value?.data?.[0].current_country_name
      this.currentHouseNumber = value?.data?.[0].current_house_number
      this.currentHouseOrBuildingName = value?.data?.[0].current_house_or_building_name
      this.currentLandmark = value?.data?.[0].current_landmark
      this.currentPincode = value?.data?.[0].current_pincode
      this.currentRoadOrStreetName = value?.data?.[0].current_road_or_street_name
      this.currentState = value?.data?.[0].current_state
      this.overseasAddressType = value?.data?.[0].overseas_address_type
      this.overseasAddressTypeName = value?.data?.[0].overseas_address_type_name
      this.overseasCity = value?.data?.[0].overseas_city
      this.overseasCountryId = value?.data?.[0].overseas_country_id
      this.overseasCountryName = value?.data?.[0].overseas_country_name
      this.overseasHouseNumber = value?.data?.[0].overseas_house_number
      this.overseasHouseOrBuildingName = value?.data?.[0].overseas_house_or_building_name
      this.overseasLandmark = value?.data?.[0].overseas_landmark
      this.overseasPincode = value?.data?.[0].overseas_pincode
      this.overseasRoadOrStreetName = value?.data?.[0].overseas_road_or_street_name
      this.overseasState = value?.data?.[0].overseas_state
      this.processId = value?.data?.[0].process_id
      this.processName = value?.data?.[0].process_name

    })




    let Obj2 = {
      user_id: this.regObj.user_id,
      process_id: 13,
      applicant_id: this.applicantID
    }

    this.agentDataServiceService.fetchAddressDtls2(Obj2).subscribe((value) => {


      this.jurisdictionAddressType = value?.data?.[0].jurisdiction_address_type
      this.jurisdictionAddressTypeName = value?.data?.[0].jurisdiction_address_type_name
      this.jurisdictionCity = value?.data?.[0].jurisdiction_city
      this.jurisdictionCountrieName = value?.data?.[0].jurisdiction_countrie_name
      this.jurisdictionCountryId = value?.data?.[0].jurisdiction_country_id
      this.jurisdictionHouseNumber = value?.data?.[0].jurisdiction_house_number
      this.jurisdictionHouseOrBuildingName = value?.data?.[0].jurisdiction_house_or_building_name
      this.jurisdictionLandmark = value?.data?.[0].jurisdiction_landmark
      this.jurisdictionPincode = value?.data?.[0].jurisdiction_pincode
      this.jurisdictionRoadOrStreetName = value?.data?.[0].jurisdiction_road_or_street_name
      this.jurisdictionState = value?.data?.[0].jurisdiction_state
      this.permenantAddressType = value?.data?.[0].permanent_address_type
      this.permanentCountryName = value?.data?.[0].permanent_country_name
      this.permenantCity = value?.data?.[0].permenant_city
      this.permenantCountryId = value?.data?.[0].permenant_country_id
      this.permenantHouseNumber = value?.data?.[0].permenant_house_number
      this.permenantHouseOrBuildingName = value?.data?.[0].permenant_house_or_building_name
      this.permenantLandmark = value?.data?.[0].permenant_landmark
      this.permenantPincode = value?.data?.[0].permenant_pincode
      this.permenantRoadOrStreetName = value?.data?.[0].permenant_road_or_street_name
      this.permenantState = value?.data?.[0].permenant_state
      this.prefferedMailing = value?.data?.[0].preffered_mailing


    })




    let ObjC = {
      lead_id: this.regObj?.customerUserID,
      agent_id: this.regObj?.user_id,
      process_id: 13
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

        this.showCustomerProfilerDivOut.emit();
        this.showCustomerProfilerDivOut.emit();

        this.isApproved=true;
        this.approveMsg='This section is approved';
        
        }

        this.agentCommnentArrData = data;
        this.commentData = data?.data[0].comment;
        this.commentID = data?.data[0]?.comment_id;
      }
    })
  }


  get comments() { return this.addressDtlsForm.get('comments').value }

  addComment() {


    if(this.addressDtlsForm.valid)
    {
      this.isDisplayAddComment = false;
      this.isDisplayAddApprove = true;
      this.isDislplayCommentTextArea = false;
      this.isDislplayCommentUpdateBtn = false;
      this.isDisplayEditDeleteCommentSection = true;
      this.isDisplayProceedNext = true;
  
      let Obj = {
        process_id: 13,
        applicant_id: this.applicantID,
        parent_comment_id: 0,
        agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
        comment: this.addressDtlsForm.get('comments').value,
        lead_id: this.regObj?.customerUserID
      }
  
      this.agentDataServiceService.postAgentsComment(Obj).subscribe((value) => {
        console.log(value);
        let ObjC = {
          lead_id: this.regObj?.customerUserID,
          agent_id: this.regObj?.user_id,
          process_id: 13
        }
  
        this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {
          
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


    if(this.addressDtlsForm.valid)
    {
      this.isDisplayAddComment=false;
      this.isDisplayAddApprove=true;
      this.isDislplayCommentTextArea=false;
      this.isDislplayCommentUpdateBtn=false;
      this.isDisplayEditDeleteCommentSection=true;
      this.isDisplayProceedNext=true;
  
      let Obj = {
        process_id: 13,
        applicant_id: this.applicantID,
        parent_comment_id: 0,
        agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
        comment: this.addressDtlsForm.get('comments').value,
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
        process_id: 13
      }
  
      this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {
        
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
      });
    } else {

    }

  }

  proceedNext(){
    this.showCustomerProfilerDivOut.emit();
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
      process_id: 13,
      lead_id: this.regObj?.customerUserID
    }

    this.agentDataServiceService.approveLead(Obj).subscribe((value) => {
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
        this.showCustomerProfilerDivOut.emit();
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

