import { Component, Pipe } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myStyle: any;
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit(): void {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '50%',
      'z-index': -3,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 90,
        },
        color: {
          value: '#ff0000',
        },
        shape: {
          type: 'triangle',
        },
      },
    };
  }
}
