import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDtls6Component } from './lead-dtls6.component';

describe('LeadDtls6Component', () => {
  let component: LeadDtls6Component;
  let fixture: ComponentFixture<LeadDtls6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDtls6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDtls6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
