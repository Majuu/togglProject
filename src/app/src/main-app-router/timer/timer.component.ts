import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Output() changer = new EventEmitter<boolean>();

  changeTheMenu = false;
  playOrStop = true;
  ticks = 0;
  secondsDisplay;
  minutesDisplay;
  hoursDisplay;
  time = timer(0, 1000);

  constructor() { }

  ngOnInit() {
// this.startTimer();
    this.secondsDisplay = this.getSeconds(this.ticks);
    this.minutesDisplay = this.getMinutes(this.ticks);
    this.hoursDisplay = this.getHours(this.ticks);

  }

  public startTimer() {


  // const time = timer(0, 1000);
  this.time.subscribe(t =>  {this.ticks = t;

  this.secondsDisplay = this.getSeconds(this.ticks);
  this.minutesDisplay = this.getMinutes(this.ticks);
  this.hoursDisplay = this.getHours(this.ticks);


});
}
  private getSeconds(ticks: number) {
    return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

changeComponent() {

    this.changeTheMenu = !this.changeTheMenu;
    this.changer.emit(this.changeTheMenu);
  }

  playChange() {

    this.playOrStop = !this.playOrStop;
    if (this.playOrStop === false) {
      this.startTimer();
    }
    if (this.playOrStop === true) {
      this.pauseTimer();
    }
  }
pauseTimer() {
  console.log('testtt');
  this.time.subscribe().unsubscribe();
}
  // startTimer() {
  //   this.interval = setInterval(() => {
  //       this.timeLeft++;
  //   }, 1000);
  // }
  // pauseTimer() {
  //   clearInterval(this.interval);
  // }
  // timeReset() {
  //   this.timeLeft = 0;
  // }
  // time.subscribe(t => console.log(new Date().getMinutes() + ':'  )); --> this line was in OnInit()
  // observableTimer() {
  // }
  // const interval = Rx.Observable.interval(1000);
}
