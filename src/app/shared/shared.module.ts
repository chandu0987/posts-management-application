
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    CommonModule

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
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
