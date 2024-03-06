import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCommonModule, DataGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ids-ng-tester';
}
