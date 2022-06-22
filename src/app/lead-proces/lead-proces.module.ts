import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


import { LeadDtls1Component } from './lead-dtls1/lead-dtls1.component';
import { LeadMainComponent } from './lead-main/lead-main.component';
import { LeadMainContentComponent } from './lead-main-content/lead-main-content.component';
import { LeadDtls2Component } from './lead-dtls2/lead-dtls2.component';
import { LeadDtls3Component } from './lead-dtls3/lead-dtls3.component';
import { LeadDtls4Component } from './lead-dtls4/lead-dtls4.component';
import { LeadDtls5Component } from './lead-dtls5/lead-dtls5.component';
import { LeadDtls6Component } from './lead-dtls6/lead-dtls6.component';
import { LeadDtls7Component } from './lead-dtls7/lead-dtls7.component';
import { LeadDtls8Component } from './lead-dtls8/lead-dtls8.component';
import { LeadDltsCommentsComponent } from './lead-dlts-comments/lead-dlts-comments.component';
import { LeadDocImgComponent } from './lead-doc-img/lead-doc-img.component';
import { LeadDtlsCustomerRelativesComponent } from './lead-dtls-customer-relatives/lead-dtls-customer-relatives.component';



@NgModule({
  declarations: [
    LeadDtls1Component,
    LeadMainComponent,
    LeadMainContentComponent,
    LeadDtls2Component,
    LeadDtls3Component,
    LeadDtls4Component,
    LeadDtls5Component,
    LeadDtls6Component,
    LeadDtls7Component,
    LeadDtls8Component,
    LeadDltsCommentsComponent,
    LeadDocImgComponent,
    LeadDtlsCustomerRelativesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LeadDtls1Component,
    LeadMainComponent,
    LeadDtls2Component,
    LeadDtls3Component,
    LeadDtls4Component,
    LeadDtls5Component,
    LeadDtls6Component,
    LeadDtls7Component,
    LeadDtls8Component
  ]
})
export class LeadProcesModule { }
