import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BUTTON_TEXTS,
  PUBLIC_ROUTE_PATHS,
} from 'src/app/shared/utils/constant';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpButtonText: string = BUTTON_TEXTS.SIGN_UP;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSignUp() {
    this.router.navigate([PUBLIC_ROUTE_PATHS.SIGN_IN]);
  }
}
