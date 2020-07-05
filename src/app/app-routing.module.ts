import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';

const routes: Routes = [
  {
    path: '',
    component: DemoHomeComponent
  },
  {
    path: 'service',
    component: DemoServiceComponent
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
