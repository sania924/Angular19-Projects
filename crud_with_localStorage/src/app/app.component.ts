import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud_with_localStorage';
  isNewUser: boolean = false;
  useObj: User = new User();
  changeView() {
    this.isNewUser = !this.isNewUser;
  }
}
