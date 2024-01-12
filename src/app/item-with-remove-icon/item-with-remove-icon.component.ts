import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-item-with-remove-icon',
  templateUrl: './item-with-remove-icon.component.html',
  styleUrls: ['./item-with-remove-icon.component.css']
})
export class ItemWithRemoveIconComponent {
  @Input()
  currency: string = 'USD';

  @Output()
  unselectEvent = new EventEmitter<string>();
}
