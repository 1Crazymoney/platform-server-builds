/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { ɵSharedStylesHost as SharedStylesHost, ɵTRANSITION_ID } from '@angular/platform-browser';
import * as i0 from "@angular/core";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class ServerStylesHost extends SharedStylesHost {
    /**
     * @param {?} doc
     * @param {?} transitionId
     */
    constructor(doc, transitionId) {
        super();
        this.doc = doc;
        this.transitionId = transitionId;
        this.head = null;
        this.head = getDOM().getElementsByTagName(doc, 'head')[0];
    }
    /**
     * @private
     * @param {?} style
     * @return {?}
     */
    _addStyle(style) {
        /** @type {?} */
        let adapter = getDOM();
        /** @type {?} */
        const el = adapter.createElement('style');
        adapter.setText(el, style);
        if (!!this.transitionId) {
            adapter.setAttribute(el, 'ng-transition', this.transitionId);
        }
        adapter.appendChild(this.head, el);
    }
    /**
     * @param {?} additions
     * @return {?}
     */
    onStylesAdded(additions) { additions.forEach((/**
     * @param {?} style
     * @return {?}
     */
    style => this._addStyle(style))); }
}
ServerStylesHost.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ServerStylesHost.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ɵTRANSITION_ID,] }] }
];
/** @nocollapse */ ServerStylesHost.ngInjectableDef = i0.ɵɵdefineInjectable({ token: ServerStylesHost, factory: function ServerStylesHost_Factory(t) { return new (t || ServerStylesHost)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(ɵTRANSITION_ID, 8)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(ServerStylesHost, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ɵTRANSITION_ID]
            }] }]; }, null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.head;
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.transitionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzX2hvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1zZXJ2ZXIvc3JjL3N0eWxlc19ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLGlCQUFpQixJQUFJLGdCQUFnQixFQUFFLGNBQWMsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7QUFHaEcsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjs7Ozs7SUFHcEQsWUFDOEIsR0FBUSxFQUNVLFlBQW9CO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRm9CLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDVSxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUo1RCxTQUFJLEdBQVEsSUFBSSxDQUFDO1FBTXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxLQUFhOztZQUN6QixPQUFPLEdBQUcsTUFBTSxFQUFFOztjQUNoQixFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN2QixPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFNBQXNCLElBQUksU0FBUyxDQUFDLE9BQU87Ozs7SUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7OztZQXJCN0YsVUFBVTs7Ozs0Q0FLSixNQUFNLFNBQUMsUUFBUTt5Q0FDZixRQUFRLFlBQUksTUFBTSxTQUFDLGNBQWM7O2tFQUwzQixnQkFBZ0IsbUVBQWhCLGdCQUFnQixjQUlmLFFBQVEsZUFDSSxjQUFjO21DQUwzQixnQkFBZ0I7Y0FENUIsVUFBVTs7c0JBS0osTUFBTTt1QkFBQyxRQUFROztzQkFDZixRQUFROztzQkFBSSxNQUFNO3VCQUFDLGNBQWM7Ozs7Ozs7SUFKdEMsZ0NBQXlCOzs7OztJQUdyQiwrQkFBa0M7Ozs7O0lBQ2xDLHdDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVCwgybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ybVTaGFyZWRTdHlsZXNIb3N0IGFzIFNoYXJlZFN0eWxlc0hvc3QsIMm1VFJBTlNJVElPTl9JRH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTdHlsZXNIb3N0IGV4dGVuZHMgU2hhcmVkU3R5bGVzSG9zdCB7XG4gIHByaXZhdGUgaGVhZDogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KMm1VFJBTlNJVElPTl9JRCkgcHJpdmF0ZSB0cmFuc2l0aW9uSWQ6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oZWFkID0gZ2V0RE9NKCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZG9jLCAnaGVhZCcpWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkU3R5bGUoc3R5bGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBhZGFwdGVyID0gZ2V0RE9NKCk7XG4gICAgY29uc3QgZWwgPSBhZGFwdGVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYWRhcHRlci5zZXRUZXh0KGVsLCBzdHlsZSk7XG4gICAgaWYgKCEhdGhpcy50cmFuc2l0aW9uSWQpIHtcbiAgICAgIGFkYXB0ZXIuc2V0QXR0cmlidXRlKGVsLCAnbmctdHJhbnNpdGlvbicsIHRoaXMudHJhbnNpdGlvbklkKTtcbiAgICB9XG4gICAgYWRhcHRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWQsIGVsKTtcbiAgfVxuXG4gIG9uU3R5bGVzQWRkZWQoYWRkaXRpb25zOiBTZXQ8c3RyaW5nPikgeyBhZGRpdGlvbnMuZm9yRWFjaChzdHlsZSA9PiB0aGlzLl9hZGRTdHlsZShzdHlsZSkpOyB9XG59XG4iXX0=