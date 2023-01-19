import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

import { AddAppointmentDistributorService } from '../../core/add-appointment-distributor.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

    // Variable declaration and initialization

  // Dependency Injection inside constructor
  constructor(private addAppointmentDistributorService:AddAppointmentDistributorService, private api:ApiService) { }


  ngOnInit(): void {

    // Fetch / Load data
    

    // Validation Logic
  }
  addapp(value:any){
console.log(value)
this.api.posappointment(value);
alert ("department is successfully added")
window.location.reload();


  }


  // Logic for the submit
  onSubmit() {

  }
}
