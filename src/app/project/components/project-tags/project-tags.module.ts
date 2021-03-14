import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProjectTagsComponent } from './project-tags.component';

@NgModule({
  declarations: [ProjectTagsComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProjectTagsComponent],
})
export class ProjectTagsModule {}
