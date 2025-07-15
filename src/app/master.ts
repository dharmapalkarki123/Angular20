import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {


  onLogin:Subject<boolean>=new Subject<boolean>();

  http =inject(HttpClient)

  appName="Anguler 20 Version"

  constructor() { }

  getSum(num1:number,num2:number){
    debugger;
    const result=num1+num2;
    return result;
  }

  getUsers(){
    debugger;
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

}
