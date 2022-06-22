import { Component, OnInit } from '@angular/core';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-dtls-customer-relatives',
  templateUrl: './lead-dtls-customer-relatives.component.html',
  styleUrls: ['./lead-dtls-customer-relatives.component.css']
})
export class LeadDtlsCustomerRelativesComponent implements OnInit {

applicantID:number=0;

applicant_relative_id: number=1
countrie_name:string="";
declarant_city:string="";
declarant_country_id:string="";
declarant_first_name:string="";
declarant_house_and_building_name:string="";
declarant_house_number:string="";
declarant_landmark:string="";
declarant_last_name:string="";
declarant_middle_name:string="";
declarant_pincode:string="";
declarant_relation:string="";
declarant_road_or_street_name:string="";
declarant_state:string="";
declarant_title:string="";




  constructor(private agentDataServiceService:AgentDataServiceService,private agentCommonServiceService:AgentCommonServiceService,private activeRt:ActivatedRoute) { }

  ngOnInit(): void {

    this.applicantID = Number(this.activeRt.snapshot.paramMap.get('applicantID'));

    let Obj={
      applicant_id:this.applicantID
    }

    this.agentDataServiceService.postAgentRelativeAgent(Obj).subscribe((data)=>{
      console.log('This is relative data',data?.data[0]);

this.applicant_relative_id=data?.data[0]?.applicant_relative_id
this.countrie_name=data?.data[0]?.countrie_name;
this.declarant_city=data?.data[0]?.declarant_city;
this.declarant_country_id=data?.data[0]?.declarant_country_id;
this.declarant_first_name=data?.data[0]?.declarant_first_name;
this.declarant_house_and_building_name=data?.data[0]?.declarant_house_and_building_name;
this.declarant_house_number=data?.data[0]?.declarant_house_number;
this.declarant_landmark=data?.data[0]?.declarant_landmark;
this.declarant_last_name=data?.data[0]?.declarant_last_name;
this.declarant_middle_name=data?.data[0]?.declarant_middle_name;
this.declarant_pincode=data?.data[0]?.declarant_pincode;
this.declarant_relation=data?.data[0]?.declarant_relation;
this.declarant_road_or_street_name=data?.data[0]?.declarant_road_or_street_name;
this.declarant_state=data?.data[0]?.declarant_state;
this.declarant_title=data?.data[0]?.declarant_title;
    })
  }

}
