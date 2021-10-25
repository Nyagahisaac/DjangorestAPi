import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'node_modules/fire/compact';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth ){}
  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth
      .signInWithPopup(provider)
      .then((res) => {
        resolve(res);
      }, (err: any) => {
        console.log(err);
        reject(err);
      })
    })
 }
 doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = (new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.signInWithPopup(provider)
    .then((res: any) => {
      resolve(res);
    })
  })
}



}
