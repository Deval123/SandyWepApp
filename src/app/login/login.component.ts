import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private authen: AuthenticationService, private router: Router) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
  }


  login() : void {
    if(this.username != '' && this.password != ''){
      this.onLogin({username:this.username, password:this.password});
      //this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }


  onLogin(value: any) {
    console.log(value);
    this.authen.login(value)
      .subscribe(res => {
        let jwt = res.headers.get('Authorization');
        console.log(jwt);
        this.authen.saveToken(jwt);
        this.router.navigateByUrl('/');
      }, err => {
        if (err.status == 403) {
          console.log(err);
        }
      });
  }

  isAdmin() {
    return this.authen.isAdmin();
  }

  isUser() {
    return this.authen.isUser();
  }

}
