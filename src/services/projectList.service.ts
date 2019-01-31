import {Injectable} from '@angular/core';
import {UserAuthService} from './userAuth.service';

@Injectable()
export class ProjectListService {

  constructor(private authService: UserAuthService) {
  }

  projects = [];

  addProject(projectName: string, projectTime: string, projectId: string) {
    this.projects.push({name: projectName, time: projectTime, projectId: projectId});
  }

  getTaskList() {
    this.projects.length = 0;
    this.authService.getAllPosts().subscribe(
      resp => {

        let projectName;
        let projectTime;
        let projectId;
        const num = Object.keys(resp).length;

        for (let r = 0; r < num; r++) {  // <=!!!!
          projectName = resp[r].projectName;
          projectTime = resp[r].projectTime;
          projectId = resp[r]._id;

          this.addProject(projectName, projectTime, projectId);
        }
      }
    );
  }
}
