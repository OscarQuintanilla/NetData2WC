import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-ConsultaProductos2',
    providers: [...magicProviders],
    styleUrls: ['./ConsultaProductos2.component.css'],
    templateUrl: './ConsultaProductos2.component.html'
}) export class ConsultaProductos2 extends TaskBaseMagicComponent {}