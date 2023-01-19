import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private api:ApiService) { }
  doctor:any;
  
  ngOnInit(): void {
    this.api.getdoctor().subscribe((info:any)=>{
      this.doctor=info;
          });
  }
  temp:any;
  delete_d(d:any){
    this.temp=d.id;

  }

  remove(){
    this.api.delete_doc(this.temp)
  }

}
