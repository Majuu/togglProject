import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-manual-mode',
  templateUrl: './manual-mode.component.html',
  styleUrls: ['./manual-mode.component.scss']
})
export class ManualModeComponent implements OnInit {

  @Output() changer = new EventEmitter<boolean>();

  changeTheMenu = true;

  constructor() { }

  ngOnInit() {
  }

 changeComponent() {

    this.changeTheMenu = !this.changeTheMenu;
    this.changer.emit(this.changeTheMenu);
 }

}
