/**
 * @license Angular v9.0.0+53.sha-554c2cb
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { PlatformRef } from '@angular/core';
import { StaticProvider } from '@angular/core';

/**
 * Platform for testing
 *
 * @publicApi
 */
export declare const platformServerTesting: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

/**
 * NgModule for testing.
 *
 * @publicApi
 */
export declare class ServerTestingModule {
}

export { }
