import { Component } from '@angular/core';
import {JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {NaPipe} from '../na-pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe, SlicePipe,NaPipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {

  courseName="Angular 20"
  courseDuration="10 Videos "
  title="Hello baby how are you?"

  student=[1,2,3,4,5,6,]

  studentObj={
    name:"Ram Rijal",
    age:"24",
    address:""
  }





}
