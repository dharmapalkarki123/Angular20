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
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": " ",
    "mobileNo": " "

  }

  ngOnInit() {
    this.getUsers();
    this.saveUser();
  }


  getUsers(){
    this.http.get('https://api.freeprojectapi.com/api/Survey/getAllUsers').subscribe((res:any)=>{
      this.userList=res;
    })
  }

  saveUser(){
    debugger
    this.http.post('https://api.freeprojectapi.com/api/Survey/register',this.userObj).subscribe({
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



}
