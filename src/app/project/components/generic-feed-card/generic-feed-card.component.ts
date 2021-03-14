import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-generic-feed-card',
  templateUrl: './generic-feed-card.component.html',
  styleUrls: ['./generic-feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericFeedCardComponent {
  @Input() project: Project;
  @Output() cardClick = new EventEmitter();

  handleCardClick() {
    this.cardClick.emit();
  }
}
