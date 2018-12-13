import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-app-router',
  templateUrl: './main-app-router.component.html',
  styleUrls: ['./main-app-router.component.scss']
})
export class MainAppRouterComponent implements OnInit {

  @Output() menuChanger = false;

  constructor() { }

  ngOnInit() {
  }

}
