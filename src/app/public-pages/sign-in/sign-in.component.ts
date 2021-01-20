import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BUTTON_TEXTS, PRIVATE_ROUTE_PATHS } from 'src/app/shared/utils/constant';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
   signInButtonText = BUTTON_TEXTS.SIGN_IN;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToCreatePost(){
    localStorage.setItem("currentUser",JSON.stringify({name:'test'}))
    this.router.navigate([PRIVATE_ROUTE_PATHS.POST_CREATE])
  }

}
