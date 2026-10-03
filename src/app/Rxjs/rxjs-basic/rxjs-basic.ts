import { Component } from '@angular/core';
import {from, interval, Observable, of, timer} from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css'
})
export class RxjsBasic {
  cityList:string[]=["Kathmandu","Biratnagar","Dharan"]

  cityList$=of(["Kathmandu","Biratnagar","Dharan"])
  cityList$2=from(["ktm","balkhu","sanepa"])

  myInnterval$= interval(1000);

  timer$=timer(5000);

  constructor() {


    this.timer$.subscribe(res=>{
      console.log("Timer executed")
    });

    this.myInnterval$.subscribe((res:number)=>{
      console.log('Interval: ' +res);


    })

    this.cityList$2.subscribe((res:string)=>{

      debugger;

    })

    this.cityList$.subscribe((cityData:string[])=>{
      debugger
      console.log(cityData)
    })


  const myObs$=new  Observable(value=>{
    value.next("This is Demo");
  });

  myObs$.subscribe(message=>{
    debugger
    console.log(message);
  })

  }

}
