import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes a importar
import { ConsultaProductos2 } from './magic/Consultas/Consulta Productos/ConsultaProductos2.component';
import { ConsultadeClientes2 } from './magic/Consultas/Consulta de Clientes/ConsultadeClientes2.component';

const appRoutes: Routes = [
    {path: 'cClientes', component: ConsultadeClientes2 },

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);