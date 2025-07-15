import
{ Routes } from '@angular/router';
import {Signal} from './signal/signal';
import {Databinding} from './databinding/databinding';
import {Controlflow} from './controlflow/controlflow';
import {AttributeDirectives} from './attribute-directives/attribute-directives';
import {ApiGet} from './api-get/api-get';
import {User} from './user/user';
import {ReactiveForm} from './reactive-form/reactive-form';
import {Pipe} from './pipe/pipe';
import {ResourcApi} from './resourc-api/resourc-api';
import {Login} from './login/login';
import {Layout} from './layout/layout';

export const routes: Routes = [

  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:Login
  },

  {
    path:'',
    component:Layout,
    children:[

      {path:"signals", component:Signal},
      {path:"data",component:Databinding},
      {path:"control",component:Controlflow},
      {path:"directive", component:AttributeDirectives},
      {path:"api",component:ApiGet},
      {path:"user",component:User},
      {path:"reactiveForm",component:ReactiveForm},
      {path:"pipe",component:Pipe},
      {path:"resourceApi", component:ResourcApi}


    ]
  }



];
