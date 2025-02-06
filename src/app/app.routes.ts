import { Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { CardComponent } from './card/card.component';
import { InformacionComponent } from './informacion/informacion.component';

export const routes: Routes = [
    {path: '', component: ContenidoComponent},
    {path: 'Compra', component: CardComponent},
    {path: 'Informacion', component: InformacionComponent}
];
