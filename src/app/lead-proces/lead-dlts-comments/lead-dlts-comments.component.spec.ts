import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDltsCommentsComponent } from './lead-dlts-comments.component';

describe('LeadDltsCommentsComponent', () => {
  let component: LeadDltsCommentsComponent;
  let fixture: ComponentFixture<LeadDltsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDltsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDltsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
