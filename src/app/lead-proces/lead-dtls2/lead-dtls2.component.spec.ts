import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls2Component } from './lead-dtls2.component';

describe('LeadDtls2Component', () => {
  let component: LeadDtls2Component;
  let fixture: ComponentFixture<LeadDtls2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
