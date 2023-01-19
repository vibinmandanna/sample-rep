import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AllAppointmentsComponent } from './all-appointments.component';

describe('AllAppointmentsComponent', () => {
  let component: AllAppointmentsComponent;
  let fixture: ComponentFixture<AllAppointmentsComponent>;

  beforeEach(async () => {
    [HttpClientTestingModule,HttpTestingController,HttpClientModule]
    await TestBed.configureTestingModule({

      
      declarations: [ AllAppointmentsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
