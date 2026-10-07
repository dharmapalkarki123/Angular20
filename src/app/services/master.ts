import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, shareReplay, Subject, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {

  private  userDetail=new Map<number,Observable<any>>()

  $roleBehaviour=new BehaviorSubject("");
  $roleSub=new Subject<string>()

  courseDuration=new BehaviorSubject<string>("2month")

  constructor(private http:HttpClient) { }


  getUsers(){
    return  this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      tap((userList=>{
        debugger;
      })),
      map((userList:any)=>userList.map((user:any)=>{
        return {
          id:user.id,
          name:user.name
        }
      }))
    );
  }

  getSingleUser(){

    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((userData:any)=>userData.address));

  }

  getUserById(id: number): any | undefined{

    if(!this.userDetail.has(id)){
      const userDataObser= this.http.get("http://jsonplaceholder.typicode.com/users/" +id).pipe(
        shareReplay(1)
      );
      this.userDetail.set(id,userDataObser);
    }
    return this.userDetail.get(id);

  }


}
