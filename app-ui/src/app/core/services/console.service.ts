import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  private consoleBus$ = new BehaviorSubject<string[]>([]);
  console$ = this.consoleBus$.asObservable();

  constructor() { }

  log(type: string, message: string){
    const now = new Date
    const timestamp = [now.getHours(), now.getMinutes(), now.getSeconds()].map(v => v.toString().padStart(2, '0')).join(':')
    const log = `${timestamp} [${type}] ${message}`
    this.console$
      .pipe(take(1))
      .subscribe(async (logs: string[]) => {
        const newList = [log, ...logs];
        this.consoleBus$.next(newList);
      })
  }
}
