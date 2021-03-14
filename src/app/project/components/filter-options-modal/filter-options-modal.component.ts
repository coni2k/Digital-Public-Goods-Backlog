import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterOptions } from '../../models/filter-options';

@Component({
  templateUrl: './filter-options-modal.component.html',
  styleUrls: ['./filter-options-modal.component.scss'],
})
export class FilterOptionsModalComponent {
  @Input() filterOptions: FilterOptions = { tags: [] };

  constructor(private modalController: ModalController) {}

  reset() {
    this.modalController.dismiss({ reset: true });
  }

  showResults(): void {
    this.modalController.dismiss({ filterOptions: this.filterOptions });
  }
}
