import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {combineLatest, debounce, debounceTime} from 'rxjs';

@Component({
  selector: 'app-rxjs-reactive-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './rxjs-reactive-form.html',
  styleUrl: './rxjs-reactive-form.css'
})
export class RxjsReactiveForm implements OnInit{

  userForm! :FormGroup

passwordMismatch :boolean=false;

  searchControl=new FormControl("ABC")


  constructor(private fb:FormBuilder) {

    this.userForm=this.fb.group({
      name:['',Validators.required],
      subscribe:[false],
      email:['',Validators.required],
      password:[''],
      confirmPassword:[''],
      age:[''],
      drivingLicence:[''],
      country:[''],
      search:['']
    })



  }

  ngOnInit() {
    this.userForm.controls['confirmPassword'].disable();

    // this.searchControl.valueChanges.pipe(debounceTime(1000)).subscribe(
    //   (res:any)=>{
    //     console.log("Search text is:" +res)
    //   }
    // )

    this.userForm.controls['name'].valueChanges.subscribe((res: any) => {
      debugger;
    });

    this.searchControl.valueChanges.subscribe((res: any) => {
      console.log(res);
    });

    this.userForm.valueChanges.subscribe((formvalue: any) => {
      debugger;
    });
    this.userForm.controls['password'].valueChanges.subscribe((res: any) => {

      if (res && res.trim() !== '') {

        this.userForm.controls['confirmPassword'].addValidators(
          Validators.required
        );

        this.userForm.controls['confirmPassword'].enable();

      } else {

        this.userForm.controls['confirmPassword'].disable();

        this.userForm.controls['confirmPassword'].clearValidators();

        this.userForm.controls['confirmPassword'].reset();

      }

      this.userForm.controls['confirmPassword'].updateValueAndValidity();

    });

    combineLatest([

      this.userForm.controls['password'].valueChanges,
      this.userForm.controls['confirmPassword'].valueChanges


    ]).subscribe(([pwd,confirmPwd])=>{

      this.passwordMismatch=pwd && confirmPwd && pwd !=confirmPwd;


    })

  }
}
