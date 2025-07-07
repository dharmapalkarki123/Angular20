import { Routes } from '@angular/router';
import {Signal} from './signal/signal';
import {Databinding} from './databinding/databinding';
import {Controlflow} from './controlflow/controlflow';
import {AttributeDirectives} from './attribute-directives/attribute-directives';

export const routes: Routes = [
  {path:"signals", component:Signal},
  {path:"data",component:Databinding},
  {path:"control",component:Controlflow},
  {path:"directive", component:AttributeDirectives}

];
