import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar-start',
  templateUrl: './navbar-start.component.html',
  styleUrls: ['./navbar-start.component.scss']
})
export class NavbarStartComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
this.changeColGreen();
console.log(this.router.url);
  }
  changeColGreen() {
    document.body.style.backgroundColor = '#88CF8F';
  }
  changeColPink() {
    document.body.style.backgroundColor = '#FEEEDE';
  }

}
