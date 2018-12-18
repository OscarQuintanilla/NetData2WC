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
    selector: 'mga-ConsultaSQL3',
    providers: [...matMagicProviders],
    styleUrls: ['./ConsultaSQL3.component.css'],
    templateUrl: './ConsultaSQL3.component.html'
}) export class ConsultaSQL3 extends BaseMatTableMagicComponent implements MagicModalInterface {
    private static readonly formName: string = "ConsultaSQL3";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: number = 300;
    private static readonly height: number = 300;
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return ConsultaSQL3.x;
    }
    Y() {
        return ConsultaSQL3.y;
    }
    Width() {
        return ConsultaSQL3.width;
    }
    Height() {
        return ConsultaSQL3.height;
    }
    IsCenteredToWindow() {
        return ConsultaSQL3.isCenteredToWindow;
    }
    FormName() {
        return ConsultaSQL3.formName;
    }
    ShowTitleBar() {
        return ConsultaSQL3.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ConsultaSQL3.shouldCloseOnBackgroundClick;
    }
    displayedColumns = ['Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        'Column9',
    ];
}