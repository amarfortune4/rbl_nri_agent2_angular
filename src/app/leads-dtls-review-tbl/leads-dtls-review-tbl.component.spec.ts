import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDtlsReviewTblComponent } from './leads-dtls-review-tbl.component';

describe('LeadsDtlsReviewTblComponent', () => {
  let component: LeadsDtlsReviewTblComponent;
  let fixture: ComponentFixture<LeadsDtlsReviewTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDtlsReviewTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDtlsReviewTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
