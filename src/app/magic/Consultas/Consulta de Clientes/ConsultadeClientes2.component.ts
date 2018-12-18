import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-ConsultadeClientes2',
    providers: [...magicProviders],
    styleUrls: ['./ConsultadeClientes2.component.css'],
    templateUrl: './ConsultadeClientes2.component.html'
}) export class ConsultadeClientes2 extends TaskBaseMagicComponent {}