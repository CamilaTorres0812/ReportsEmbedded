import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private elapsedMs = 0;
  private intervalSub?: Subscription;
  private tickSub?: Subscription;

  private refreshSubject = new Subject<{isPaused: boolean; interval:number}>();
  refreshState$ = this.refreshSubject.asObservable();

  message$ = new BehaviorSubject<string>('');
  isMessageVisible$ = new BehaviorSubject<boolean>(false);

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
      this.elapsedMs = 0;
    });

    this.tickSub = interval(1000).subscribe(() => {
      this.elapsedMs += 1000;
      const timeLeft = intervalTime - this.elapsedMs;
       this.message$.next(`Se actualizará en ${Math.ceil(timeLeft/1000)} s`);
      if(timeLeft <= 5000 && timeLeft > 0){
        this.isMessageVisible$.next(true);
      }else{
        this.isMessageVisible$.next(false);
      }
    });
  }

  stop() {
    console.log("se pauso")
    this.intervalSub?.unsubscribe();
    this.tickSub?.unsubscribe();
    this.isMessageVisible$.next(false);
  }

  getElapsedSeconds(): number {
    return Math.floor(this.elapsedMs/1000);
  }

}
