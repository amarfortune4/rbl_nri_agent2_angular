import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AgentCommonServiceService} from '../../app/services/agent-common-service.service';

@Component({
  selector: 'app-right-top-bar',
  templateUrl: './right-top-bar.component.html',
  styleUrls: ['./right-top-bar.component.css']
})
export class RightTopBarComponent implements OnInit {
  agentObj:any;
  usernameState:any
  constructor(private agentCommonServiceService:AgentCommonServiceService,private rt:Router) { }
  activeClass1:string="has_sub";
  activeClass2:string="has_sub"; 
  activeClass3:string="has_sub";  

  ngOnInit(): void {
    this.agentObj=this.agentCommonServiceService.getUserFromLocalStorage();
    this.usernameState=`${this.agentObj?.first_name} ${this.agentObj?.last_name}`;
  }

  getClassActive(value:number)
  {
    switch(value)
    {
     case 1:
            
            if(this.activeClass1==="has_sub"){
              this.activeClass1="has_sub nav-active";
              }else if(this.activeClass1==="has_sub nav-active")
              {  
                this.activeClass1="has_sub";
              } 
              this.rt.navigate(['/dashboard']);
              
              break;

     case 2:
   
            if(this.activeClass2==="has_sub"){
             this.activeClass2="has_sub nav-active";
             }else if(this.activeClass2==="has_sub nav-active")
             {
               this.activeClass2="has_sub";
             }
             this.rt.navigate(['/dashboard']);
            break;

     case 3:
           if(this.activeClass3==="has_sub"){
              this.activeClass3="has_sub nav-active";
             }else if(this.activeClass3==="has_sub nav-active")
             {
              this.activeClass3="has_sub";
             }
             break;
    default: this.rt.navigateByUrl('/dashboard')         

    }
  }

  redirectProcessLeads()
  {
    this.rt.navigate(['/dashboard','process-leads']);
  }



  

  logoutAgentUser()
  {
    this.agentCommonServiceService.removeObjecLocal('agentData');
    this.rt.navigate(['/']);
  }

}
