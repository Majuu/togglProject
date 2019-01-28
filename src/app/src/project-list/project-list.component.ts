import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() project: {name: string, time: string};

  today: number = Date.now();

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = '#FAFBFC';
  }

}
