/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, createPlatformFactory } from '@angular/core';
import { BrowserDynamicTestingModule, ɵplatformCoreDynamicTesting as platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ɵINTERNAL_SERVER_PLATFORM_PROVIDERS as INTERNAL_SERVER_PLATFORM_PROVIDERS, ɵSERVER_RENDER_PROVIDERS as SERVER_RENDER_PROVIDERS } from '@angular/platform-server';
import * as i0 from "@angular/core";
/**
 * Platform for testing
 *
 * @publicApi
 */
export var platformServerTesting = createPlatformFactory(platformCoreDynamicTesting, 'serverTesting', INTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @publicApi
 */
var ServerTestingModule = /** @class */ (function () {
    function ServerTestingModule() {
    }
    ServerTestingModule.ngModuleDef = i0.ɵdefineNgModule({ type: ServerTestingModule, imports: [NoopAnimationsModule], exports: [BrowserDynamicTestingModule] });
    ServerTestingModule.ngInjectorDef = i0.defineInjector({ factory: function ServerTestingModule_Factory(t) { return new (t || ServerTestingModule)(); }, providers: SERVER_RENDER_PROVIDERS, imports: [[NoopAnimationsModule],
            [BrowserDynamicTestingModule]] });
    return ServerTestingModule;
}());
export { ServerTestingModule };
/*@__PURE__*/ i0.ɵsetClassMetadata(ServerTestingModule, [{
        type: NgModule,
        args: [{
                exports: [BrowserDynamicTestingModule],
                imports: [NoopAnimationsModule],
                providers: SERVER_RENDER_PROVIDERS
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tc2VydmVyL3Rlc3Rpbmcvc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUErQixxQkFBcUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUMsMkJBQTJCLEVBQUUsMkJBQTJCLElBQUksMEJBQTBCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqSixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUNBQW1DLElBQUksa0NBQWtDLEVBQUUsd0JBQXdCLElBQUksdUJBQXVCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHeEs7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLHFCQUFxQixDQUN0RCwwQkFBMEIsRUFBRSxlQUFlLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztBQUVyRjs7OztHQUlHO0FBQ0g7SUFBQTtLQU1DO2lFQURZLG1CQUFtQixZQUhwQixvQkFBb0IsYUFEcEIsMkJBQTJCO2dJQUkxQixtQkFBbUIsbUJBRm5CLHVCQUF1QixZQUR6QixDQUFDLG9CQUFvQixDQUFDO1lBRHRCLENBQUMsMkJBQTJCLENBQUM7OEJBNUJ4QztDQWlDQyxBQU5ELElBTUM7U0FEWSxtQkFBbUI7bUNBQW5CLG1CQUFtQjtjQUwvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUUsdUJBQXVCO2FBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlLCBQbGF0Zm9ybVJlZiwgU3RhdGljUHJvdmlkZXIsIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgybVwbGF0Zm9ybUNvcmVEeW5hbWljVGVzdGluZyBhcyBwbGF0Zm9ybUNvcmVEeW5hbWljVGVzdGluZ30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3RpbmcnO1xuaW1wb3J0IHtOb29wQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7ybVJTlRFUk5BTF9TRVJWRVJfUExBVEZPUk1fUFJPVklERVJTIGFzIElOVEVSTkFMX1NFUlZFUl9QTEFURk9STV9QUk9WSURFUlMsIMm1U0VSVkVSX1JFTkRFUl9QUk9WSURFUlMgYXMgU0VSVkVSX1JFTkRFUl9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcic7XG5cblxuLyoqXG4gKiBQbGF0Zm9ybSBmb3IgdGVzdGluZ1xuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtU2VydmVyVGVzdGluZyA9IGNyZWF0ZVBsYXRmb3JtRmFjdG9yeShcbiAgICBwbGF0Zm9ybUNvcmVEeW5hbWljVGVzdGluZywgJ3NlcnZlclRlc3RpbmcnLCBJTlRFUk5BTF9TRVJWRVJfUExBVEZPUk1fUFJPVklERVJTKTtcblxuLyoqXG4gKiBOZ01vZHVsZSBmb3IgdGVzdGluZy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGVdLFxuICBpbXBvcnRzOiBbTm9vcEFuaW1hdGlvbnNNb2R1bGVdLFxuICBwcm92aWRlcnM6IFNFUlZFUl9SRU5ERVJfUFJPVklERVJTXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZlclRlc3RpbmdNb2R1bGUge1xufVxuIl19