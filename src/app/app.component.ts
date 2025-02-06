import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { CardComponent } from './card/card.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, ContenidoComponent, CardComponent, InformacionComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Angular';
}
