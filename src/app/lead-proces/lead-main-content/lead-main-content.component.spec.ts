import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadMainContentComponent } from './lead-main-content.component';

describe('LeadMainContentComponent', () => {
  let component: LeadMainContentComponent;
  let fixture: ComponentFixture<LeadMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
