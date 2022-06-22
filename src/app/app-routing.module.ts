import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AgentRegisterComponent } from './agent-register/agent-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RightContentDisplayPagesComponent } from './right-content-display-pages/right-content-display-pages.component';
import {AgentAuthGuard} from './auth-gard/agent-auth-guard';

import { LeadDtls2Component } from './lead-proces/lead-dtls2/lead-dtls2.component';
import { LeadMainComponent } from './lead-proces/lead-main/lead-main.component';
import { LeadsDtlsProcessTblComponent } from './leads-dtls-process-tbl/leads-dtls-process-tbl.component';
import { LeadsDtlsReviewTblComponent } from './leads-dtls-review-tbl/leads-dtls-review-tbl.component';
import { LeadsDtlsTblComponent } from './leads-dtls-tbl/leads-dtls-tbl.component';
import { LeadDltsCommentsComponent } from './lead-proces/lead-dlts-comments/lead-dlts-comments.component';
import { SuperAgentNewLeadsTblComponent } from './super-agent-new-leads-tbl/super-agent-new-leads-tbl.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:AgentRegisterComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    
    {path:'',component:RightContentDisplayPagesComponent},
    {path:'new-leads',component:LeadsDtlsTblComponent},
    {path:'process-leads',component:LeadsDtlsProcessTblComponent},
    {path:'review-leads',component:LeadsDtlsReviewTblComponent},
    {path:'lead-dtls1/:applicantID',component:LeadMainComponent},
    {path:'lead-dtls2',component:LeadDtls2Component},
    {path:'lead-dtls3',component:LeadMainComponent},
    {path:'lead-dtls4',component:LeadMainComponent},
    {path:'lead-dtls5',component:LeadMainComponent},
    {path:'lead-dtls6',component:LeadMainComponent},
    {path:'lead-dtls7',component:LeadMainComponent},
    {path:'lead-dtls8',component:LeadMainComponent},
    {path:'comments/:applicantID',component:LeadDltsCommentsComponent},
  ],canActivate:[AgentAuthGuard]},
  // {path:'dashboard',component:DashboardComponent,children:[
  //   {path:'',component:RightContentDisplayPagesComponent},
  //   {path:'new-leads',component:LeadsDtlsTblComponent},
  //   {path:'process-leads',component:LeadsDtlsProcessTblComponent},
  //   {path:'review-leads',component:LeadsDtlsReviewTblComponent},
  //   {path:'lead-dtls1/:applicantID',component:LeadMainComponent},
  //   {path:'lead-dtls2',component:LeadDtls2Component},
  //   {path:'lead-dtls3',component:LeadMainComponent},
  //   {path:'lead-dtls4',component:LeadMainComponent},
  //   {path:'lead-dtls5',component:LeadMainComponent},
  //   {path:'lead-dtls6',component:LeadMainComponent},
  //   {path:'lead-dtls7',component:LeadMainComponent},
  //   {path:'lead-dtls8',component:LeadMainComponent},
  //   {path:'comments/:applicantID',component:LeadDltsCommentsComponent},
  // ],canActivate:[AgentAuthGuard]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
