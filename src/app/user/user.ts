import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{

  http=inject(HttpClient);

  userList: any[]=[]

  userObj={

    "id":0,

    "name": "",
    "age": "",
    "prescription": " ",
    "blood": " "

  }

  ngOnInit() {
    this.getUsers();
    this.saveUser();
  }


  getUsers(){
    this.http.get('http://localhost:8086/api/v0/patients').subscribe((res:any)=>{
      this.userList=res;
    })
  }

  saveUser(){
    debugger
    this.http.post('http://localhost:8086/api/v0/patients',this.userObj).subscribe({
      next:(result)=>{
        debugger
        alert("User created Sucessfully");
        this.getUsers();
      },
      error:(error)=>{
        debugger
        alert("Error -" +error);
      }
    })
  }

  onEdit(item:any){
    this.userObj=item;
  }


  updateUser() {
    debugger;
    this.http.put(`http://localhost:8086/api/v0/patients/${this.userObj.id}`, this.userObj).subscribe({
      next: () => {
        debugger;
        alert("Updated Success");
        this.getUsers();
      },
      error: (error) => {
        debugger;
        alert("Error - " + error.error);
      }
    });
  }


  onReset(){
    this.userObj={

      "id":0,

      "name": "",
      "age": "",
      "prescription": " ",
      "blood": " "

    }
  }

  onDelete(id:number){
    debugger

    this.http.delete(`http://localhost:8086/api/v0/patients/${id}`).subscribe({
      next: () => {
        debugger
        alert("Deleted Successfully");
        this.getUsers();
      },
      error: (error) => {
        debugger
        alert("Error - " + error.error);
      }
    });

  }



}
