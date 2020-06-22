import { AuthService } from './../../services/auth.service';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
              public menu: MenuController,
              public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter(){
    this.auth.refreshToken()
    .subscribe(response => {        
      console.log(response.headers.get('authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error => {});    
  }

  

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {        
        console.log(response.headers.get('authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});    
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

}
