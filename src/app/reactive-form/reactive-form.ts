import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

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
    name:new FormControl("",Validators.required),
    age:new FormControl("",[Validators.required,Validators.minLength(4)]),
    prescription:new FormControl("",[Validators.required,Validators.minLength(4),Validators.email]),
    blood:new FormControl("",[Validators.required,Validators.minLength(4)])
  })

  ngOnInit() {

   


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
