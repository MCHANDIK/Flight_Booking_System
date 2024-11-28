import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelticketsComponent } from './canceltickets.component';

describe('CancelticketsComponent', () => {
  let component: CancelticketsComponent;
  let fixture: ComponentFixture<CancelticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
