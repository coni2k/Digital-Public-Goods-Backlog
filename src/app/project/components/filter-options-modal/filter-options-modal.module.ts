import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilterOptionsModalComponent } from './filter-options-modal.component';

@NgModule({
  entryComponents: [FilterOptionsModalComponent],
  declarations: [FilterOptionsModalComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [FilterOptionsModalComponent],
})
export class FilterOptionsModalModule {}
