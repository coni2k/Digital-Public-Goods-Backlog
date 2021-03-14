import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProjectTagsModule } from '../project-tags/project-tags.module';
import { GenericFeedCardComponent } from './generic-feed-card.component';

@NgModule({
  declarations: [GenericFeedCardComponent],
  imports: [CommonModule, IonicModule, RouterModule, ProjectTagsModule],
  exports: [GenericFeedCardComponent],
})
export class GenericFeedCardModule {}
