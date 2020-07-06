import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-route',
  templateUrl: './demo-route.component.html',
  styleUrls: ['./demo-route.component.scss']
})
export class DemoRouteComponent implements OnInit {
  // public metaTags$: Observable<any>;
  public routeDataSnapshot: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.metaTags$ = this.activatedRoute.data;
    this.routeDataSnapshot = this.activatedRoute.snapshot.routeConfig.data;
  }

}
