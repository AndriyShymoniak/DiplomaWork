import { TestBed } from '@angular/core/testing';

import { MapApiService } from './map-api.service';

describe('RecognizeApiService', () => {
  let service: MapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
