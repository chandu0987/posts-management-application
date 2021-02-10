import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
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

  constructor(private router: Router,
     private userService: UserService,
      private snackbar: SnackbarService) {}

  ngOnInit(): void {}

  onSignUp(form: NgForm) {
    const {name,email,password}=form.value;
    const user: User = {
      name,
      email,
      password
    };
    this.userService.createUser(user).subscribe(
      (data)=>{
        this.snackbar.showSuccess(data.message)
    },
       (error)=>{
       this.snackbar.showSuccess(error.message)
       }
    );
    this.router.navigate([PUBLIC_ROUTE_PATHS.SIGN_IN]);
  }
}
