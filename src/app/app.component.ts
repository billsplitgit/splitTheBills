import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Split your bills';
  currentuser = 'There';
  imgPath= './app/images/dummy-ser.png';
}
