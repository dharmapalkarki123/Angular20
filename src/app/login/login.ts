import {Component, inject} from '@angular/core';
import {Router, ROUTES} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Master} from '../master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  userObj: any={
    email:" ",
    password:""
  }

  route=inject(Router)

  master=inject(Master)


  onLogin(){

    if(this.userObj.email=="abc@gmail.com" && this.userObj.password=="admin"){
      this.route.navigateByUrl("/pipe")
      localStorage.setItem("Angular20",'Admin')
      this.master.onLogin.next(true);
    }else {
      alert("Did not match with correct credential")
    }


  }

}
