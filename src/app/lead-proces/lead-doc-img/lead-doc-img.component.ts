import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
//import Drift from 'drift-zoom';

@Component({
  selector: 'app-lead-doc-img',
  templateUrl: './lead-doc-img.component.html',
  styleUrls: ['./lead-doc-img.component.css']
})
export class LeadDocImgComponent implements OnInit, AfterViewInit {

  constructor(private agentDataServiceService: AgentDataServiceService,private agentCommonServiceService:AgentCommonServiceService,private fb:FormBuilder,private activeRt:ActivatedRoute) { }
  demoTrgiggerElement:any;
  iSinlinePane:any=false;
  @ViewChild('demoTrgigger') demoTrigger: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('details') paneContainer: ElementRef<HTMLInputElement> | undefined;


  imgSrcPsportFront: string = '';
  imgSrcPsportBack: string = '';
  imgSrcAddressProof: string = '';
  imgSrcFrom60: string = '';
  imgSrcVisaOrOci: string = '';
  imgSrcPio1: string = '';
  imgSrcPio2: string = '';
  imgSrcOci: string = '';
  imgSrcVisa: string = '';
  imgSrcOtherDoc: string = '';
  applicantID: any;
  addressProofData: any;
  popUpImgSrc: string = '';

  regObj: any;

  documentCommentForm: any;
  agentCommnentArrData: any;
  isUpdateCommentDisplay:boolean=false;

 

  isCommentSuccessfull: boolean = false;
  isDisplayProceedNext: boolean = false;
  isDisplayUpdateBtn: boolean = false;
  isDisplayCommentTextarea: boolean = true;
  isDisplayCommentEditArea: boolean = false;
  isDisplayApproveBtn: boolean = true;
  isApproved: boolean = false;


  commentID: number = 0;
  display: string = "none";
  approveMsg: string = '';
  commentData: any;

  ngOnInit(): void {
    // var demoTrigger = demoTrigger.querySelector('.demo-trigger');
    // var paneContainer = document.querySelector('.detail');

    // new Drift(demoTrigger, {
    //   paneContainer: paneContainer,
    //   inlinePane: false
    // });


    this.regObj = this.agentCommonServiceService.getUserFromLocalStorage();

    let ObjC = {
      lead_id: this.regObj?.customerUserID,
      agent_id: this.regObj?.user_id,
      process_id: 23
    }

    this.agentDataServiceService.fetchAgentCommentSummary(ObjC).subscribe((data) => {

      
      this.commentData = data?.data[0]?.comment;
      this.commentID = data?.data[0]?.comment_id;


      if (data?.data[0]?.comment) {
        this.isCommentSuccessfull = true;
        this.isDisplayProceedNext = true;
        this.isDisplayUpdateBtn = false;
        this.isDisplayCommentTextarea = false;
        this.isDisplayCommentEditArea = true;
        this.isDisplayApproveBtn = true;
      } else {
        this.isCommentSuccessfull = false;
      }


      this.documentCommentForm = this.fb.group({
        comment: [this.commentData, []]
      })

      this.commentData = data?.data[0].comment;
      this.commentID = data?.data[0].comment_id;

      

    })




    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));

    let Obj1 = {
      applicant_id: this.applicantID,
      document: "passport_front"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj1).subscribe((value) => {
      this.imgSrcPsportFront = value?.file_path;
    });

    let Obj2 = {
      applicant_id: this.applicantID,
      document: "passport_back"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj2).subscribe((value) => {
      this.imgSrcPsportBack = value?.file_path;
    });


    let Obj3 = {
      applicant_id: this.applicantID,
      document: "address_proof"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj3).subscribe((value) => {

      console.log('This is address proof', this.imgSrcAddressProof)

      this.imgSrcAddressProof = value?.[0]?.file_path;
      this.addressProofData = value?.[0];

      //this.agentCommonServiceService.getDateFormatYMD(value?.[0])
    });



    let Obj4 = {
      applicant_id: this.applicantID,
      document: "form_sixty"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj4).subscribe((value) => {
      this.imgSrcFrom60 = value?.file_path;
    });




    let Obj5 = {
      applicant_id: this.applicantID,
      document: "oci"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj5).subscribe((value) => {
      this.imgSrcOci = value?.file_path;
    }, (err) => {

    });

    let Obj6 = {
      applicant_id: this.applicantID,
      document: "visa"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj6).subscribe((value) => {
      this.imgSrcVisa = value?.file_path;
    }, (err) => {

    });


    let Obj7 = {
      applicant_id: this.applicantID,
      document: "old_indian_passport_front"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj7).subscribe((value) => {
      this.imgSrcPio1 = value?.file_path;
    }, (err) => {

    });

    let Obj8 = {
      applicant_id: this.applicantID,
      document: "old_indian_passport_back"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj8).subscribe((value) => {
      this.imgSrcPio2 = value?.file_path;
    }, (err) => {

    });

    let Obj9 = {
      applicant_id: this.applicantID,
      document: "other"
    }
    this.agentDataServiceService.postCustomerGetDoc(Obj9).subscribe((value) => {
      this.imgSrcOtherDoc = value?.file_path;
    }, (err) => {

    });

  }

  

  ngAfterViewInit() {

    // this.divHello.nativeElement.innerHTML = "Hello Angular";

    this.demoTrgiggerElement = this.demoTrigger?.nativeElement;
    let paneContainerElement = this.paneContainer?.nativeElement;

    console.log('this is trigger element',this.demoTrgiggerElement);

    // new Drift(this.demoTrgiggerElement, {
    //   paneContainer: paneContainerElement,
    //   inlinePane: this.iSinlinePane
    // });

  }

}
