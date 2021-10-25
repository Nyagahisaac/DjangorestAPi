import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuthModule } from '@angular/fire/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  doRegister(value: { email: any; password: any; }){
    return new Promise<any>((resolve, reject) => {
      firebase.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then((res: any) => {
        resolve(res);
      }, (err: any) => reject(err))
    })
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
