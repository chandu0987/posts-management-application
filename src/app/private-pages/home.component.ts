import { Component, OnInit } from '@angular/core';
import { BUTTON_TEXTS } from '../shared/utils/constant';

@Component({
  selector: 'app-private-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PrivateHomeComponent implements OnInit {
buttonTexts:string[]
  constructor() { }

  ngOnInit(): void {
    const {POST_CREATE,POST_LIST,LOG_OUT} =BUTTON_TEXTS

    this.buttonTexts=[POST_CREATE,POST_LIST,LOG_OUT]

       // const ar1 = [1,2,3,4]
    // const[x,y,...z] =ar1;
    
    // const keys = Object.values(BUTTON_TEXTS)

    // const x = true? '': ''
    // const y = 'one' || 'two'
  }


}
