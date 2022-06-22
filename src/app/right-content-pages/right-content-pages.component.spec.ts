import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentPagesComponent } from './right-content-pages.component';

describe('RightContentPagesComponent', () => {
  let component: RightContentPagesComponent;
  let fixture: ComponentFixture<RightContentPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightContentPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightContentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
