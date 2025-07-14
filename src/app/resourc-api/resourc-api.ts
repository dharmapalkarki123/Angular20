import {Component, inject, resource} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-resourc-api',
  imports: [],
  templateUrl: './resourc-api.html',
  styleUrl: './resourc-api.css'
})
export class ResourcApi {
  http=inject(HttpClient)

  userData=resource({
    loader:()=>{
      return fetch('https://jsonplaceholder.typicode.com/users').then(result=>result.json())
    }
  })


  userList=rxResource({
    stream:()=> this.http.get<any>('https://jsonplaceholder.typicode.com/users')


  })

  constructor() {
    setTimeout(()=>{
      this.userData.reload()
    },6000)
  }






}
