
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    CommonModule,
    MatSnackBarModule

  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    HeaderComponent,
    FormsModule,
    CommonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
