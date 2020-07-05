import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgxMetaTagsService } from './ngx-meta-tags.service';

@Injectable({
  providedIn: 'root'
})
export class NgxMetaTagsGuardGuard implements CanActivate, CanActivateChild {
  constructor(private readonly ngxMetaTagsService: NgxMetaTagsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    const settings = route.hasOwnProperty('data') ? route.data.metaTags : undefined;

    // TODO append to baseUrl
    settings.url = url;
    this.ngxMetaTagsService.setMetaFromConfig(settings);

    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
