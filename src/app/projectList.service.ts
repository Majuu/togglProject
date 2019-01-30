import { Injectable } from '@angular/core';

@Injectable()
export class ProjectListService {

  projects = [];

  addProject(projectName: string, projectTime: string, projectId: string) {
    this.projects.push({name: projectName, time: projectTime, id: projectId});
   }
}
