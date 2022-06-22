import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls8Component } from './lead-dtls8.component';

describe('LeadDtls8Component', () => {
  let component: LeadDtls8Component;
  let fixture: ComponentFixture<LeadDtls8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
