import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'SandyWepApp';

  constructor(private authen: AuthenticationService, private router: Router) {
  }

  isAdmin() {
    return this.authen.isAdmin();
  }

  isUser() {
    return this.authen.isUser();
  }

  isAuthenticated() {
    return this.authen.isAuthenticated();
  }

  ngOnInit(): void {
    this.authen.loadToken();
  }

  logOut() {
    this.authen.logOut();
  }


  goto() {
    this.router.navigateByUrl('/login');
  }
}
