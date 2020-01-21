import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
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
    this.getAll();
  }

  async getAll() {
    //this.produtos = [{"id":6,"nome":"Ricardo","qtde":109},{"id":13,"nome":"Fernanda","qtde":8}];
    this.produtos = this.api.getAll();
  }

  addProduto(){
    this.router.navigate(['form-produtos', 0]);
  }
  editProduto(id: number) {
    this.router.navigate(['form-produtos', id]);
    this.getAll();
  }
  removeProduto(id: number){
    this.api.delete(id).subscribe(data => { this.getAll() });
    //this.getAll();
  }
}
