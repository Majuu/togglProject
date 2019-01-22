import { Injectable } from '@angular/core';

@Injectable()
export class ProjectListService {

  projects = [
    {
      name: 'Test 1',
      time: '00:12:23'
    },
    {
      name: 'Test 2',
      time: '00:23:34'
    },
    {
      name: 'Test 3',
      time: '00:34:45'
    }
  ];

  addProject(projectName: string, projectTime: string) {
    this.projects.push({name: projectName, time: projectTime});
   }
}
