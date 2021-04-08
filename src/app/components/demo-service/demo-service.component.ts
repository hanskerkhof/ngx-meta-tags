import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NgxMetaTagsConfig } from '../../../../projects/ngx-meta-tags/src/lib/ngx-meta-tags.module';
import { NgxMetaTagsService } from '../../../../projects/ngx-meta-tags/src/lib/ngx-meta-tags.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.scss']
})
export class DemoServiceComponent implements OnInit {
  public metaTagConfig: NgxMetaTagsConfig;

  constructor(private ngxMetaTagsService: NgxMetaTagsService) {
  }

  ngOnInit(): void {
    this.metaTagConfig = {
      title: 'Service - Title set with NgxMetaTagsService',
      description: 'Angular module for adding HTML meta tags',
      author: 'Hans Kerkhof',
      image: `${environment.appUrl}/assets/meta-tags-service-icon.png`,
      url: `${environment.appUrl}/service/`,
      type: 'article'
    };
    this.ngxMetaTagsService.setMetaFromConfig(this.metaTagConfig);
  }
}
