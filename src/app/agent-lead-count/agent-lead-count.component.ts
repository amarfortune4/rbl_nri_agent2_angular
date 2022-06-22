import { Component, OnInit } from '@angular/core';
import { AgentDataServiceService } from '../services/agent-data-service.service';
import { AgentCommonServiceService } from '../services/agent-common-service.service';

@Component({
  selector: 'app-agent-lead-count',
  templateUrl: './agent-lead-count.component.html',
  styleUrls: ['./agent-lead-count.component.css']
})
export class AgentLeadCountComponent implements OnInit {

  agentsCount:any;
  newLeads:any;
  leadsUnderProcess:any;
  reviewedLeads:any;
  agentID:any;
  roleID:number=0;
  superAgentNewLeadsList:number=0;

  constructor(private agentDataServiceService:AgentDataServiceService,private agentCommonServiceService:AgentCommonServiceService) { }

  ngOnInit(): void {

  this.agentID=this.agentCommonServiceService.getUserFromLocalStorage()?.user_id;
  this.roleID=this.agentCommonServiceService.getUserFromLocalStorage()?.role_id;
  
  this.agentDataServiceService.postAgentNewLeadsCount({agent_id:this.agentID}).subscribe((value)=>{
    this.newLeads=value?.lead_count;
  })

  
  this.agentDataServiceService.postAgentProcessLeadsCount({agent_id:this.agentID}).subscribe((value)=>{
    
    this.leadsUnderProcess=value?.process_lead_count;
  })

  
  this.agentDataServiceService.postAgentReviewLeadsCount({agent_id:this.agentID}).subscribe((value)=>{
    this.reviewedLeads=value?.review_lead_count;
  })


  this.agentDataServiceService.getSuperAgentLeadList().subscribe((data)=>{
    if(data?.data?.length)
    {
      this.superAgentNewLeadsList=data?.data?.length;
    }else{
      this.superAgentNewLeadsList=0;
    }
    
  })

    
  }

}
