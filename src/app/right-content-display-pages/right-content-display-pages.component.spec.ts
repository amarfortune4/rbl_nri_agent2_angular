import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentDisplayPagesComponent } from './right-content-display-pages.component';

describe('RightContentDisplayPagesComponent', () => {
  let component: RightContentDisplayPagesComponent;
  let fixture: ComponentFixture<RightContentDisplayPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightContentDisplayPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightContentDisplayPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
