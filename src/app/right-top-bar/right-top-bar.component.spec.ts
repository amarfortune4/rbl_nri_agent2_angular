import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTopBarComponent } from './right-top-bar.component';

describe('RightTopBarComponent', () => {
  let component: RightTopBarComponent;
  let fixture: ComponentFixture<RightTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
