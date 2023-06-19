import { Component, Input } from '@angular/core';
import { Assignment } from 'src/app/models/Assignement-model';

@Component({
  selector: 'app-assignment-list-item',
  templateUrl: './assignment-list-item.component.html',
  styleUrls: ['./assignment-list-item.component.scss']
})
export class AssignmentListItemComponent {
  @Input() assignment! : Assignment;
}
