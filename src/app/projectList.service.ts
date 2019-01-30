import { Injectable } from '@angular/core';

@Injectable()
export class ProjectListService {

  projects = [];

  addProject(projectName: string, projectTime: string) {
    this.projects.push({name: projectName, time: projectTime});
   }
}
