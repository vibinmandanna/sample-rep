import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';


@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  constructor(private api:ApiService) { }
  patient:any;
  ngOnInit(): void {

  }
  add_pat(value:any){
    this.api.postpatient(value)
    // window.location.reload();
    // console.log(value)
  }

}
