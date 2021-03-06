import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/public'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
