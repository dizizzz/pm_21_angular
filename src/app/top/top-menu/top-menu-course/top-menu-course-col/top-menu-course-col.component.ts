import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-col',
  templateUrl: './top-menu-course-col.component.html',
  styleUrl: './top-menu-course-col.component.scss'
})
export class TopMenuCourseColComponent {
  @Input() currency: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
}
