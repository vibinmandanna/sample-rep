import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private api:ApiService) { }
 
  app:any;
  doctor:any;
  patient:any;
  ngOnInit(): void {
    this.api.getappointment().subscribe((data:any)=>{
this.app=data;
    })
this.api.getdoctor().subscribe((info:any)=>{
  this.doctor=info;
    })
    this.api.getpatient().subscribe((info:any)=>{
      this.patient=info;
          });


   
  }

  count_status(response:boolean){
    let a=0, c=0;
    for( let i=0; i<this.app.length; i++){
      if(this.app[i].status==true){a=a+1}
      else{c=c+1}
    }
    if(response){return a} else{return c}
  }

}
