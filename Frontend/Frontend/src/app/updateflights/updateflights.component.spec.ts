import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateflightsComponent } from './updateflights.component';

describe('UpdateflightsComponent', () => {
  let component: UpdateflightsComponent;
  let fixture: ComponentFixture<UpdateflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
