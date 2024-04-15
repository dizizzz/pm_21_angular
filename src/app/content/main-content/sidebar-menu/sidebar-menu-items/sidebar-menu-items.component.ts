import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-menu-items',
  templateUrl: './sidebar-menu-items.component.html',
  styleUrl: './sidebar-menu-items.component.scss'
})
export class SidebarMenuItemsComponent {
  @Input() iconSrc: string = '';
  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @Input() isNextActive: boolean = false; 

  @Output() itemClicked: EventEmitter<void> = new EventEmitter<void>();

  toggleActive() {
    this.itemClicked.emit();
  }
}
