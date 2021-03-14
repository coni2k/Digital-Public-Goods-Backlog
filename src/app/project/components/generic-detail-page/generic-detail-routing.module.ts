import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectResolver } from '../../services/project.resolver';
import { GenericDetailPage } from './generic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GenericDetailPage,
    resolve: {
      project: ProjectResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericDetailPageRoutingModule {}
