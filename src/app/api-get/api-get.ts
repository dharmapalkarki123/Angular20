import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-api-get',
  imports: [],
  templateUrl: './api-get.html',
  styleUrl: './api-get.css'
})
export class ApiGet implements OnInit{

  http=inject(HttpClient);

  userList:any[]=[]

  ngOnInit() {
    debugger;
    this.getUser();
  }

  getUser(){
    debugger

    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((result:any)=>{
      debugger
     this.userList=result;
    })


  }


}
