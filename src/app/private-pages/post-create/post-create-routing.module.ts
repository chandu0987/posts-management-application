import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostEditComponent } from '../post-edit/post-edit.component';
import { PostCreateComponent } from './post-create.component';

const routes: Routes = [
  {path: '', redirectTo:'create', pathMatch: 'full'},
  {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component:PostEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostCreateRoutingModule { }
