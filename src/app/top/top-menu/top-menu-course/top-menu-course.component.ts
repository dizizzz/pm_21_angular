import { Component } from '@angular/core';

@Component({
  selector: 'top-menu-course',
  templateUrl: './top-menu-course.component.html',
  styleUrl: './top-menu-course.component.scss'
})
export class TopMenuCourseComponent {
  currency: string = '';
  value: string = '';
  icon: string = '';
  // courseItems = [
  //   { currency: 'USD', value: '27,23', icon: 'assets/imgs/^down.svg' },
  //   { currency: 'EUD', value: '32,60', icon: 'assets/imgs/^.svg' },
  //   { currency: 'BTC', value: '250 648', icon: 'assets/imgs/^.svg' }
  // ];
}
