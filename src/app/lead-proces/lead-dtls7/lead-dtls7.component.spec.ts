import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls7Component } from './lead-dtls7.component';

describe('LeadDtls7Component', () => {
  let component: LeadDtls7Component;
  let fixture: ComponentFixture<LeadDtls7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
