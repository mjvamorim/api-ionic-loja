import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { ApiProdutosService } from 'src/app/service/api-produtos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  produtos: Observable<any>;
  produto: Produto;

  constructor(private router: Router, private api:ApiProdutosService ) {
      this.getProdutos();
  }

  async getProdutos() {
    //this.produtos = [{"id":6,"nome":"Ricardo","qtde":109},{"id":13,"nome":"Fernanda","qtde":8}];
    this.produtos = this.api.getAll();
  }
  ngOnInit() {
  }
  addProduto(){
    this.router.navigate(['form-produtos', 0]);
  }
  editProduto(id: number) {
    this.router.navigate(['form-produtos', id]);
  }
  removeProduto(id: number){

  }
}
