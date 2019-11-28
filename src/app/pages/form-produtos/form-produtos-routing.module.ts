import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProdutosPage } from './form-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: FormProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormProdutosPageRoutingModule {}
