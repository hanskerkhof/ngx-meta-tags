import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxMetaTagsComponent } from './ngx-meta-tags.component';
import { NgxMetaTagsService } from './ngx-meta-tags.service';

export interface NgxMetaTagsConfig {
  title?: string;
  description?: string;
  author?: string;
  url?: string;
  image?: string;
}

@NgModule({
  declarations: [NgxMetaTagsComponent],
  imports: [],
  exports: [NgxMetaTagsComponent]
})
export class NgxMetaTagsModule {
  constructor(private ngxMetaTagsService: NgxMetaTagsService) {
    ngxMetaTagsService.setDefaultMeta();
  }

  static forRoot(config: NgxMetaTagsConfig): ModuleWithProviders<NgxMetaTagsModule> {
    return {
      ngModule: NgxMetaTagsModule,
      providers: [{provide: 'config', useValue: config}, NgxMetaTagsService
      ]
    };
  }
}
