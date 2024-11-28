import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledetailsComponent } from './mobiledetails.component';

describe('MobiledetailsComponent', () => {
  let component: MobiledetailsComponent;
  let fixture: ComponentFixture<MobiledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiledetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
