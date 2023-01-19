import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import{HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  constructor(private api:ApiService,private Http:HttpClientModule) { }

  ngOnInit(): void {
  }
add_dep(value:any){
this.api.postdepartments(value);
alert ("department is successfully added")
window.location.reload();


}
}
