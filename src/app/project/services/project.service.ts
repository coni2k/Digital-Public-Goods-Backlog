import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appSettings } from 'src/app-settings/app-settings';
import { FilterOptions } from '../models/filter-options';
import { Project } from '../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  filterOptions: FilterOptions = null;

  constructor(private httpClient: HttpClient) {
    this.filterOptions = this.createFilterOptions();
  }

  getProjects(filterOptions: FilterOptions = null): Observable<Project[]> {
    const url = appSettings.apiBaseUrls.projects;

    return this.httpClient.get<Project[]>(url).pipe(
      map((projects) => {
        if (filterOptions) {
          const filters = filterOptions.tags.filter((item) => item.enabled);

          if (filters.length > 0) {
            projects = projects.filter((project) => {
              return (
                project.tags.length > 0 &&
                filters.some((tagFilter) => project.tags.some((tag) => tagFilter.tag.name === tag.name))
              );
            });
          }
        }

        return projects;
      })
    );
  }

  getProject(projectId: number): Observable<Project> {
    return this.getProjects().pipe(
      map((projects) => {
        return projects.find((item) => item.projectId == projectId);
      })
    );
  }

  createFilterOptions(): FilterOptions {
    return {
      tags: [
        {
          enabled: false,
          tag: {
            name: 'Children',
          },
        },
        {
          enabled: false,
          tag: {
            name: 'Education',
          },
        },
        {
          enabled: false,
          tag: {
            name: 'Gender Equality',
          },
        },
        {
          enabled: false,
          tag: {
            name: 'Humanitarian',
          },
        },
      ],
    };
  }
}
