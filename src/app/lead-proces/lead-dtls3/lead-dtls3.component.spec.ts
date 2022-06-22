import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls3Component } from './lead-dtls3.component';

describe('LeadDtls3Component', () => {
  let component: LeadDtls3Component;
  let fixture: ComponentFixture<LeadDtls3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
