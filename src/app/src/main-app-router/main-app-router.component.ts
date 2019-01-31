import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../../projectList.service';

@Component({
  selector: 'app-main-app-router',
  templateUrl: './main-app-router.component.html',
  styleUrls: ['./main-app-router.component.scss']
})
export class MainAppRouterComponent implements OnInit {

  projects: { name: string, time: string }[] = [];
  menuChanger: boolean;
  today: number = Date.now();

  constructor(private projectListService: ProjectListService) {
  }

  ngOnInit() {
    this.projectListService.getTaskList();
    this.projects = this.projectListService.projects;
    document.body.style.backgroundColor = '#FAFBFC';
  }

  componentChange(changeManager) {
    this.menuChanger = changeManager;
  }

}
