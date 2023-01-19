import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddDepartmentsComponent } from './add-departments.component';

describe('AddDepartmentsComponent', () => {
  
  let component: AddDepartmentsComponent;
  let fixture: ComponentFixture<AddDepartmentsComponent>;

  beforeEach(async () => {

    [HttpClientTestingModule,HttpTestingController,HttpClientModule]
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentsComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
