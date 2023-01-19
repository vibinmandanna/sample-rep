import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(private api:ApiService) { }
  patient:any;
  ngOnInit(): void {
    
    this.api.getpatient().subscribe((info:any)=>{
      this.patient=info;
          });
  }



  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
  temp:any;
  delete_p(p:any){
    this.temp=p.id;

  }

  remove(){
    this.api.delete_pat(this.temp)
  }
}
