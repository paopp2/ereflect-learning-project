import { Component, OnInit } from '@angular/core';
import { 
  Auth, 
  AuthProvider, 
  GoogleAuthProvider,
  signInWithPopup,
  User,
  authState,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(public fireAuth: Auth) { 
    this.user$ = authState(fireAuth);
  }

  ngOnInit(): void {
  }

  // Sign in with Google
  loginWithGoogle() {
    return this.loginWithProvider(new GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.signOut();
  }

  // Auth logic to run auth providers
  private async loginWithProvider(provider: AuthProvider) {
    try {
      const result = await signInWithPopup(this.fireAuth, provider);
      return console.log(`Successful result: ${result}`);
    } catch (error) {
      return console.log(`Error: ${error}`);
    }
  }
}
