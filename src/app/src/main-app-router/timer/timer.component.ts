import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {timer} from 'rxjs';
import {ProjectListService} from '../../../projectList.service';


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
  subscription;
  time = timer(0, 1000);
  totalTime;

  constructor(private projectListService: ProjectListService) { }

  ngOnInit() {

    this.secondsDisplay = this.getSeconds(this.ticks);
    this.minutesDisplay = this.getMinutes(this.ticks);
    this.hoursDisplay = this.getHours(this.ticks);
    this.totalTime = this.hoursDisplay + ':' + this.minutesDisplay + ':' + this.secondsDisplay;

  }

  public startTimer() {

this.subscription = this.time.subscribe(t =>  {this.ticks = t;

  this.secondsDisplay = this.getSeconds(this.ticks);
  this.minutesDisplay = this.getMinutes(this.ticks);
  this.hoursDisplay = this.getHours(this.ticks);

  this.totalTime = this.hoursDisplay + ':' + this.minutesDisplay + ':' + this.secondsDisplay;
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
    this.subscription.unsubscribe();

}
onCreateProject(projectName: string, projectTime: string) {
this.projectListService.addProject(projectName, projectTime);
}

}
