import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtlsCustomerRelativesComponent } from './lead-dtls-customer-relatives.component';

describe('LeadDtlsCustomerRelativesComponent', () => {
  let component: LeadDtlsCustomerRelativesComponent;
  let fixture: ComponentFixture<LeadDtlsCustomerRelativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtlsCustomerRelativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtlsCustomerRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
