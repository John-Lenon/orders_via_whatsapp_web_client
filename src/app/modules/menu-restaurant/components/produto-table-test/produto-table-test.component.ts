import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { TableConfigs } from 'src/app/shared/components/table/table.component';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-table-test',
  templateUrl: './produto-table-test.component.html',
  styleUrls: ['./produto-table-test.component.css'],
})
export class ProdutoTableTestComponent
  extends TableConfigs<Produto>
  implements OnInit
{
  constructor(private httpClient: HttpClientService) {
    super([
      { columnName: 'nome', descriptionHeaderColumn: 'Nome' },
      { columnName: 'descricao', descriptionHeaderColumn: 'Descrição' },
      { columnName: 'preco', descriptionHeaderColumn: 'Preço' },
      { columnName: 'codigo', descriptionHeaderColumn: 'Código' },
      {
        columnName: 'caminhoImagem',
        descriptionHeaderColumn: 'Caminho Imagem',
      },
      { columnName: 'status', descriptionHeaderColumn: 'Status' },
      { columnName: 'prioridade', descriptionHeaderColumn: 'Prioridade' },
    ]);
  }

  ngOnInit(): void {
    this.getAllProductsToGrid();
  }

  getAllProductsToGrid(): void {
    this.httpClient.get<Produto[]>('produto').subscribe((listaProdutos) => {
      this.dataSource.data = listaProdutos?.dados ?? [];
    });
  }

  novoProduto(): void {
    var produtosSelecionados = this.dataSource.data
      .filter((x) => x.selected)
      .map((x) => x.nome);
    alert(`Produtos selecionados ${produtosSelecionados.join(',')}`);
  }

  deletarProdutos(): void {
    var itensSelecionados = this.dataSource.data?.filter(
      (item) => item.selected
    );
    if (!itensSelecionados) return;
    alert(`${itensSelecionados.map((x) => x.nome).join(', ')}`);
  }
}
