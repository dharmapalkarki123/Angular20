import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-rxjs-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-reactive-form.html',
  styleUrl: './rxjs-reactive-form.css'
})
export class RxjsReactiveForm implements OnInit{

  userForm! :FormGroup



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
      if (res !== '') {
        this.userForm.controls['confirmPassword'].addValidators([
          Validators.required
        ]);

        this.userForm.controls['confirmPassword'].enable();
        this.userForm.controls['confirmPassword'].updateValueAndValidity();
      }
    });
  }
}
