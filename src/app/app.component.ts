import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentModule } from './content/content.module';
import { TopModule } from './top/top.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopModule, ContentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'monobank';
}
