import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ViewChild } from '@angular/core';
import { FirstPage } from '../first/first';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') pass;
  constructor(private alertCtrl:AlertController,private auth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
  RegisterNow(){
    this.auth.auth.createUserWithEmailAndPassword(this.user.value,this.pass.value).then(()=>{
      this.navCtrl.push(FirstPage);
    }).catch(error=> {
      this.showConfirm(error.message);
    });
    
  }
  showConfirm(message) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: `${message}!`,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
