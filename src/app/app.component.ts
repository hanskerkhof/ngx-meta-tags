import { Component, OnInit } from '@angular/core';
import { NgxMetaTagsService } from '../../projects/ngx-meta-tags/src/lib/ngx-meta-tags.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-meta-tags-demo';

  constructor(private ngxMetaTagsService: NgxMetaTagsService) {
  }

  public setMeta(): void {
    this.ngxMetaTagsService.setMetaFromConfig({
      title: 'Ngx-meta tags',
      description: 'Angular module for adding HTML meta tags',
      author: 'Hans Kerkhof',
      image: `${environment.appUrl}/assets/meta-tags-icon.png`,
      url: `${environment.appUrl}/`
    });
  }
}
