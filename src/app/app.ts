import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Databinding} from './databinding/databinding';
import {Signal} from './signal/signal';
import {Controlflow} from './controlflow/controlflow';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LearningAngular';
}
