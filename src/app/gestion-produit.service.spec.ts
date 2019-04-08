import { TestBed } from '@angular/core/testing';

import { GestionProduitService } from './gestion-produit.service';

describe('GestionProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionProduitService = TestBed.get(GestionProduitService);
    expect(service).toBeTruthy();
  });
});
