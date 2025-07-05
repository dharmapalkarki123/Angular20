import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Databinding} from './databinding/databinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Databinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LearningAngular';
}
