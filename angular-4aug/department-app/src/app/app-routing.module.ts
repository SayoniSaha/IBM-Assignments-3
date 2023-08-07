import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListDepartmentComponent } from './list-department/list-department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

const routes: Routes = [
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'list', component: ListDepartmentComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
