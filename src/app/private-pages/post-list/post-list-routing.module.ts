import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePostListComponent } from './post-list.component';

const routes: Routes = [
  {path: '', component: PrivatePostListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostListRoutingModule { }
 