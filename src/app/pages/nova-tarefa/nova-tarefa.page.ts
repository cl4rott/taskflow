import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.page.html',
  styleUrls: ['./nova-tarefa.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class NovaTarefaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
