import {Component, inject, OnInit} from '@angular/core';
import {JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {NaPipe} from '../na-pipe';
import {HttpClient} from '@angular/common/http';
import {Master} from '../master';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe, SlicePipe,NaPipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe implements OnInit{

  http=inject(HttpClient)

  masterService=inject(Master)

  ngOnInit() {
     debugger
    const result=this.masterService.getSum(10,50)

    this.getUsers()
    const appData=this.masterService.appName
  }

  courseName="Angular 20"
  courseDuration="10 Videos "
  title="Hello baby how are you?"

  student=[1,2,3,4,5,6,]

  studentObj={
    name:"Ram Rijal",
    age:"24",
    address:""
  }

  userList: any[]=[]

  getUsers(){
    debugger;
    this.masterService.getUsers().subscribe((res:any)=>{

      debugger;
      this.userList=res;

    })
  }




}
