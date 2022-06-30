import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypingAnalyticsService {
  private startSubject = new Subject<void>();
  private resetSubject = new Subject<void>();
  private stopSubject = new Subject<void>();

  start() { this.startSubject.next(); }
  get startEvent(): Observable<void> { return this.startSubject.asObservable() }

  reset() { this.resetSubject.next(); }
  get resetEvent(): Observable<void> { return this.resetSubject.asObservable(); }

  stop() { this.stopSubject.next(); }
  get stopEvent(): Observable<void>  { return this.stopSubject.asObservable(); }
}
