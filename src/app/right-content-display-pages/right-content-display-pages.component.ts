import { Component, OnInit } from '@angular/core';
import { AgentCommonServiceService } from '../services/agent-common-service.service';
import { AgentDataServiceService } from '../services/agent-data-service.service';

@Component({
  selector: 'app-right-content-display-pages',
  templateUrl: './right-content-display-pages.component.html',
  styleUrls: ['./right-content-display-pages.component.css']
})
export class RightContentDisplayPagesComponent implements OnInit {

  rejObj:any;
  roleID:number=0;
  constructor(private agentCommonServiceService:AgentCommonServiceService) { }

  ngOnInit(): void {
    this.rejObj = this.agentCommonServiceService.getUserFromLocalStorage();
    this.roleID=this.rejObj?.role_id;
    console.log('This is role id',this.rejObj?.role_id)
  }

}
