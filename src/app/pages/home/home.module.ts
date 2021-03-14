import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FilterOptionsModalModule } from 'src/app/project/components/filter-options-modal/filter-options-modal.module';
import { GenericFeedCardModule } from 'src/app/project/components/generic-feed-card/generic-feed-card.module';
import { ProjectRoutingModule } from 'src/app/project/project-routing.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    HomePageRoutingModule,
    ProjectRoutingModule,
    GenericFeedCardModule,
    FilterOptionsModalModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
