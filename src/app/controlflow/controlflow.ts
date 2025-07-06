import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css'
})
export class Controlflow {

  startingMonth="Jan"



  cityList: string[]=["Kathmandu","Biratnaghar","Ithari","Morang"]

  studentList: any[] = [
    { name: "Sujan", city: "Kathmandu", isActive: false },
    { name: "Anita", city: "Pokhara", isActive: true },
    { name: "Ramesh", city: "Biratnagar", isActive: false },
    { name: "Priya", city: "Lalitpur", isActive: true },
    { name: "Bikash", city: "Butwal", isActive: false }
  ];



  isShow: boolean=false

  ShowPage(){

    this.isShow=true;

  }

  hidePage(){

    this.isShow=false;


  }

  protected readonly status = status;
}
