import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTutorialComponent } from './create-tutorial/create-tutorial.component';
import { ListTutorialComponent } from './list-tutorial/list-tutorial.component';

const routes: Routes = [
  { path: 'create-tutorial', component: CreateTutorialComponent },
  { path: 'list-tutorial', component: ListTutorialComponent },
  { path: '', redirectTo: 'list-tutorial', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
