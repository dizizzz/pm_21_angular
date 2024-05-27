import { Component } from '@angular/core';
import { TopModule } from '../top/top.module';
import { ContentModule } from '../content/content.module';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [
    TopModule,
    ContentModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  title = 'monobank';
}
