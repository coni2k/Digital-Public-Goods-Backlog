import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTagsComponent {
  @Input() tags: Tag[];
}
