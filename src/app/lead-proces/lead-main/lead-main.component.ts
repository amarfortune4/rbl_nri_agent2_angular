import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-main',
  templateUrl: './lead-main.component.html',
  styleUrls: ['./lead-main.component.css']
})
export class LeadMainComponent implements OnInit {
  agentName: any;
  rejObj: any;
  applicantID: number | null = 0;
  iSshowCommentSummary:boolean=false;


  account_type_name: string = "";
  applicant_first_name: string = "";
  applicant_last_name: string = "";
  applicant_middle_name: string = "";


  isDisplayIndividual:boolean=true;
  isDisplayJoint:boolean=false;
  isDisplayMinor:boolean=false;


  constructor(private agentCommonServiceService: AgentCommonServiceService, private agentDataServiceService: AgentDataServiceService, private activeRt: ActivatedRoute, private rt: Router) {
    this.rt.events.subscribe(() => {
      //console.log(this.rt.url.);
    })
  }

  ngOnInit(): void {

    this.rejObj = this.agentCommonServiceService.getUserFromLocalStorage();
    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));

    this.agentName = `${this.rejObj?.first_name} ${this.rejObj?.middle_name} ${this.rejObj?.last_name}`;

    let Obj = {
      user_id: this.rejObj?.user_id,
      process_id: 4,
      applicant_id: this.applicantID
    }

    this.agentDataServiceService.fetchPersonalDtls1(Obj).subscribe((value) => {

      this.account_type_name = value?.data?.[0]?.account_type_name;
      this.applicant_first_name = value?.data?.[0]?.applicant_first_name;
      this.applicant_last_name = value?.data?.[0]?.applicant_last_name;
      this.applicant_middle_name = value?.data?.[0]?.applicant_middle_name;


      switch(this.account_type_name)
      {
        case 'Individual':this.isDisplayIndividual=true;
        this.isDisplayJoint=false;
        this.isDisplayMinor=false;
        break;

        case 'Joint':this.isDisplayIndividual=true;
        this.isDisplayJoint=true;
        this.isDisplayMinor=true;
        break;

        case 'Minor':this.isDisplayIndividual=true;
        this.isDisplayJoint=true;
        this.isDisplayMinor=false;
        break;
      }


      // if(this.account_type_name==='Individual')
      // {

      //   this.isDisplayIndividual=true;
      //   this.isDisplayJoint=false;
      //   this.isDisplayMinor=false;

      // }

    })
  }

}
