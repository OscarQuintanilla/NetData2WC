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
    selector: 'mga-ClientesxCod3',
    providers: [...matMagicProviders],
    styleUrls: ['./ClientesxCod3.component.css'],
    templateUrl: './ClientesxCod3.component.html'
}) export class ClientesxCod3 extends BaseMatTableMagicComponent implements MagicModalInterface {
    private static readonly formName: string = "ClientesxCod3";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 300;
    private static readonly height: number = 300;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return ClientesxCod3.x;
    }
    Y() {
        return ClientesxCod3.y;
    }
    Width() {
        return ClientesxCod3.width;
    }
    Height() {
        return ClientesxCod3.height;
    }
    IsCenteredToWindow() {
        return ClientesxCod3.isCenteredToWindow;
    }
    FormName() {
        return ClientesxCod3.formName;
    }
    ShowTitleBar() {
        return ClientesxCod3.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ClientesxCod3.shouldCloseOnBackgroundClick;
    }
    displayedColumns = ['Column4',
        'Column5',
    ];
}