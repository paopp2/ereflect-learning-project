import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypingAnalyticsService {
  private startSubject = new Subject<void>();
  private resetSubject = new Subject<void>();
  private stopSubject = new Subject<void>();

  startEvent() { this.startSubject.next(); }
  getStartEvent(): Observable<any> { return this.startSubject.asObservable(); }

  resetEvent() { this.resetSubject.next(); }
  getResetEvent(): Observable<any> { return this.resetSubject.asObservable(); }

  stopEvent() { this.stopSubject.next(); }
  getStopEvent(): Observable<any> { return this.stopSubject.asObservable(); }
}
