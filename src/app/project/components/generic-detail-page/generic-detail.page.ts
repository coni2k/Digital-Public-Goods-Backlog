import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Project } from '../../models/project';

@Component({
  templateUrl: './generic-detail.page.html',
  styleUrls: ['./generic-detail.page.scss'],
})
export class GenericDetailPage implements OnInit {
  project: Project = null;

  constructor(public route: ActivatedRoute, private loadingController: LoadingController) {}

  async ngOnInit() {
    this.project = this.route.snapshot.data.project;
    await this.loadingController.dismiss().catch(() => {});
  }
}
