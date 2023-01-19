import { ComponentFixture, TestBed } from '@angular/core/testing';
import{HttpClientModule} from '@angular/common/http';
import { AddPetsComponent } from './add-pets.component';
import { ApiService } from 'src/api.service';

describe('AddPetsComponent', () => {
  let component: AddPetsComponent;
  let fixture: ComponentFixture<AddPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,ApiService],
      declarations: [ AddPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
