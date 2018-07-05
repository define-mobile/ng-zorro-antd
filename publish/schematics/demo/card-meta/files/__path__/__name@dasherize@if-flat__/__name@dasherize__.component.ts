import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-card style="width:300px;" [nzCover]="coverTemplate" [nzActions]="[actionSetting,actionEdit,actionEllipsis]">
      <nz-card-meta nzTitle="Card title" nzDescription="This is the description" [nzAvatar]="avatarTemplate"></nz-card-meta>
    </nz-card>
    <ng-template #avatarTemplate>
      <nz-avatar nzSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></nz-avatar>
    </ng-template>
    <ng-template #coverTemplate>
      <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
    </ng-template>
    <ng-template #actionSetting>
      <i class="anticon anticon-setting"></i>
    </ng-template>
    <ng-template #actionEdit>
      <i class="anticon anticon-edit"></i>
    </ng-template>
    <ng-template #actionEllipsis>
      <i class="anticon anticon-ellipsis"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
