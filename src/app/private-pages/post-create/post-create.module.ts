import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostCreateRoutingModule } from './post-create-routing.module';
import { PostEditComponent } from '../post-edit/post-edit.component';


@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent

  ],
  imports: [
    SharedModule,
    PostCreateRoutingModule,
  ]
})
export class PostCreateModule { }


