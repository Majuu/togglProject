import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Output() changer = new EventEmitter<boolean>();

  changeTheMenu = false;
  playOrStop = true;

  constructor() { }

  ngOnInit() {
  }

  changeComponent() {

    this.changeTheMenu = !this.changeTheMenu;
    this.changer.emit(this.changeTheMenu);
  }
  playChange() {
  this.playOrStop = !this.playOrStop;
  }


}
