nimport { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserticketinfoComponent } from './userticketinfo.component';

describe('UserticketinfoComponent', () => {
  let component: UserticketinfoComponent;
  let fixture: ComponentFixture<UserticketinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserticketinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserticketinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
