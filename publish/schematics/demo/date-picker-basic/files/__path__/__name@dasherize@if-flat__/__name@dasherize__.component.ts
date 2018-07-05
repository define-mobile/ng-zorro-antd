import { Component } from '@angular/core';
import * as getISOWeek from 'date-fns/get_iso_week';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-date-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" nzShowTime></nz-date-picker>
    <br>
    <nz-month-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" nzPlaceHolder="Select month"></nz-month-picker>
    <br>
    <nz-range-picker [(ngModel)]="dateRange" (ngModelChange)="onChange($event)" nzShowTime></nz-range-picker>
    <br>
    <nz-week-picker [(ngModel)]="date" (ngModelChange)="getWeek($event)" nzPlaceHolder="Select week"></nz-week-picker>
    <br>
    <button nz-button nzType="default" (click)="changeLanguage()">Switch language for all pickers</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    nz-date-picker, nz-month-picker, nz-range-picker, nz-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;

  constructor(private i18n: NzI18nService) {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}
