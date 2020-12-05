import { TestBed } from '@angular/core/testing';

import { ExerciceParentService } from './exercice-parent.service';

describe('ExerciceParentService', () => {
  let service: ExerciceParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciceParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
