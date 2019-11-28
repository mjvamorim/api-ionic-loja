import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormProdutosPage } from './form-produtos.page';

describe('FormProdutosPage', () => {
  let component: FormProdutosPage;
  let fixture: ComponentFixture<FormProdutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProdutosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
