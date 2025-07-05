import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {

  name:String="Dharmapal Karki"
  Age:number=12;
  grade:number= 10;

  courseName: string="Angular Version 20"

  maxLength= 5;

  minChar= 3;

  inputType: string = 'checkbox';

  myClassName: string = 'myclass';

  showWelcomeMessage(){
    alert("Welcome To Angular universe");
  }

  changeCourseName(){
    this.courseName="Spring boot Dev"
    this.name="Dharmapal Bahadur Karki"
    this.Age=21
    this.grade=10

  }

  onCityChange(){
    alert("City Changed")
  }


}
