import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentCommonServiceService } from '../services/agent-common-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private rt:Router,private agentCommonServiceService:AgentCommonServiceService) { }
  activeClass1:string="has_sub";
  activeClass2:string="has_sub"; 
  activeClass3:string="has_sub";  
  ngOnInit(): void {
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