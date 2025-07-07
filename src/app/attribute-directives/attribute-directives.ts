import {Component, signal} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';


@Component({
  selector: 'app-attribute-directives',
  imports: [NgClass,NgStyle],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css'
})
export class AttributeDirectives {

  divClass1 =signal(" ")

 isDivGreen=false

  bgClick(className:string){
    this.divClass1.set(className);
  }
  toggle(){

    this.isDivGreen=false

  }



}
