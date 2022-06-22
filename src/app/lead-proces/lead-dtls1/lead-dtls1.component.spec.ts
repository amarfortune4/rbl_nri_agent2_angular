import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls1Component } from './lead-dtls1.component';

describe('LeadDtls1Component', () => {
  let component: LeadDtls1Component;
  let fixture: ComponentFixture<LeadDtls1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
