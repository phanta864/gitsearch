import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from '../repos/repos.component';
import { UserComponent } from '../user/user.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'repos', component: RepoComponent },
  { path: 'user', component: UserComponent },
  { path: "", redirectTo: "/repos", pathMatch: "full" },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,


  ],
  exports: [
    RouterModule,
    FormsModule,

  ],
  declarations: []
})

export class RoutingModule { }
