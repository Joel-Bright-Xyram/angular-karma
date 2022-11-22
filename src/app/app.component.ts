import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-karma';
  count: number = 10;

  ShowMessage(msg: string): string {
    return msg;
  }

  IncreaseCount(num: number) {
    this.count = this.count + num;
  }

  DecreaseCount(num: number) {
    this.count = this.count - num;
  }
}
