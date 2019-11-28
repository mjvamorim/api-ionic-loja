import { TestBed } from '@angular/core/testing';

import { ApiProdutosService } from './api-produtos.service';

describe('ApiProdutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiProdutosService = TestBed.get(ApiProdutosService);
    expect(service).toBeTruthy();
  });
});
