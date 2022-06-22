import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDocImgComponent } from './lead-doc-img.component';

describe('LeadDocImgComponent', () => {
  let component: LeadDocImgComponent;
  let fixture: ComponentFixture<LeadDocImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadDocImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDocImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
