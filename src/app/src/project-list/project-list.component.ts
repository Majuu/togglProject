import {Component, Input, OnInit} from '@angular/core';
import {UserAuthService} from '../../../userAuth.service';
import {ProjectListService} from '../../projectList.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() project: {name: string, time: string, projectId: string};

  today: number = Date.now();

  constructor(private authService: UserAuthService,
              private projectListService: ProjectListService) { }

  ngOnInit() {
    document.body.style.backgroundColor = '#FAFBFC';
  }

  deleteProject() {
    this.authService.deletePost(this.project.projectId).subscribe(resp =>
    console.log(resp));
    // this.projectListService.getTaskList();
  }
}
