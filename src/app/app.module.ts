import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LeadProcesModule } from './lead-proces/lead-proces.module';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import{AgentAuthGuard} from '../app/auth-gard/agent-auth-guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightContentComponent } from './right-content/right-content.component';
import { RightTopBarComponent } from './right-top-bar/right-top-bar.component';
import { RightContentPagesComponent } from './right-content-pages/right-content-pages.component';
import { AgentLeadCountComponent } from './agent-lead-count/agent-lead-count.component';
import { RightContentDisplayPagesComponent } from './right-content-display-pages/right-content-display-pages.component';
import { LeadsDtlsTblComponent } from './leads-dtls-tbl/leads-dtls-tbl.component';
import { AgentRegisterComponent } from './agent-register/agent-register.component';
import { LeadsDtlsProcessTblComponent } from './leads-dtls-process-tbl/leads-dtls-process-tbl.component';
import { LeadsDtlsReviewTblComponent } from './leads-dtls-review-tbl/leads-dtls-review-tbl.component';
import { SuperAgentNewLeadsTblComponent } from './super-agent-new-leads-tbl/super-agent-new-leads-tbl.component';
//import {}

//FormsModule
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    RightContentComponent,
    RightTopBarComponent,
    RightContentPagesComponent,
    AgentLeadCountComponent,
    RightContentDisplayPagesComponent,
    LeadsDtlsTblComponent,
    AgentRegisterComponent,
    LeadsDtlsProcessTblComponent,
    LeadsDtlsReviewTblComponent,
    SuperAgentNewLeadsTblComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LeadProcesModule,
    DataTablesModule,
  ],
  providers: [AgentAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
