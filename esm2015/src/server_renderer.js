/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Inject, Injectable, NgZone, ViewEncapsulation } from '@angular/core';
import { DOCUMENT, EventManager, ɵNAMESPACE_URIS as NAMESPACE_URIS, ɵSharedStylesHost as SharedStylesHost, ɵflattenStyles as flattenStyles, ɵgetDOM as getDOM, ɵshimContentAttribute as shimContentAttribute, ɵshimHostAttribute as shimHostAttribute } from '@angular/platform-browser';
/** @type {?} */
const EMPTY_ARRAY = [];
export class ServerRendererFactory2 {
    /**
     * @param {?} eventManager
     * @param {?} ngZone
     * @param {?} document
     * @param {?} sharedStylesHost
     */
    constructor(eventManager, ngZone, document, sharedStylesHost) {
        this.eventManager = eventManager;
        this.ngZone = ngZone;
        this.document = document;
        this.sharedStylesHost = sharedStylesHost;
        this.rendererByCompId = new Map();
        this.schema = new DomElementSchemaRegistry();
        this.defaultRenderer = new DefaultServerRenderer2(eventManager, document, ngZone, this.schema);
    }
    /**
     * @param {?} element
     * @param {?} type
     * @return {?}
     */
    createRenderer(element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case ViewEncapsulation.Native:
            case ViewEncapsulation.Emulated: {
                /** @type {?} */
                let renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer = new EmulatedEncapsulationServerRenderer2(this.eventManager, this.document, this.ngZone, this.sharedStylesHost, this.schema, type);
                    this.rendererByCompId.set(type.id, renderer);
                }
                (/** @type {?} */ (renderer)).applyToHost(element);
                return renderer;
            }
            case ViewEncapsulation.Native:
                throw new Error('Native encapsulation is not supported on the server!');
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    /** @type {?} */
                    const styles = flattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    }
    /**
     * @return {?}
     */
    begin() { }
    /**
     * @return {?}
     */
    end() { }
}
ServerRendererFactory2.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerRendererFactory2.ctorParameters = () => [
    { type: EventManager },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: SharedStylesHost }
];
if (false) {
    /** @type {?} */
    ServerRendererFactory2.prototype.rendererByCompId;
    /** @type {?} */
    ServerRendererFactory2.prototype.defaultRenderer;
    /** @type {?} */
    ServerRendererFactory2.prototype.schema;
    /** @type {?} */
    ServerRendererFactory2.prototype.eventManager;
    /** @type {?} */
    ServerRendererFactory2.prototype.ngZone;
    /** @type {?} */
    ServerRendererFactory2.prototype.document;
    /** @type {?} */
    ServerRendererFactory2.prototype.sharedStylesHost;
}
class DefaultServerRenderer2 {
    /**
     * @param {?} eventManager
     * @param {?} document
     * @param {?} ngZone
     * @param {?} schema
     */
    constructor(eventManager, document, ngZone, schema) {
        this.eventManager = eventManager;
        this.document = document;
        this.ngZone = ngZone;
        this.schema = schema;
        this.data = Object.create(null);
    }
    /**
     * @return {?}
     */
    destroy() { }
    /**
     * @param {?} name
     * @param {?=} namespace
     * @param {?=} debugInfo
     * @return {?}
     */
    createElement(name, namespace, debugInfo) {
        if (namespace) {
            return getDOM().createElementNS(NAMESPACE_URIS[namespace], name, this.document);
        }
        return getDOM().createElement(name, this.document);
    }
    /**
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    createComment(value, debugInfo) { return getDOM().createComment(value); }
    /**
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    createText(value, debugInfo) { return getDOM().createTextNode(value); }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    appendChild(parent, newChild) { getDOM().appendChild(parent, newChild); }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    insertBefore(parent, newChild, refChild) {
        if (parent) {
            getDOM().insertBefore(parent, refChild, newChild);
        }
    }
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    removeChild(parent, oldChild) {
        if (parent) {
            getDOM().removeChild(parent, oldChild);
        }
    }
    /**
     * @param {?} selectorOrNode
     * @param {?=} debugInfo
     * @return {?}
     */
    selectRootElement(selectorOrNode, debugInfo) {
        /** @type {?} */
        let el;
        if (typeof selectorOrNode === 'string') {
            el = getDOM().querySelector(this.document, selectorOrNode);
            if (!el) {
                throw new Error(`The selector "${selectorOrNode}" did not match any elements`);
            }
        }
        else {
            el = selectorOrNode;
        }
        getDOM().clearNodes(el);
        return el;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    parentNode(node) { return getDOM().parentElement(node); }
    /**
     * @param {?} node
     * @return {?}
     */
    nextSibling(node) { return getDOM().nextSibling(node); }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    setAttribute(el, name, value, namespace) {
        if (namespace) {
            getDOM().setAttributeNS(el, NAMESPACE_URIS[namespace], namespace + ':' + name, value);
        }
        else {
            getDOM().setAttribute(el, name, value);
        }
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    removeAttribute(el, name, namespace) {
        if (namespace) {
            getDOM().removeAttributeNS(el, NAMESPACE_URIS[namespace], name);
        }
        else {
            getDOM().removeAttribute(el, name);
        }
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    addClass(el, name) { getDOM().addClass(el, name); }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    removeClass(el, name) { getDOM().removeClass(el, name); }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    setStyle(el, style, value, flags) {
        getDOM().setStyle(el, style, value);
    }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    removeStyle(el, style, flags) {
        getDOM().removeStyle(el, style);
    }
    /**
     * @param {?} tagName
     * @param {?} propertyName
     * @return {?}
     */
    _isSafeToReflectProperty(tagName, propertyName) {
        return this.schema.securityContext(tagName, propertyName, true) ===
            this.schema.securityContext(tagName, propertyName, false);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setProperty(el, name, value) {
        checkNoSyntheticProp(name, 'property');
        getDOM().setProperty(el, name, value);
        /** @type {?} */
        const tagName = (/** @type {?} */ (el.tagName)).toLowerCase();
        if (value != null && (typeof value === 'number' || typeof value == 'string') &&
            name.toLowerCase() !== 'innerhtml' && this.schema.hasElement(tagName, EMPTY_ARRAY) &&
            this.schema.hasProperty(tagName, name, EMPTY_ARRAY) &&
            this._isSafeToReflectProperty(tagName, name)) {
            this.setAttribute(el, name, value.toString());
        }
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    setValue(node, value) { getDOM().setText(node, value); }
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(target, eventName, callback) {
        checkNoSyntheticProp(eventName, 'listener');
        if (typeof target === 'string') {
            return /** @type {?} */ (this.eventManager.addGlobalEventListener(target, eventName, this.decoratePreventDefault(callback)));
        }
        return /** @type {?} */ ((this.eventManager.addEventListener(target, eventName, this.decoratePreventDefault(callback))));
    }
    /**
     * @param {?} eventHandler
     * @return {?}
     */
    decoratePreventDefault(eventHandler) {
        return (event) => {
            /** @type {?} */
            const allowDefaultBehavior = this.ngZone.runGuarded(() => eventHandler(event));
            if (allowDefaultBehavior === false) {
                event.preventDefault();
                event.returnValue = false;
            }
        };
    }
}
if (false) {
    /** @type {?} */
    DefaultServerRenderer2.prototype.data;
    /** @type {?} */
    DefaultServerRenderer2.prototype.destroyNode;
    /** @type {?} */
    DefaultServerRenderer2.prototype.eventManager;
    /** @type {?} */
    DefaultServerRenderer2.prototype.document;
    /** @type {?} */
    DefaultServerRenderer2.prototype.ngZone;
    /** @type {?} */
    DefaultServerRenderer2.prototype.schema;
}
/** @type {?} */
const AT_CHARCODE = '@'.charCodeAt(0);
/**
 * @param {?} name
 * @param {?} nameKind
 * @return {?}
 */
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error(`Found the synthetic ${nameKind} ${name}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`);
    }
}
class EmulatedEncapsulationServerRenderer2 extends DefaultServerRenderer2 {
    /**
     * @param {?} eventManager
     * @param {?} document
     * @param {?} ngZone
     * @param {?} sharedStylesHost
     * @param {?} schema
     * @param {?} component
     */
    constructor(eventManager, document, ngZone, sharedStylesHost, schema, component) {
        super(eventManager, document, ngZone, schema);
        this.component = component;
        /** @type {?} */
        const componentId = 's' + component.id;
        /** @type {?} */
        const styles = flattenStyles(componentId, component.styles, []);
        sharedStylesHost.addStyles(styles);
        this.contentAttr = shimContentAttribute(componentId);
        this.hostAttr = shimHostAttribute(componentId);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    applyToHost(element) { super.setAttribute(element, this.hostAttr, ''); }
    /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    createElement(parent, name) {
        /** @type {?} */
        const el = super.createElement(parent, name, this.document);
        super.setAttribute(el, this.contentAttr, '');
        return el;
    }
}
if (false) {
    /** @type {?} */
    EmulatedEncapsulationServerRenderer2.prototype.contentAttr;
    /** @type {?} */
    EmulatedEncapsulationServerRenderer2.prototype.hostAttr;
    /** @type {?} */
    EmulatedEncapsulationServerRenderer2.prototype.component;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyX3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tc2VydmVyL3NyYy9zZXJ2ZXJfcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQVMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWdILGlCQUFpQixFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUMzTixPQUFPLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxlQUFlLElBQUksY0FBYyxFQUFFLGlCQUFpQixJQUFJLGdCQUFnQixFQUFFLGNBQWMsSUFBSSxhQUFhLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBRSxxQkFBcUIsSUFBSSxvQkFBb0IsRUFBRSxrQkFBa0IsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztBQUV2UixNQUFNLFdBQVcsR0FBVSxFQUFFLENBQUM7QUFHOUIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7OztJQUtqQyxZQUNZLGNBQW9DLE1BQWMsRUFDaEMsUUFBYSxFQUFVLGdCQUFrQztRQUQzRSxpQkFBWSxHQUFaLFlBQVk7UUFBd0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtnQ0FONUQsSUFBSSxHQUFHLEVBQXFCO3NCQUV0QyxJQUFJLHdCQUF3QixFQUFFO1FBSzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEc7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFZLEVBQUUsSUFBd0I7UUFDbkQsSUFBSSxDQUFDLE9BQU8sSUFBSSxD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c0JBQXNCOzs7Ozs7Ozs7SUFJdkUsWUFDSSxZQUEwQixFQUFFLFFBQWEsRUFBRSxNQUFjLEVBQUUsZ0JBQWtDLEVBQzdGLE1BQWdDLEVBQVUsU0FBd0I7UUFDcEUsS0FBSyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREYsY0FBUyxHQUFULFNBQVMsQ0FBZTs7UUFHcEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUM7O1FBQ3ZDLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hEOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFZLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFOzs7Ozs7SUFFN0UsYUFBYSxDQUFDLE1BQVcsRUFBRSxJQUFZOztRQUNyQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTyxFQUFFLENBQUM7S0FDWDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtBUFBfSUQsIEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBSZW5kZXJDb21wb25lbnRUeXBlLCBSZW5kZXJlciwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBSZW5kZXJlclN0eWxlRmxhZ3MyLCBSZW5kZXJlclR5cGUyLCBSb290UmVuZGVyZXIsIFZpZXdFbmNhcHN1bGF0aW9uLCDJtXN0cmluZ2lmeSBhcyBzdHJpbmdpZnl9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVCwgRXZlbnRNYW5hZ2VyLCDJtU5BTUVTUEFDRV9VUklTIGFzIE5BTUVTUEFDRV9VUklTLCDJtVNoYXJlZFN0eWxlc0hvc3QgYXMgU2hhcmVkU3R5bGVzSG9zdCwgybVmbGF0dGVuU3R5bGVzIGFzIGZsYXR0ZW5TdHlsZXMsIMm1Z2V0RE9NIGFzIGdldERPTSwgybVzaGltQ29udGVudEF0dHJpYnV0ZSBhcyBzaGltQ29udGVudEF0dHJpYnV0ZSwgybVzaGltSG9zdEF0dHJpYnV0ZSBhcyBzaGltSG9zdEF0dHJpYnV0ZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmNvbnN0IEVNUFRZX0FSUkFZOiBhbnlbXSA9IFtdO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyUmVuZGVyZXJGYWN0b3J5MiBpbXBsZW1lbnRzIFJlbmRlcmVyRmFjdG9yeTIge1xuICBwcml2YXRlIHJlbmRlcmVyQnlDb21wSWQgPSBuZXcgTWFwPHN0cmluZywgUmVuZGVyZXIyPigpO1xuICBwcml2YXRlIGRlZmF1bHRSZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIHNjaGVtYSA9IG5ldyBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnkoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIHByaXZhdGUgc2hhcmVkU3R5bGVzSG9zdDogU2hhcmVkU3R5bGVzSG9zdCkge1xuICAgIHRoaXMuZGVmYXVsdFJlbmRlcmVyID0gbmV3IERlZmF1bHRTZXJ2ZXJSZW5kZXJlcjIoZXZlbnRNYW5hZ2VyLCBkb2N1bWVudCwgbmdab25lLCB0aGlzLnNjaGVtYSk7XG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcihlbGVtZW50OiBhbnksIHR5cGU6IFJlbmRlcmVyVHlwZTJ8bnVsbCk6IFJlbmRlcmVyMiB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICF0eXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UmVuZGVyZXI7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZS5lbmNhcHN1bGF0aW9uKSB7XG4gICAgICBjYXNlIFZpZXdFbmNhcHN1bGF0aW9uLk5hdGl2ZTpcbiAgICAgIGNhc2UgVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQ6IHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckJ5Q29tcElkLmdldCh0eXBlLmlkKTtcbiAgICAgICAgaWYgKCFyZW5kZXJlcikge1xuICAgICAgICAgIHJlbmRlcmVyID0gbmV3IEVtdWxhdGVkRW5jYXBzdWxhdGlvblNlcnZlclJlbmRlcmVyMihcbiAgICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIsIHRoaXMuZG9jdW1lbnQsIHRoaXMubmdab25lLCB0aGlzLnNoYXJlZFN0eWxlc0hvc3QsIHRoaXMuc2NoZW1hLFxuICAgICAgICAgICAgICB0eXBlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyQnlDb21wSWQuc2V0KHR5cGUuaWQsIHJlbmRlcmVyKTtcbiAgICAgICAgfVxuICAgICAgICAoPEVtdWxhdGVkRW5jYXBzdWxhdGlvblNlcnZlclJlbmRlcmVyMj5yZW5kZXJlcikuYXBwbHlUb0hvc3QoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiByZW5kZXJlcjtcbiAgICAgIH1cbiAgICAgIGNhc2UgVmlld0VuY2Fwc3VsYXRpb24uTmF0aXZlOlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hdGl2ZSBlbmNhcHN1bGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhlIHNlcnZlciEnKTtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbmRlcmVyQnlDb21wSWQuaGFzKHR5cGUuaWQpKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0gZmxhdHRlblN0eWxlcyh0eXBlLmlkLCB0eXBlLnN0eWxlcywgW10pO1xuICAgICAgICAgIHRoaXMuc2hhcmVkU3R5bGVzSG9zdC5hZGRTdHlsZXMoc3R5bGVzKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyQnlDb21wSWQuc2V0KHR5cGUuaWQsIHRoaXMuZGVmYXVsdFJlbmRlcmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UmVuZGVyZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmVnaW4oKSB7fVxuICBlbmQoKSB7fVxufVxuXG5jbGFzcyBEZWZhdWx0U2VydmVyUmVuZGVyZXIyIGltcGxlbWVudHMgUmVuZGVyZXIyIHtcbiAgZGF0YToge1trZXk6IHN0cmluZ106IGFueX0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlciwgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIHNjaGVtYTogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5KSB7fVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIGRlc3Ryb3lOb2RlOiBudWxsO1xuXG4gIGNyZWF0ZUVsZW1lbnQobmFtZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcsIGRlYnVnSW5mbz86IGFueSk6IGFueSB7XG4gICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgcmV0dXJuIGdldERPTSgpLmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0VfVVJJU1tuYW1lc3BhY2VdLCBuYW1lLCB0aGlzLmRvY3VtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0RE9NKCkuY3JlYXRlRWxlbWVudChuYW1lLCB0aGlzLmRvY3VtZW50KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbW1lbnQodmFsdWU6IHN0cmluZywgZGVidWdJbmZvPzogYW55KTogYW55IHsgcmV0dXJuIGdldERPTSgpLmNyZWF0ZUNvbW1lbnQodmFsdWUpOyB9XG5cbiAgY3JlYXRlVGV4dCh2YWx1ZTogc3RyaW5nLCBkZWJ1Z0luZm8/OiBhbnkpOiBhbnkgeyByZXR1cm4gZ2V0RE9NKCkuY3JlYXRlVGV4dE5vZGUodmFsdWUpOyB9XG5cbiAgYXBwZW5kQ2hpbGQocGFyZW50OiBhbnksIG5ld0NoaWxkOiBhbnkpOiB2b2lkIHsgZ2V0RE9NKCkuYXBwZW5kQ2hpbGQocGFyZW50LCBuZXdDaGlsZCk7IH1cblxuICBpbnNlcnRCZWZvcmUocGFyZW50OiBhbnksIG5ld0NoaWxkOiBhbnksIHJlZkNoaWxkOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBnZXRET00oKS5pbnNlcnRCZWZvcmUocGFyZW50LCByZWZDaGlsZCwgbmV3Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNoaWxkKHBhcmVudDogYW55LCBvbGRDaGlsZDogYW55KTogdm9pZCB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgZ2V0RE9NKCkucmVtb3ZlQ2hpbGQocGFyZW50LCBvbGRDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Um9vdEVsZW1lbnQoc2VsZWN0b3JPck5vZGU6IHN0cmluZ3xhbnksIGRlYnVnSW5mbz86IGFueSk6IGFueSB7XG4gICAgbGV0IGVsOiBhbnk7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3Rvck9yTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsID0gZ2V0RE9NKCkucXVlcnlTZWxlY3Rvcih0aGlzLmRvY3VtZW50LCBzZWxlY3Rvck9yTm9kZSk7XG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHNlbGVjdG9yIFwiJHtzZWxlY3Rvck9yTm9kZX1cIiBkaWQgbm90IG1hdGNoIGFueSBlbGVtZW50c2ApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IHNlbGVjdG9yT3JOb2RlO1xuICAgIH1cbiAgICBnZXRET00oKS5jbGVhck5vZGVzKGVsKTtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwYXJlbnROb2RlKG5vZGU6IGFueSk6IGFueSB7IHJldHVybiBnZXRET00oKS5wYXJlbnRFbGVtZW50KG5vZGUpOyB9XG5cbiAgbmV4dFNpYmxpbmcobm9kZTogYW55KTogYW55IHsgcmV0dXJuIGdldERPTSgpLm5leHRTaWJsaW5nKG5vZGUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKGVsOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgZ2V0RE9NKCkuc2V0QXR0cmlidXRlTlMoZWwsIE5BTUVTUEFDRV9VUklTW25hbWVzcGFjZV0sIG5hbWVzcGFjZSArICc6JyArIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0RE9NKCkuc2V0QXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKGVsOiBhbnksIG5hbWU6IHN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgZ2V0RE9NKCkucmVtb3ZlQXR0cmlidXRlTlMoZWwsIE5BTUVTUEFDRV9VUklTW25hbWVzcGFjZV0sIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRET00oKS5yZW1vdmVBdHRyaWJ1dGUoZWwsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENsYXNzKGVsOiBhbnksIG5hbWU6IHN0cmluZyk6IHZvaWQgeyBnZXRET00oKS5hZGRDbGFzcyhlbCwgbmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhlbDogYW55LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHsgZ2V0RE9NKCkucmVtb3ZlQ2xhc3MoZWwsIG5hbWUpOyB9XG5cbiAgc2V0U3R5bGUoZWw6IGFueSwgc3R5bGU6IHN0cmluZywgdmFsdWU6IGFueSwgZmxhZ3M6IFJlbmRlcmVyU3R5bGVGbGFnczIpOiB2b2lkIHtcbiAgICBnZXRET00oKS5zZXRTdHlsZShlbCwgc3R5bGUsIHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZVN0eWxlKGVsOiBhbnksIHN0eWxlOiBzdHJpbmcsIGZsYWdzOiBSZW5kZXJlclN0eWxlRmxhZ3MyKTogdm9pZCB7XG4gICAgZ2V0RE9NKCkucmVtb3ZlU3R5bGUoZWwsIHN0eWxlKTtcbiAgfVxuXG4gIC8vIFRoZSB2YWx1ZSB3YXMgdmFsaWRhdGVkIGFscmVhZHkgYXMgYSBwcm9wZXJ0eSBiaW5kaW5nLCBhZ2FpbnN0IHRoZSBwcm9wZXJ0eSBuYW1lLlxuICAvLyBUbyBrbm93IHRoaXMgdmFsdWUgaXMgc2FmZSB0byB1c2UgYXMgYW4gYXR0cmlidXRlLCB0aGUgc2VjdXJpdHkgY29udGV4dCBvZiB0aGVcbiAgLy8gYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUgaXMgY2hlY2tlZCBhZ2FpbnN0IHRoYXQgc2VjdXJpdHkgY29udGV4dCBvZiB0aGVcbiAgLy8gcHJvcGVydHkuXG4gIHByaXZhdGUgX2lzU2FmZVRvUmVmbGVjdFByb3BlcnR5KHRhZ05hbWU6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuc2VjdXJpdHlDb250ZXh0KHRhZ05hbWUsIHByb3BlcnR5TmFtZSwgdHJ1ZSkgPT09XG4gICAgICAgIHRoaXMuc2NoZW1hLnNlY3VyaXR5Q29udGV4dCh0YWdOYW1lLCBwcm9wZXJ0eU5hbWUsIGZhbHNlKTtcbiAgfVxuXG4gIHNldFByb3BlcnR5KGVsOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNoZWNrTm9TeW50aGV0aWNQcm9wKG5hbWUsICdwcm9wZXJ0eScpO1xuICAgIGdldERPTSgpLnNldFByb3BlcnR5KGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgLy8gTWlycm9yIHByb3BlcnR5IHZhbHVlcyBmb3Iga25vd24gSFRNTCBlbGVtZW50IHByb3BlcnRpZXMgaW4gdGhlIGF0dHJpYnV0ZXMuXG4gICAgLy8gU2tpcCBgaW5uZXJodG1sYCB3aGljaCBpcyBjb25zZXJ2YXRpdmVseSBtYXJrZWQgYXMgYW4gYXR0cmlidXRlIGZvciBzZWN1cml0eVxuICAgIC8vIHB1cnBvc2VzIGJ1dCBpcyBub3QgYWN0dWFsbHkgYW4gYXR0cmlidXRlLlxuICAgIGNvbnN0IHRhZ05hbWUgPSAoZWwudGFnTmFtZSBhcyBzdHJpbmcpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSAmJlxuICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbm5lcmh0bWwnICYmIHRoaXMuc2NoZW1hLmhhc0VsZW1lbnQodGFnTmFtZSwgRU1QVFlfQVJSQVkpICYmXG4gICAgICAgIHRoaXMuc2NoZW1hLmhhc1Byb3BlcnR5KHRhZ05hbWUsIG5hbWUsIEVNUFRZX0FSUkFZKSAmJlxuICAgICAgICB0aGlzLl9pc1NhZmVUb1JlZmxlY3RQcm9wZXJ0eSh0YWdOYW1lLCBuYW1lKSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKG5vZGU6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQgeyBnZXRET00oKS5zZXRUZXh0KG5vZGUsIHZhbHVlKTsgfVxuXG4gIGxpc3RlbihcbiAgICAgIHRhcmdldDogJ2RvY3VtZW50J3wnd2luZG93J3wnYm9keSd8YW55LCBldmVudE5hbWU6IHN0cmluZyxcbiAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYm9vbGVhbik6ICgpID0+IHZvaWQge1xuICAgIGNoZWNrTm9TeW50aGV0aWNQcm9wKGV2ZW50TmFtZSwgJ2xpc3RlbmVyJyk7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gPCgpID0+IHZvaWQ+dGhpcy5ldmVudE1hbmFnZXIuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0YXJnZXQsIGV2ZW50TmFtZSwgdGhpcy5kZWNvcmF0ZVByZXZlbnREZWZhdWx0KGNhbGxiYWNrKSk7XG4gICAgfVxuICAgIHJldHVybiA8KCkgPT4gdm9pZD50aGlzLmV2ZW50TWFuYWdlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgdGFyZ2V0LCBldmVudE5hbWUsIHRoaXMuZGVjb3JhdGVQcmV2ZW50RGVmYXVsdChjYWxsYmFjaykpIGFzKCkgPT4gdm9pZDtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGVQcmV2ZW50RGVmYXVsdChldmVudEhhbmRsZXI6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgLy8gUnVuIHRoZSBldmVudCBoYW5kbGVyIGluc2lkZSB0aGUgbmdab25lIGJlY2F1c2UgZXZlbnQgaGFuZGxlcnMgYXJlIG5vdCBwYXRjaGVkXG4gICAgICAvLyBieSBab25lIG9uIHRoZSBzZXJ2ZXIuIFRoaXMgaXMgcmVxdWlyZWQgb25seSBmb3IgdGVzdHMuXG4gICAgICBjb25zdCBhbGxvd0RlZmF1bHRCZWhhdmlvciA9IHRoaXMubmdab25lLnJ1bkd1YXJkZWQoKCkgPT4gZXZlbnRIYW5kbGVyKGV2ZW50KSk7XG4gICAgICBpZiAoYWxsb3dEZWZhdWx0QmVoYXZpb3IgPT09IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBBVF9DSEFSQ09ERSA9ICdAJy5jaGFyQ29kZUF0KDApO1xuZnVuY3Rpb24gY2hlY2tOb1N5bnRoZXRpY1Byb3AobmFtZTogc3RyaW5nLCBuYW1lS2luZDogc3RyaW5nKSB7XG4gIGlmIChuYW1lLmNoYXJDb2RlQXQoMCkgPT09IEFUX0NIQVJDT0RFKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRm91bmQgdGhlIHN5bnRoZXRpYyAke25hbWVLaW5kfSAke25hbWV9LiBQbGVhc2UgaW5jbHVkZSBlaXRoZXIgXCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZVwiIG9yIFwiTm9vcEFuaW1hdGlvbnNNb2R1bGVcIiBpbiB5b3VyIGFwcGxpY2F0aW9uLmApO1xuICB9XG59XG5cbmNsYXNzIEVtdWxhdGVkRW5jYXBzdWxhdGlvblNlcnZlclJlbmRlcmVyMiBleHRlbmRzIERlZmF1bHRTZXJ2ZXJSZW5kZXJlcjIge1xuICBwcml2YXRlIGNvbnRlbnRBdHRyOiBzdHJpbmc7XG4gIHByaXZhdGUgaG9zdEF0dHI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLCBkb2N1bWVudDogYW55LCBuZ1pvbmU6IE5nWm9uZSwgc2hhcmVkU3R5bGVzSG9zdDogU2hhcmVkU3R5bGVzSG9zdCxcbiAgICAgIHNjaGVtYTogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBwcml2YXRlIGNvbXBvbmVudDogUmVuZGVyZXJUeXBlMikge1xuICAgIHN1cGVyKGV2ZW50TWFuYWdlciwgZG9jdW1lbnQsIG5nWm9uZSwgc2NoZW1hKTtcbiAgICAvLyBBZGQgYSAncycgcHJlZml4IHRvIHN0eWxlIGF0dHJpYnV0ZXMgdG8gaW5kaWNhdGUgc2VydmVyLlxuICAgIGNvbnN0IGNvbXBvbmVudElkID0gJ3MnICsgY29tcG9uZW50LmlkO1xuICAgIGNvbnN0IHN0eWxlcyA9IGZsYXR0ZW5TdHlsZXMoY29tcG9uZW50SWQsIGNvbXBvbmVudC5zdHlsZXMsIFtdKTtcbiAgICBzaGFyZWRTdHlsZXNIb3N0LmFkZFN0eWxlcyhzdHlsZXMpO1xuXG4gICAgdGhpcy5jb250ZW50QXR0ciA9IHNoaW1Db250ZW50QXR0cmlidXRlKGNvbXBvbmVudElkKTtcbiAgICB0aGlzLmhvc3RBdHRyID0gc2hpbUhvc3RBdHRyaWJ1dGUoY29tcG9uZW50SWQpO1xuICB9XG5cbiAgYXBwbHlUb0hvc3QoZWxlbWVudDogYW55KSB7IHN1cGVyLnNldEF0dHJpYnV0ZShlbGVtZW50LCB0aGlzLmhvc3RBdHRyLCAnJyk7IH1cblxuICBjcmVhdGVFbGVtZW50KHBhcmVudDogYW55LCBuYW1lOiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICBjb25zdCBlbCA9IHN1cGVyLmNyZWF0ZUVsZW1lbnQocGFyZW50LCBuYW1lLCB0aGlzLmRvY3VtZW50KTtcbiAgICBzdXBlci5zZXRBdHRyaWJ1dGUoZWwsIHRoaXMuY29udGVudEF0dHIsICcnKTtcbiAgICByZXR1cm4gZWw7XG4gIH1cbn1cbiJdfQ==