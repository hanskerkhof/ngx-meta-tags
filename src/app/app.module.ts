import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMetaTagsModule } from '../../projects/ngx-meta-tags/src/lib/ngx-meta-tags.module';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';
import { environment } from '../environments/environment';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoRouteComponent } from './components/demo-route/demo-route.component';

@NgModule({
  declarations: [AppComponent, DemoHomeComponent, DemoServiceComponent, DemoRouteComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxMetaTagsModule.forRoot(
      {
        title: 'Ngx-meta-tags',
        description: 'Angular module for adding HTML meta tags',
        image: `${environment.appUrl}/assets/meta-tags-icon.png`,
        url: `${environment.appUrl}/`
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
