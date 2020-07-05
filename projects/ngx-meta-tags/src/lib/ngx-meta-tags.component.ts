import { Component, OnInit } from '@angular/core';
import { NgxMetaTagsService } from './ngx-meta-tags.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-ngx-meta-tags',
  template: `
    <pre><div *ngFor="let tag of metaTags$ | async">{{tag}}</div></pre>
  `,
  styles: [
    'pre { border: solid 1px #666666; padding: 10px; background-color: lightblue}'
  ]
})
export class NgxMetaTagsComponent implements OnInit {
  public metaTags$: Observable<any>;

  constructor(private ngxMetaTagsService: NgxMetaTagsService) { }

  ngOnInit(): void {
    this.metaTags$ = this.ngxMetaTagsService.metaTags$;
  }

}
