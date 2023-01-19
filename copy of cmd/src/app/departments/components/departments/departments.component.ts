import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private api:ApiService) { }
department:any;
  ngOnInit(): void {
    this.api.getdepartments().subscribe((data:any)=>{
this.department=data;
    });
  }
  temp:any;
  delete_dep(d:any){
    this.temp=d.id;
  }
 
  Removedep(){
    this.api.delete(this.temp)
  }

}
