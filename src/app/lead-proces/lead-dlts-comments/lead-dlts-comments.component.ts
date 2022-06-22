import { Component, OnInit } from '@angular/core';
import { AgentCommonServiceService } from 'src/app/services/agent-common-service.service';
import { AgentDataServiceService } from 'src/app/services/agent-data-service.service';

@Component({
  selector: 'app-lead-dlts-comments',
  templateUrl: './lead-dlts-comments.component.html',
  styleUrls: ['./lead-dlts-comments.component.css']
})
export class LeadDltsCommentsComponent implements OnInit {

  rejObj:any;
  leadID:number=0;
  agentID:number=0;
  agentCommnentArrData:any;
  constructor(private agentCommonServiceService:AgentCommonServiceService,private agentDataServiceService:AgentDataServiceService) { }

  ngOnInit(): void {

    this.rejObj=this.agentCommonServiceService.getUserFromLocalStorage();
    this.leadID=this.rejObj?.customerUserID
    this.agentID=this.rejObj?.user_id;

      let Obj={
       lead_id:this.leadID,
       agent_id:this.agentID,
       "process_id":5
      }




      // this.agentDataServiceService.fetchAgentCommentSummary(Obj).subscribe((data)=>{
      //   console.log("This is agents comment",data);
      //   this.agentCommnentArrData=data;
      // })

  }


  

}
