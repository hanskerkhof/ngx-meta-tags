import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';
import { DemoRouteComponent } from './components/demo-route/demo-route.component';
import { NgxMetaTagsGuardGuard } from '../../projects/ngx-meta-tags/src/lib/ngx-meta-tags-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: DemoHomeComponent
  },
  {
    path: 'service',
    component: DemoServiceComponent
  },
  {
    path: 'route',
    canActivate: [NgxMetaTagsGuardGuard],
    component: DemoRouteComponent,
    data: {
      metaTags: {
        title: 'Route',
        description: 'Description set in route data.metaTags'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
