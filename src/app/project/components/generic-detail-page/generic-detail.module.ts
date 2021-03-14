import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectTagsModule } from '../project-tags/project-tags.module';
import { GenericDetailPageRoutingModule } from './generic-detail-routing.module';
import { GenericDetailPage } from './generic-detail.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, GenericDetailPageRoutingModule, ProjectTagsModule],
  declarations: [GenericDetailPage],
  exports: [GenericDetailPageRoutingModule],
})
export class GenericDetailPageModule {}
