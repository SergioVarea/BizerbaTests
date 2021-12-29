import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'biz-public-sidenav-component',
  templateUrl: './sidenav.component.html',
})
export class BizPublicSidenavComponent implements OnInit {

  @HostBinding('class') className = 'biz-component biz-public-sidenav-component';

  constructor() { }

  ngOnInit(): void {
  }

}
