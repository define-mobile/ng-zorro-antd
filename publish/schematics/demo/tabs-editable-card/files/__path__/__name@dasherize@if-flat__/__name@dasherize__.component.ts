import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tabset [nzType]="'card'" [nzTabBarExtraContent]="extraTemplate">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="titleTemplate">
        <ng-template #titleTemplate>
          <div>
            {{ tab }}
            <i class="anticon anticon-close" (click)="closeTab(tab)"></i>
          </div>
        </ng-template>
        Content of {{ tab }}
      </nz-tab>
    </nz-tabset>
    <ng-template #extraTemplate>
      <i class="ant-tabs-new-tab anticon anticon-plus" (click)="newTab()"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [ 'Tab 1', 'Tab 2' ];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
  }
}
