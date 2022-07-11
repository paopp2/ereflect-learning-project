import { Injectable } from '@angular/core';
import { 
  Auth, 
  AuthProvider, 
  GoogleAuthProvider,
  signInWithPopup,
  authState,
  UserCredential,
} from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null;

  constructor(public fireAuth: Auth) { 
    authState(fireAuth).subscribe(
      (user) => {
        if(!user) {
          this.currentUser = null;
          return;
        }
        
        this.currentUser = <User>{
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoUrl: user.photoURL,
        };
      },
    );
  }

  // Sign in with Google
  loginWithGoogle(callback: {
    onSuccess?: (userCreds: UserCredential) => void, 
    onError?: (error: any) => void,
  }) {
    return this.loginWithProvider(new GoogleAuthProvider())
    .then((userCreds: UserCredential | unknown) => {
      if(!(userCreds instanceof Error)) {
        if(callback.onSuccess) callback.onSuccess(userCreds as UserCredential);
      } else {
        if(callback.onError) callback.onError(userCreds);
      }
    });
  }

  async logout() {
    await this.fireAuth.signOut();
  }

  // Auth logic to run auth providers
  private async loginWithProvider(provider: AuthProvider): Promise<UserCredential | Error> {
    try {
      return await signInWithPopup(this.fireAuth, provider);
    } catch (error) {
      return new Error(`${error}`);
    }
  }
}
