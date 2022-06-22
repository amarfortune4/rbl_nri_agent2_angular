import { Component, ElementRef, OnInit, ViewChild,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-lead-main-content',
  templateUrl: './lead-main-content.component.html',
  styleUrls: ['./lead-main-content.component.css']
})
export class LeadMainContentComponent implements OnInit,AfterViewInit {

  @ViewChild('fatcaAccrdBtn') fatcaAccrdBtn: ElementRef|any;
  @ViewChild('kycAccrdBtn') kycAccrdBtn: ElementRef|any;
  @ViewChild('ContactAccrdBtn') ContactAccrdBtn: ElementRef|any;
  @ViewChild('AddressAccrdBtn') AddressAccrdBtn: ElementRef|any;
  @ViewChild('CustomerProfilerAccrdBtn') CustomerProfilerAccrdBtn: ElementRef|any;
  @ViewChild('InternetBankingAccrdBtn') InternetBankingAccrdBtn: ElementRef|any;
  @ViewChild('NominationAccrdBtn') NominationAccrdBtn: ElementRef|any;


  //ContactAccrdBtn

  attrTargetFatca:string='';
  attrTargetKyc:string='';
  attrTargetContact:string='';
  attrTargetAddress:string='';
  attrTargetCustomerProfiler:string='';
  attrTargetInternetBanking:string='';
  attrTargetNomination:string='';

  constructor() { }

  ngAfterViewInit(): void {
    
    //this.fatcaAccrdBtn.nativeElement



    // alert('This is fatca HTML element');
    throw new Error('Method not implemented.');
    
  }






  

  ngOnInit(): void {
  }

  showFatcaDiv()
  {
    this.fatcaAccrdBtn.nativeElement.click();
    console.log('This is show fatca',this.fatcaAccrdBtn)
    this.attrTargetFatca="#fatca";
    
  }

  showKycDiv()
  {
    this.attrTargetKyc="#kycDetails";
    this.kycAccrdBtn.nativeElement.click();
  }

  showContactDiv()
  {
    this.attrTargetContact="#Contact";
    this.ContactAccrdBtn.nativeElement.click();
  }

  showAddressDiv()
  {
    this.attrTargetAddress="#addressDetails";
    this.AddressAccrdBtn.nativeElement.click();

  }

  showCustomerProfilerDiv()
  {
    this.attrTargetCustomerProfiler="#customerProfiler";
    this.CustomerProfilerAccrdBtn.nativeElement.click();
  }


  showInternetBankingDiv()
  {
    this.attrTargetInternetBanking="#internetBanking";
    this.InternetBankingAccrdBtn.nativeElement.click();

  }

  showNominationDiv()
  {
    this.attrTargetNomination="#Nominations";
    this.NominationAccrdBtn.nativeElement.click();
  }

  

  

}
