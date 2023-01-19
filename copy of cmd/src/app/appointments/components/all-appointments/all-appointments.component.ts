import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  constructor( private api:ApiService) { }
  Appointment:any;
  ngOnInit(): void {
    this.api.getappointment().subscribe((data:any)=>{
      this.Appointment=data;
          });
  }


  list:boolean=false;
  card:boolean=true;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

  temp:any;
  
  delete_app(a:any){
    this.temp=a.id;
  }
removeappp(){
    this.api.delete_app(this.temp);
    // window.location.reload();
  }
}
