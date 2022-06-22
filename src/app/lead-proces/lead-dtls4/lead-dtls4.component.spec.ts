import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls4Component } from './lead-dtls4.component';

describe('LeadDtls4Component', () => {
  let component: LeadDtls4Component;
  let fixture: ComponentFixture<LeadDtls4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
