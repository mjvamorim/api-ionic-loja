import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ApiProdutosService } from 'src/app/service/api-produtos.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.page.html',
  styleUrls: ['./form-produtos.page.scss'],
})
export class FormProdutosPage implements OnInit {
  produto : Produto;
  id: number = 0;


  constructor(private actRoute: ActivatedRoute, private router: Router,
     private api:ApiProdutosService) { 
    this.produto = new Produto();
  }

  save(){
    if (this.id==0) {
      this.api.create(this.produto).subscribe(data => {this.ionViewWillEnter()});
    }
    else {
      this.api.update(this.id,this.produto).subscribe(data => {this.ionViewWillEnter()});
    }
    this.router.navigateByUrl('/produtos');
  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.actRoute.params.subscribe(params => {
      this.id = params['id'];      
      console.log('Valor de produto id: '+this.id);
    });
    if (this.id!=0) {
      this.api.get(this.id).subscribe(resultado => {
        this.produto = resultado;
      });
    }
  }
}
