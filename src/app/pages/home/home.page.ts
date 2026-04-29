import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filtro = 'todas';

  tarefas = [
    {
      titulo: 'Revisar documentação do projeto',
      descricao: 'Verificar se todos os itens estão atualizados',
      categoria: 'Trabalho',
      prioridade: 'Alta',
      data: '20/03/2026',
      hora: '16:30',
      concluida: false
    }
  ];

  get total() {
    return this.tarefas.length;
  }

  get ativas() {
    return this.tarefas.filter(t => !t.concluida).length;
  }

  get concluidas() {
    return this.tarefas.filter(t => t.concluida).length;
  }

  setFiltro(tipo: string) {
    this.filtro = tipo;
  }

  get tarefasFiltradas() {
    if (this.filtro === 'ativas') {
      return this.tarefas.filter(t => !t.concluida);
    }
    if (this.filtro === 'concluidas') {
      return this.tarefas.filter(t => t.concluida);
    }
    return this.tarefas;
  }

  logout() {
    alert('Saiu da conta (fake)');
  }

}

