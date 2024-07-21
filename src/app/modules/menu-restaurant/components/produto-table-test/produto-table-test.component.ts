import { Component, OnInit } from '@angular/core';
import { TableConfigs } from 'src/app/shared/components/table/table.component';
import { Produto } from '../../models/produto';
import { EnumStatusProduto } from '../../enumeradores/enum-status-produto'
import { HttpClientService } from 'src/app/core/services/http-client.service';

@Component({
  selector: 'app-produto-table-test',
  templateUrl: './produto-table-test.component.html',
  styleUrls: ['./produto-table-test.component.css']
})
export class ProdutoTableTestComponent extends TableConfigs<Produto> implements OnInit {
  
  constructor(private httpClient: HttpClientService) { 
    super([
      { columnName: 'nome', descriptionHeaderColumn: 'Nome' }, 
      { columnName: 'descricao', descriptionHeaderColumn: 'Descrição' }, 
      { columnName: 'preco', descriptionHeaderColumn: 'Preço' },
      { columnName: 'codigo', descriptionHeaderColumn: 'Código'}, 
      { columnName: 'caminhoImagem', descriptionHeaderColumn: 'Caminho Imagem' }, 
      { columnName: 'status', descriptionHeaderColumn: 'Status' }, 
      { columnName: 'prioridade', descriptionHeaderColumn: 'Prioridade' }, 
    ]);    
  }

  ngOnInit(): void {
    this.getAllProductsToGrid();
  }

  getAllProductsToGrid() : void {
    debugger
    this.httpClient.get('produto').subscribe((result) => {
      debugger
    });
    // this.dataSource.data = [
    //   {
    //     descricao: 'Salmão, Cream Cheese e Cebolinha',
    //     preco: 34.90,
    //     codigo: '02JKD37SJ3133KS777',
    //     caminhoImagem: '/teste/teste01',
    //     status: 1,
    //     prioridade: 0,
    //     nome: 'Temaki 01'
    //   },
    //   {
    //     descricao: 'Salmão Grelhado, Cream Cheese e Doritos',
    //     preco: 31.55,
    //     codigo: '38DJSL27DYWSS',
    //     caminhoImagem: 'teste-02/teste-03/teste-04',
    //     status: EnumStatusProduto.ATIVO,
    //     prioridade: 0,
    //     nome: 'Temaki 02'
    //   },
    //   {
    //     descricao: 'Salmão Grelhado, Cream Cheese e Doritos',
    //     preco: 31.55,
    //     codigo: '38DJSL27DYWSS',
    //     caminhoImagem: 'teste-02/teste-03/teste-04',
    //     status: EnumStatusProduto.ATIVO,
    //     prioridade: 0,
    //     nome: 'Temaki 02'
    //   },
    //   {
    //     descricao: 'Salmão Grelhado, Cream Cheese e Doritos',
    //     preco: 31.55,
    //     codigo: '38DJSL27DYWSS',
    //     caminhoImagem: 'teste-02/teste-03/teste-04',
    //     status: EnumStatusProduto.ATIVO,
    //     prioridade: 0,
    //     nome: 'Temaki 02'
    //   },
    //   {
    //     descricao: 'Salmão Grelhado, Cream Cheese e Doritos',
    //     preco: 31.55,
    //     codigo: '38DJSL27DYWSS',
    //     caminhoImagem: 'teste-02/teste-03/teste-04',
    //     status: EnumStatusProduto.ATIVO,
    //     prioridade: 0,
    //     nome: 'Temaki 02'
    //   },
    //   {
    //     descricao: 'Salmão Grelhado, Cream Cheese e Doritos',
    //     preco: 31.55,
    //     codigo: '38DJSL27DYWSS',
    //     caminhoImagem: 'teste-02/teste-03/teste-04',
    //     status: EnumStatusProduto.ATIVO,
    //     prioridade: 0,
    //     nome: 'Temaki 02'
    //   },
    //   {
    //     descricao: 'Salmão Grelhado, Cream Cheese e Doritos',
    //     preco: 31.55,
    //     codigo: '38DJSL27DYWSS',
    //     caminhoImagem: 'teste-02/teste-03/teste-04',
    //     status: EnumStatusProduto.ATIVO,
    //     prioridade: 0,
    //     nome: 'Temaki 02'
    //   },
    //   {
    //     descricao: 'Salmão Grelhado, Cream Cheese e Doritos',
    //     preco: 31.55,
    //     codigo: '38DJSL27DYWSS',
    //     caminhoImagem: 'teste-02/teste-03/teste-04',
    //     status: EnumStatusProduto.ATIVO,
    //     prioridade: 0,
    //     nome: 'Temaki 02'
    //   }
    // ];
  }

  novoProduto() : void {
    debugger

    var produtosSelecionados = this.dataSource.data.filter(x => x.selected).map(x => x.nome);
    alert(`Produtos selecionados ${produtosSelecionados.join(',')}`)

  }
}
