import { Component, OnInit } from '@angular/core';
import { AgentDataServiceService } from '../services/agent-data-service.service'; 
import { AgentCommonServiceService } from '../services/agent-common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads-dtls-process-tbl',
  templateUrl: './leads-dtls-process-tbl.component.html',
  styleUrls: ['./leads-dtls-process-tbl.component.css']
})
export class LeadsDtlsProcessTblComponent implements OnInit {
  agentListData:any;
  agentsCreateDate:any;
  accntType:number=1;
  newLeads:string='';
  leadsUnderProcess:string='';
  reviewedLeads:string='';
  agentListDataArr:Array<any>=[];
  constructor(private agentDataServiceService:AgentDataServiceService,private agentCommonServiceService:AgentCommonServiceService,private rt:Router) { }

  ngOnInit(): void {



    let Obj={
      //agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id
      agent_id: this.agentCommonServiceService.getUserFromLocalStorage()?.user_id,
      lead_type:'agent_process'
    }
    
    this.agentDataServiceService.getProcessLeadList(Obj).subscribe((data)=>{
      
      this.agentListData=data?.data;
      
      this.agentListData.map((data:any)=>{
        console.log('This is agent data',data)
        let agentDate=new Date(data?.created_on);
        let agentDateAppliedOn=`${agentDate.getDate()}/${agentDate.getMonth()}/${agentDate.getFullYear()}  ${agentDate.getHours()}:${agentDate.getMinutes()}:${agentDate.getSeconds()}`;
        let Obj=Object.assign(data,{'created_on':agentDateAppliedOn})
        this.agentListDataArr.push(Obj)
        
        this.agentCommonServiceService.storeInLocalStorage('agentData',{customerUserID:data?.lead_id})
      })
     
    })

    
  }


  veiwLeadsUnderProcess(applicantID:number,leadID:number)
  {
    this.agentCommonServiceService.storeInLocalStorage('agentData',{customerUserID:leadID})
    this.rt.navigate(['/dashboard','lead-dtls1',applicantID]);
    
    
  }

 
}
