import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BUTTON_TEXTS,
  PRIVATE_ROUTE_PATHS,
  PUBLIC_ROUTE_PATHS,
} from '../../utils/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() buttons: string[];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(buttonText: string) {
    if (buttonText === BUTTON_TEXTS.SIGN_IN) {
      this.router.navigate([PUBLIC_ROUTE_PATHS.SIGN_IN]);
    } else if (buttonText === BUTTON_TEXTS.SIGN_UP) {
      this.router.navigate([PUBLIC_ROUTE_PATHS.SIGN_UP]);
    } else if (buttonText === BUTTON_TEXTS.POST_LIST) {
      const currentUser = localStorage.getItem('currentUser');
      this.router.navigate([currentUser? PRIVATE_ROUTE_PATHS.PRIVATE_POST_LIST : PUBLIC_ROUTE_PATHS.PUBLIC_POST_LIST]);
    } else if (buttonText === BUTTON_TEXTS.POST_CREATE) {
      this.router.navigate([PRIVATE_ROUTE_PATHS.POST_CREATE]);
    } else if (buttonText === BUTTON_TEXTS.LOG_OUT) {
      localStorage.clear()
      this.router.navigate([PRIVATE_ROUTE_PATHS.LOGOUT]);
    }
  }
}
