import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  role: string;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {

  }

  register() {

    this.showLoader();

    let details = {
      email: this.email,
      password: this.password,
      role: this.role
    };

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.authService.createAccount(details).then((result) => {

      loading.present();
      loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      loading.dismiss();
    });

  }

  showLoader() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    loading.present();
  }
}