import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') pass;
  constructor(private auth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  LoginNow() {
  
      this.auth.auth.signInWithEmailAndPassword(this.user.value,this.pass.value).then(()=>{
        this.showConfirm("Login Success");
        this.navCtrl.push(FirstPage);
      }).catch(error=>{
        this.showConfirm(error.message);
      });
     
      this.navCtrl.push(FirstPage); 
    
   }
   showConfirm(message = "error") {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: `${message}!`,
      buttons: ['OK']
    });
    alert.present();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
