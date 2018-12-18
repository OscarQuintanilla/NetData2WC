import {Routes} from '@angular/router';

//Componentes a importar
import { ConsultaProductos2 } from './magic/Consultas/Consulta Productos/ConsultaProductos2.component';
import { ConsultadeClientes2 } from './magic/Consultas/Consulta de Clientes/ConsultadeClientes2.component';

export const routes: Routes = [
    {path: 'Clientes', component: ConsultadeClientes2 },
    {path: 'Productos', component: ConsultaProductos2 },
];
