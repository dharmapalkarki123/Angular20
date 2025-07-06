import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

  firstName="Dharmapal Karki"

  courseName =signal<String>("Angular");

  courseDuration =signal("Ten Videos");

  courseDetails=computed(()=>this.courseName()+" "+this.courseDuration());

  constructor() {
    this.firstName="RAM RIJAL"

    console.log(this.firstName);
    console.log(this.courseDuration());

    setTimeout(()=>{

      this.courseName.set("React")

    },5000);
    console.log(this.courseName)




  }



}
