import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDtlsTblComponent } from './leads-dtls-tbl.component';

describe('LeadsDtlsTblComponent', () => {
  let component: LeadsDtlsTblComponent;
  let fixture: ComponentFixture<LeadsDtlsTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDtlsTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDtlsTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
