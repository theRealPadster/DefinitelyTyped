// Type definitions for serve-favicon 2.5
// Project: https://github.com/expressjs/serve-favicon
// Definitions by: Uros Smolnik <https://github.com/urossmolnik>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import serveFavicon = require('serve-favicon');
    app.use(serveFavicon(__dirname + '/public/favicon.ico'));

 =============================================== */

import express = require("express");

/**
 * Node.js middleware for serving a favicon.
 */
declare function serveFavicon(
    path: string | Buffer,
    options?: serveFavicon.Options,
): express.RequestHandler;

declare namespace serveFavicon {
    interface Options {
        /**
         * The cache-control max-age directive in ms, defaulting to 1 year.
         * This can also be a string accepted by the `ms` module.
         */
        maxAge?: number | string | undefined;
    }
}

export = serveFavicon;
