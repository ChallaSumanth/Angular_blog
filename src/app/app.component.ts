import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_blog';
  image = '../assets/image.png';
  choice = false;
  show()
  {
    alert('button clicked');
  }
}
