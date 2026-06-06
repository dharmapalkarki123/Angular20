import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-topic-info',
  imports: [],
  templateUrl: './topic-info.html',
  styleUrl: './topic-info.css'
})
export class TopicInfo {

  @Input() topicName:string="";
  @Input() topicCategory:string="";
  @Input() subtitle:string="";
  @Input() topicList:string[]=[];

}
