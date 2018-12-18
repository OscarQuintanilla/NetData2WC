import {
    Component
} from '@angular/core';
import {
    BaseMatTableMagicComponent,
    matMagicProviders
} from "@magic-xpa/angular-material-core";
import {
    MagicModalInterface
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-ClientesxNombre3',
    providers: [...matMagicProviders],
    styleUrls: ['./ClientesxNombre3.component.css'],
    templateUrl: './ClientesxNombre3.component.html'
}) export class ClientesxNombre3 extends BaseMatTableMagicComponent implements MagicModalInterface {
    private static readonly formName: string = "ClientesxNombre3";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 300;
    private static readonly height: number = 300;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return ClientesxNombre3.x;
    }
    Y() {
        return ClientesxNombre3.y;
    }
    Width() {
        return ClientesxNombre3.width;
    }
    Height() {
        return ClientesxNombre3.height;
    }
    IsCenteredToWindow() {
        return ClientesxNombre3.isCenteredToWindow;
    }
    FormName() {
        return ClientesxNombre3.formName;
    }
    ShowTitleBar() {
        return ClientesxNombre3.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ClientesxNombre3.shouldCloseOnBackgroundClick;
    }
    displayedColumns = ['Column4',
        'Column5',
    ];
}