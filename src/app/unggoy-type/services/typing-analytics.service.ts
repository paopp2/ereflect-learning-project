import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypingAnalyticsService {
  inputText: string = '';
  displayText: string = ''; 
  
  // Signals to subscribe to
  private startSubject = new Subject<void>();
  private resetSubject = new Subject<void>();
  private stopSubject = new Subject<void>();
  
  get inputTextArr(): string[] { return this.inputText.split('') }
  get displayTextArr(): string[] { return this.displayText.split('') }

  start() { this.startSubject.next(); }
  get startEvent(): Observable<void> { return this.startSubject.asObservable() }

  reset() { 
    this.resetSubject.next(); 
    this.inputText = '';
    this.displayText = '';
  }
  get resetEvent(): Observable<void> { return this.resetSubject.asObservable(); }

  stop() { this.stopSubject.next(); }
  get stopEvent(): Observable<void>  { return this.stopSubject.asObservable(); }
  
  stopOnFinish() {
    if(this.inputText.length === this.displayText.length) {
      this.stop();
    }
  }
}
