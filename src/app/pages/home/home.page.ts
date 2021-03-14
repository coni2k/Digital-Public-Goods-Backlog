import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { finalize, switchMap, takeUntil } from 'rxjs/operators';
import { FilterOptionsModalComponent } from 'src/app/project/components/filter-options-modal/filter-options-modal.component';
import { FilterOptions } from 'src/app/project/models/filter-options';
import { ProjectService } from 'src/app/project/services/project.service';
import { Project } from '../../project/models/project';

@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy, OnInit {
  projects$ = new Observable<Project[]>();

  get filterOptions(): FilterOptions {
    return this.projectService.filterOptions;
  }

  private destroy$ = new Subject();
  private load$ = new Subject<boolean>();

  constructor(
    private loadingController: LoadingController,
    private modalController: ModalController,
    private projectService: ProjectService,
    private router: Router
  ) {}

  async clearFilters(): Promise<void> {
    this.projectService.filterOptions = this.projectService.createFilterOptions();
    await this.presentLoading();
    this.load$.next();
  }

  async handleCardClick(project: Project) {
    await this.presentLoading();
    this.router.navigate(['/project', project.projectId]);
  }

  async handleFilterOptionsClick() {
    const modal = await this.modalController.create({
      component: FilterOptionsModalComponent,
      cssClass: 'filter-options-modal',
      swipeToClose: true,
      componentProps: {
        filterOptions: this.projectService.filterOptions,
      },
    });

    modal.onDidDismiss().then(
      async ({ data }): Promise<void> => {
        if (data?.reset) {
          await this.clearFilters();
        }

        if (data?.filterOptions) {
          this.projectService.filterOptions = data.filterOptions;
          await this.presentLoading();
          this.load$.next();
        }
      }
    );

    return await modal.present();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async ngOnInit() {
    this.initData();

    await this.presentLoading();
    this.load$.next();
  }

  trackById(index: number, item: Project) {
    return item.projectId;
  }

  private initData() {
    this.projects$ = this.load$.pipe(
      takeUntil(this.destroy$),
      switchMap((refresh = false) => {
        return this.projectService.getProjects(this.filterOptions).pipe(
          finalize(async () => {
            if (!refresh) {
              const loadingElement = await this.loadingController.getTop();
              if (loadingElement) {
                await this.loadingController.dismiss();
              }
            }
          })
        );
      })
    );
  }

  private async presentLoading() {
    const loadingElement = await this.loadingController.create({
      translucent: true,
      spinner: 'dots',
      duration: 10 * 1000,
    });
    await loadingElement.present();
  }
}
