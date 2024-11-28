import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageflightsComponent } from './manageflights.component';

describe('ManageflightsComponent', () => {
  let component: ManageflightsComponent;
  let fixture: ComponentFixture<ManageflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
