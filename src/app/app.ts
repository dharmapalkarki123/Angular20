import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Databinding} from './databinding/databinding';
import {Signal} from './signal/signal';
import {Controlflow} from './controlflow/controlflow';
import {Master} from './master';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LearningAngular';

  // loggegedUserName=" "
  // constructor(private masterService:Master) {
  //
  //   this.readLogged()
  //   this.masterService.onLogin.subscribe(res=>{
  //     this.readLogged()
  //   })
  //
  //
  // }
  //
  // readLogged(){
  //
  //   const loggedData=localStorage.getItem("Angular20");
  //
  //   if(loggedData !=null){
  //
  //     this.loggegedUserName=loggedData;
  //
  //   }
  //
  //
  //
  // }
  //
  // loggOf(){
  //
  //   localStorage.removeItem("Angular20")
  //   this.readLogged();
  //   this.loggegedUserName=' ';
  //
  //
  // }



}
