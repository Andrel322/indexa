import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import contatos from './agenda.json';
import { FormsModule } from '@angular/forms';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'indexa';
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = contatos;
  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }

    return this.contatos.filter((contato) =>
      contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    );
  }

  filtrarContatosPorLetra(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter((contato) =>
      contato.nome.toLowerCase().startsWith(letra)
    );
  }
}
