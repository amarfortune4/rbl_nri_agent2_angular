import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls5Component } from './lead-dtls5.component';

describe('LeadDtls5Component', () => {
  let component: LeadDtls5Component;
  let fixture: ComponentFixture<LeadDtls5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
