import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { AnyTxtRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
//department
  getdepartments(){
    return this.http.get('http://localhost:3000/Department')
  }
  postdepartments(data:any){
    return this.http.post('http://localhost:3000/Department',data).subscribe((data:any)=>{
// console.log(data)
    })
  }

  delete(id:any){
 this.http.delete('http://localhost:3000/Department/'+id).subscribe()
    // window.location.reload();
  }
//appointment
  getappointment(){
    return this.http.get('http://localhost:3000/Appointment')
  }
  posappointment(data:any){
    return this.http.post('http://localhost:3000/Appointment',data).subscribe((data:any)=>{
console.log(data)
    })
  } 
  delete_app(id:any){
    this.http.delete('http://localhost:3000/Appointment/'+id).subscribe()
      console.log(id);
     }
//Doctor
     getdoctor(){
      return this.http.get('http://localhost:3000/doctor')
    }
    postdoctor(data:any){
      this.http.post('http://localhost:3000/doctor',data).subscribe((data:any)=>{
  console.log(data)
  window.location.reload()
      })
    } 
    delete_doc(id:any){
      this.http.delete('http://localhost:3000/doctor/'+id).subscribe()
        console.log(id);
        // window.location.reload()
       }
    
       getpatient(){
        return this.http.get('http://localhost:3000/patient')
      }

      postpatient(data:any){
        this.http.post('http://localhost:3000/patient',data).subscribe((data:any)=>{
    console.log(data)
    window.location.reload()
        })
      }
      delete_pat(id:any){
        this.http.delete('http://localhost:3000/patient/'+id).subscribe()
          console.log(id);
          // window.location.reload()
         } 



}