import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm implements OnInit{

  http=inject(HttpClient)

  userObj:FormGroup=new FormGroup({
    id:new FormControl(0),
    name:new FormControl("name"),
    age:new FormControl("age"),
    prescription:new FormControl("prescription"),
    blood:new FormControl("blood")
  })

  ngOnInit() {

    this.saveUser()


  }

  saveUser(){
    const formValue=this.userObj.value
    debugger
    this.http.post('http://localhost:8086/api/v0/patients',formValue).subscribe({
      next:(result)=>{
        debugger
        alert("User created Sucessfully");

      },
      error:(error)=>{
        debugger
        alert("Error -" +error);
      }
    })
  }





}
