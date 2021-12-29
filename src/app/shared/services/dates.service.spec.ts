import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { DatesService } from './dates.service';

xdescribe('DatesService', () => {
  let service: DatesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        TranslateService,
      ],
    }).compileComponents();
  });


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
