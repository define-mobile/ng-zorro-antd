import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <div>
      <nz-badge [nzCount]="count">
        <a class="head-example"></a>
      </nz-badge>
      <nz-button-group>
        <button nz-button (click)="minCount()"><i class="anticon anticon-minus"></i></button>
        <button nz-button (click)="addCount()"><i class="anticon anticon-plus"></i></button>
      </nz-button-group>
    </div>

    <div style="margin-top: 10px;">
      <nz-badge [nzDot]="dot">
        <a class="head-example"></a>
      </nz-badge>
      <nz-switch [(ngModel)]="dot"></nz-switch>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-badge:not(.ant-badge-status) {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {

  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minCount(): void {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }
}
