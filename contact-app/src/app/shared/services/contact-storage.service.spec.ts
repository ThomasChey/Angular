import { TestBed } from '@angular/core/testing';

import { ContactStorageService } from './contact-storage.service';

describe('ContactStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactStorageService = TestBed.get(ContactStorageService);
    expect(service).toBeTruthy();
  });
});
