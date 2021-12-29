import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'biz-public-footer-component',
  templateUrl: './footer.component.html',
})
export class BizPublicFooterComponent implements OnInit {

  @HostBinding('class') className = 'biz-component biz-public-footer-component';

  constructor() { }

  ngOnInit(): void {
  }

}
