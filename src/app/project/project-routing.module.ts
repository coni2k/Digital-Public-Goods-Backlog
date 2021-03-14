import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'project',
    children: [
      {
        path: ':projectId',
        loadChildren: () =>
          import('./components/generic-detail-page/generic-detail.module').then((m) => m.GenericDetailPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
