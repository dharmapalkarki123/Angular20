import {Component, inject, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Master} from '../../services/master';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sun-beh-replay',
  imports: [
    FormsModule
  ],
  templateUrl: './sun-beh-replay.html',
  styleUrl: './sun-beh-replay.css'
})
export class SunBehReplay  implements OnInit{


  userId:number=0;
  studentName$=new Subject()

  rollNo$=new Subject<number>()
  taketill=new Subject<void>()
  courseName:Subject<string>=new Subject<string>()


  userService=inject(Master);

  constructor() {
    setTimeout(()=>{
      this.studentName$.next("Angular 20");
      this.rollNo$.next(2345);
      this.taketill.next();
      this.userService.courseDuration.next("3month");
    },4000)

  }
  ngOnInit() {

    this.userService.courseDuration.subscribe((res:string)=>{
      debugger
    })

    this.studentName$.subscribe((res:any)=>{
      debugger;

    })
    this.rollNo$.subscribe((res:number)=>{
      debugger
    })

  }

  onRoleChange(event:any){

    debugger;
    this.userService.$roleBehaviour.next(event.target.value)
    this.userService.$roleSub.next(event.target.value)


  }

  getUser(){
    this.userService.getUserById(this.userId).subscribe((res:any)=>{
      debugger;
    })
  }


}
