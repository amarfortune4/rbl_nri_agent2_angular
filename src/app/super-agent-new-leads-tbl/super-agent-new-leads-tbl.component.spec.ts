import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAgentNewLeadsTblComponent } from './super-agent-new-leads-tbl.component';

describe('SuperAgentNewLeadsTblComponent', () => {
  let component: SuperAgentNewLeadsTblComponent;
  let fixture: ComponentFixture<SuperAgentNewLeadsTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAgentNewLeadsTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAgentNewLeadsTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
