import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLeadCountComponent } from './agent-lead-count.component';

describe('AgentLeadCountComponent', () => {
  let component: AgentLeadCountComponent;
  let fixture: ComponentFixture<AgentLeadCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentLeadCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentLeadCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
