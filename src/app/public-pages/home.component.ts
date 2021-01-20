import { Component, OnInit } from '@angular/core';
import { BUTTON_TEXTS } from '../shared/utils/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
buttonArray: string[]
  constructor() { }

  ngOnInit(): void {
    this.buttonArray= [BUTTON_TEXTS.SIGN_IN, BUTTON_TEXTS.SIGN_UP, BUTTON_TEXTS.POST_LIST]
  }

}
