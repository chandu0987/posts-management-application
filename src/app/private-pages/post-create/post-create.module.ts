import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostCreateRoutingModule } from './post-create-routing.module';

@NgModule({
  declarations: [
    PostCreateComponent,
  ],
  imports: [
    SharedModule,
    PostCreateRoutingModule
  ]
})
export class PostCreateModule { }


 