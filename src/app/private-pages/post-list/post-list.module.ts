import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListRoutingModule } from './post-list-routing.module';
import { PrivatePostListComponent } from './post-list.component';

@NgModule({
  declarations: [
    PrivatePostListComponent,
  ],
  imports: [
    SharedModule,
    PostListRoutingModule
  ]
})
export class PostListModule { }


