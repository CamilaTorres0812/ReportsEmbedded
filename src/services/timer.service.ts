import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private elapsedMs = 0;
  private intervalSub?: Subscription;
  private tickSub?: Subscription;
  private lastRefresh = '';
  private refreshSubject = new Subject<{isPaused: boolean; interval:number}>();
  refreshState$ = this.refreshSubject.asObservable();

  message$ = new BehaviorSubject<string>('');
  lastDate$ = new BehaviorSubject<string>('');

  setRefreshInterval(isPaused: boolean, interval:number){
    this.elapsedMs = 0;
    this.refreshSubject.next({isPaused, interval});
  }

  start(intervalTime: number,reportCallback: () => void){
    this.elapsedMs = 0;
    this.intervalSub?.unsubscribe();
    this.tickSub?.unsubscribe();

    this.intervalSub = interval(intervalTime).subscribe(() => {
      reportCallback();
      let lastRefreshDate = new Date();
      this.lastRefresh = lastRefreshDate.toLocaleString();
      this.lastDate$.next(this.lastRefresh);
      this.elapsedMs = 0;
    });

    this.tickSub = interval(1000).subscribe(() => {
      this.elapsedMs += 1000;
      const timeLeft = intervalTime - this.elapsedMs;
       this.message$.next(`${Math.ceil(timeLeft/1000)} s`);
    });
  }

  stop() {
    console.log("se pauso")
    this.intervalSub?.unsubscribe();
    this.tickSub?.unsubscribe();
    this.lastDate$.next(this.lastRefresh);
  }

  getElapsedSeconds(): number {
    return Math.floor(this.elapsedMs/1000);
  }

}
