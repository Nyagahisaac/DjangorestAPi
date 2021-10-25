import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then((res: any) => {
        resolve(res);
      }, (err: any) => {
        console.log(err);
        reject(err);
      })
    })
 }
 doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then((res: any) => {
      resolve(res);
    })
  })
}


  constructor(public afAuth: AngularFireAuth){}

}
