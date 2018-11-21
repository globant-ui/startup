import { TestBed } from '@angular/core/testing';

import { SearchMusicService } from './search-music.service';

describe('SearchMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchMusicService = TestBed.get(SearchMusicService);
    expect(service).toBeTruthy();
  });
});
