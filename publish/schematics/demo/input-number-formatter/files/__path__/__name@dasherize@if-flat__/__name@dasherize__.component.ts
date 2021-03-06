import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="100" [nzStep]="1" [nzFormatter]="formatterDollar" [nzParser]="parserDollar"></nz-input-number>
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="100" [nzStep]="1" [nzFormatter]="formatterPercent" [nzParser]="parserPercent"></nz-input-number>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-input-number {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  demoValue = 100;
  formatterPercent = value => `${value} %`;
  parserPercent = value => value.replace(' %', '');
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');
}
