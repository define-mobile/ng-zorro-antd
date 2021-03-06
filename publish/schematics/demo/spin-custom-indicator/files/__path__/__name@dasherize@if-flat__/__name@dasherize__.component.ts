import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ng-template #indicatorTemplate><i class="anticon anticon-spin anticon-loading" style="font-size: 24px;"></i>
    </ng-template>
    <nz-spin [nzIndicator]="indicatorTemplate">
    </nz-spin>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
