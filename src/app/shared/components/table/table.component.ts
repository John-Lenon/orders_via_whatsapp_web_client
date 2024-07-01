import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  @ViewChild(MatPaginator)
  paginator?: MatPaginator
  
  @ViewChild(MatSort)
  sort!: MatSort
  
  @Input()
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();  
  
  @Input()
  displayColumns?: string[];
  
  @Input()
  configColumnsTable?: ConfigTable[];

  @Input()
  habilitarInclusao: boolean = true;

  @Input()
  habilitarDelecao: boolean = true;

  @Input()
  habilitarEdicao: boolean = true;

  @Input()
  habilitarAcoes: boolean = true;

  @Input()
  ativarSelecaoItens: boolean = true;

  @Input()
  itemSelecionado?: any;

  @Input()
  habilitarMultisselecao: boolean = false;

  @Output()
  onLinhaSelecionada: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onAdd: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  quantidadeItensSelecionados: number = 0;

  marcarTodosItens: SlideToggleConfig = {
    checked: false,
    color: 'primary',
    disabled: false
  }

  ngAfterViewInit(): void {    
    this.configureTableFeatures();
  }

  configureTableFeatures() : void {
    if(this.paginator?._intl){
      this.paginator._intl.firstPageLabel = 'Primeira Página';
      this.paginator._intl.itemsPerPageLabel = 'Itens por Página';
      this.paginator._intl.nextPageLabel = 'Próxima Página';
      this.paginator._intl.previousPageLabel = 'Página Anterior';
      this.paginator._intl.lastPageLabel = 'Última Página';
        
      this.paginator._intl.getRangeLabel = (page, pageSize, length) => {
        if (length == 0 || pageSize == 0) {
            return `0 de ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;     
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} – ${endIndex} de ${length}`;
      };

      // Atribuindo as referências dos elementos HTML localizados (componentes MatPaginator e MatSort) a instância de MatTableDataSource que e responsavel por 
      // gerenciar a fonte de dados.
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }     
  }

  selecionarLinhaTabela(item: any){    
    if(this.ativarSelecaoItens){
      this.realizarSelecaoItens(item);
    }
    this.onLinhaSelecionada.emit(this.habilitarMultisselecao? null : item);
  }

  adicionarItem(item: any){
    this.onAdd.emit(item);
  }

  updateItem(item: any){
    this.onUpdate.emit(item);
  }

  deletarItem(item: any){
    this.onDelete.emit(item);
  }

  marcarOuDesmarcarTodosItens() {
    this.marcarTodosItens.checked = !this.marcarTodosItens.checked;
    
    if(this.marcarTodosItens.checked){
      this.dataSource.data?.forEach(item => item['selected'] = true);
      this.quantidadeItensSelecionados = this.dataSource.data?.length;
    }
    else {
      this.dataSource.data?.forEach(item => item['selected'] = false);
      this.quantidadeItensSelecionados = 0;
    }
  }

  private realizarSelecaoItens(itemSelecionado: any){
    if(this.habilitarMultisselecao){            
      if(itemSelecionado['selected']) {
        itemSelecionado['selected'] = false;
        this.quantidadeItensSelecionados -= 1;
        this.marcarTodosItens.checked = false;
      }  
      else {
        itemSelecionado['selected'] = true;
        this.quantidadeItensSelecionados += 1;
      }
    } else {
      this.dataSource.data.forEach(item => item['selected'] = false);      
      itemSelecionado['selected'] = true;
    }
  }
}

export interface ConfigTable {
  columnName: string;
  descriptionHeaderColumn: string
}

export class TableConfigs<T> {
  configColumns: ConfigTable[];
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  displayColumns: string[];
  itemSelecionado?: T;

  constructor(configColumns: ConfigTable[]){
    this.configColumns = configColumns;
    this.displayColumns = this.configColumns?.map(config => config.columnName);
  }

  selecionarLinha(item: any) : void {
    this.itemSelecionado = <T>item;    
  }
}

export interface SlideToggleConfig {
  checked: boolean;
  disabled: boolean;
  color: ThemePalette
}
