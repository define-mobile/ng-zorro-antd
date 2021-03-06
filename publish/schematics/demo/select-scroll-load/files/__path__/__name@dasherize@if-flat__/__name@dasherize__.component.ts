import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-select style="width: 100%;" [(ngModel)]="selectedUser" (nzScrollToBottom)="loadMore()" nzPlaceHolder="Select users" nzAllowClear>
      <nz-option *ngFor="let o of optionList" [nzValue]="o" [nzLabel]="o"></nz-option>
      <nz-option *ngIf="isLoading" nzDisabled nzCustomContent>
        <i class="anticon anticon-loading anticon-spin loading-icon"></i> Loading Data...
      </nz-option>
    </nz-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .loading-icon {
      margin-right: 8px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  randomUserUrl = 'https://api.randomuser.me/?results=10';
  optionList = [];
  selectedUser;
  isLoading = false;
  // tslint:disable-next-line:no-any
  getRandomNameList: Observable<string[]> = this.http.get(`${this.randomUserUrl}`).pipe(map((res: any) => res.results)).pipe(map((list: any) => {
    return list.map(item => `${item.name.first}`);
  }));

  loadMore(): void {
    this.isLoading = true;
    this.getRandomNameList.subscribe(data => {
      this.isLoading = false;
      this.optionList = [ ...this.optionList, ...data ];
    });
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadMore();
  }
}
