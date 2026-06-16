import { Component } from '@angular/core';
import {TopicInfo} from '../reusableComponent/topic-info/topic-info';

@Component({
  selector: 'app-table-form',
  imports: [TopicInfo],
  templateUrl: './table-form.html',
  styleUrl: './table-form.css'
})
export class TableForm {

}
