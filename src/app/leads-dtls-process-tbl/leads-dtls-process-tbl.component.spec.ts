import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDtlsProcessTblComponent } from './leads-dtls-process-tbl.component';

describe('LeadsDtlsProcessTblComponent', () => {
  let component: LeadsDtlsProcessTblComponent;
  let fixture: ComponentFixture<LeadsDtlsProcessTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDtlsProcessTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDtlsProcessTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
