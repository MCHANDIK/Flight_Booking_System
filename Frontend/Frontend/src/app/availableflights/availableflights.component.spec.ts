import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AvailableflightsComponent } from './availableflights.component';
import { RouterModule } from '@angular/router';

describe('AvailableflightsComponent', () => {
  let component: AvailableflightsComponent;
  let fixture: ComponentFixture<AvailableflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AvailableflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(AvailableflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
