import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';


// import { SignupPage } from '../signup/signup.page';

// import { Error } from '../../components/error/error.component';

import { LoginService } from '../../services/login.service';

// import { Store } from '@ngrx/store';
// import * as FromRootReducer from '../../reducers';

// import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { ControlMessages } from '../../components/control-messages/control-messages.component';
// import { ValidationService } from '../../validation.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'login.page.html',
})
export class LoginPage {
  submitted = false;
  public loginForm;

  loginState$: any;

  constructor(
    formBuilder: FormBuilder,
    public loginService: LoginService,
    public nav: NavController,
    // private store: Store<FromRootReducer.State>,
    ) {
    //
    this.loginState$ = loginService.getLoginState();

    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
       
  }
/*
  ionViewDidLoad() {
    //
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
*/
  logForm() {
    // console.log(this.loginForm.value);
    // console.log('loginForm>', this.loginForm);

    this.submitted = true;

//    if (this.loginForm.valid) {
/*      
      this.loginService.emailAuthentication(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
*/      
  //  }
  }

  onSignup() {
    // this.nav.push(SignupPage);
  }

  signInAnonymously() {
  //  this.loginService.anonymousAuthentication();
  }

  signInWithGoogle() {
    // this.loginService.googleAuthentication();
  }
}
