import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProdutosPageRoutingModule } from './form-produtos-routing.module';

import { FormProdutosPage } from './form-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProdutosPageRoutingModule
  ],
  declarations: [FormProdutosPage]
})
export class FormProdutosPageModule {}
