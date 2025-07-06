import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Databinding} from './databinding/databinding';
import {Signal} from './signal/signal';
import {Controlflow} from './controlflow/controlflow';

@Component({
  selector: 'app-root',
  imports: [Controlflow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LearningAngular';
}
