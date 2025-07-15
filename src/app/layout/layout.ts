import
{ Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {Master} from '../master';

@Component({
  selector: 'app-layout',
    imports: [
        RouterLink,
        RouterOutlet
    ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  loggegedUserName=" "
  constructor(private masterService:Master) {

    this.readLogged()
    this.masterService.onLogin.subscribe(res=>{
      this.readLogged()
    })


  }

  readLogged(){

    const loggedData=localStorage.getItem("Angular20");

    if(loggedData !=null){

      this.loggegedUserName=loggedData;

    }



  }

  loggOf(){

    localStorage.removeItem("Angular20")
    this.readLogged();
    this.loggegedUserName=' ';


  }

}
