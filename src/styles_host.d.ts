import { ɵSharedStylesHost as SharedStylesHost } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class ServerStylesHost extends SharedStylesHost {
    private doc;
    private transitionId;
    private head;
    constructor(doc: any, transitionId: string);
    private _addStyle;
    onStylesAdded(additions: Set<string>): void;
    static ɵfac: i0.ɵɵFactoryDef<ServerStylesHost, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ServerStylesHost>;
}
