import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'form-produtos',
    loadChildren: () => import('./pages/form-produtos/form-produtos.module').then( m => m.FormProdutosPageModule)
  },
  { path: 'form-produtos/:id', 
    loadChildren: () => import('./pages/form-produtos/form-produtos.module').then( m => m.FormProdutosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
