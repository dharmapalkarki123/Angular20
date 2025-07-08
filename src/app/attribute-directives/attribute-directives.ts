import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, OnDestroy,
  OnInit,
  signal
} from '@angular/core';
import {DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-attribute-directives',
  imports: [NgClass,NgStyle,UpperCasePipe,LowerCasePipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css'
})
export class AttributeDirectives implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{



  firstName="Dharmpal"
  courseName='Angular 20'


studentRoll=[1,2,3,4,5,6,7,8]

  currentDate =new Date()


  studentObj={
    name:'Ram Rijal',
    roll:'12',
    city:'Kathmandu'

  }


  constructor() {
    console.log("constructor")
  }


  ngOnInit(){
    console.log("ngOnInit")
    //to trigger api call
    //to subscribe
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked")
  }

  ngAfterContentInit() {
    console.log("AfterContentInit")
  }

  ngAfterViewInit() {
    console.log("AfterViewInit")
    //to deal  with Viewchild
    //subscribe
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked")
  }




  ngOnDestroy() {
    console.log("Ondestroy")

    //unsubscribe
    //to restrict use from navigating

  }


  divClass1 =signal(" ")

 isDivGreen=false

  bgClick(className:string){
    this.divClass1.set(className);
  }
  toggle(){

    this.isDivGreen=false

  }



}
