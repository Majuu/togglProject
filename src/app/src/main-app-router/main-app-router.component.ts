import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-app-router',
  templateUrl: './main-app-router.component.html',
  styleUrls: ['./main-app-router.component.scss']
})
export class MainAppRouterComponent implements OnInit {

  menuChanger: boolean;
  constructor() { }

  ngOnInit() {

  }
  componentChange(changeManager) {
    this.menuChanger = changeManager;
}
}
