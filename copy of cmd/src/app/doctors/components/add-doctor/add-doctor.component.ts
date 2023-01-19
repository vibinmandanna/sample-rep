import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  add_doc(value:any){
    this.api.postdoctor(value)
    // window.location.reload();
    // console.log(value)
  }

}
