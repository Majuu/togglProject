import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-manual-mode',
  templateUrl: './manual-mode.component.html',
  styleUrls: ['./manual-mode.component.scss']
})
export class ManualModeComponent implements OnInit {

  @Input() menuChange;
  constructor() { }

  ngOnInit() {
  }

}
