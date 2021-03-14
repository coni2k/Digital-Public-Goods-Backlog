import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { ProjectService } from './project.service';

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<Project> {
  constructor(private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    const projectId = Number(route.paramMap.get('projectId'));
    return this.projectService.getProject(projectId);
  }
}
