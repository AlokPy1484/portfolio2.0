module.exports = [
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)"));}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isStaticGeneration) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect) {
            this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let prop;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    static #_ = prop = _NEXT_REQUEST_META = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"];
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req), this._req = _req, this.headers = this._req.headers, this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics, this[_NEXT_REQUEST_META] = this._req[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] || {}, this.streaming = false;
    }
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    /**
   * Returns the request body as a Web Readable Stream. The body here can only
   * be read once as the body will start flowing as soon as the data handler
   * is attached.
   *
   * @internal
   */ stream() {
        if (this.streaming) {
            throw Object.defineProperty(new Error('Invariant: NodeNextRequest.stream() can only be called once'), "__NEXT_ERROR_CODE", {
                value: "E467",
                enumerable: false,
                configurable: true
            });
        }
        this.streaming = true;
        return new ReadableStream({
            start: (controller)=>{
                this._req.on('data', (chunk)=>{
                    controller.enqueue(new Uint8Array(chunk));
                });
                this._req.on('end', ()=>{
                    controller.close();
                });
                this._req.on('error', (err)=>{
                    controller.error(err);
                });
            }
        });
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res), this._res = _res, this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
    onClose(callback) {
        this.originalResponse.on('close', callback);
    }
}
var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAppPageRouteModule",
    ()=>isAppPageRouteModule,
    "isAppRouteRouteModule",
    ()=>isAppRouteRouteModule,
    "isPagesAPIRouteModule",
    ()=>isPagesAPIRouteModule,
    "isPagesRouteModule",
    ()=>isPagesRouteModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
function isAppRouteRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE;
}
function isAppPageRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE;
}
function isPagesRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES;
}
function isPagesAPIRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API;
} //# sourceMappingURL=checks.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParamProperties",
    ()=>getParamProperties,
    "getSegmentParam",
    ()=>getSegmentParam,
    "isCatchAll",
    ()=>isCatchAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
function getSegmentParam(segment) {
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            paramType: 'optional-catchall',
            paramName: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : 'catchall',
            paramName: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : 'dynamic',
            paramName: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
} //# sourceMappingURL=get-segment-param.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInterceptionAppRoute",
    ()=>isInterceptionAppRoute,
    "isNormalizedAppRoute",
    ()=>isNormalizedAppRoute,
    "parseAppRoute",
    ()=>parseAppRoute,
    "parseAppRouteSegment",
    ()=>parseAppRouteSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
;
;
function parseAppRouteSegment(segment) {
    if (segment === '') {
        return null;
    }
    // Check if the segment starts with an interception marker
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
    const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(segment);
    if (param) {
        return {
            type: 'dynamic',
            name: segment,
            param,
            interceptionMarker
        };
    } else if (segment.startsWith('(') && segment.endsWith(')')) {
        return {
            type: 'route-group',
            name: segment,
            interceptionMarker
        };
    } else if (segment.startsWith('@')) {
        return {
            type: 'parallel-route',
            name: segment,
            interceptionMarker
        };
    } else {
        return {
            type: 'static',
            name: segment,
            interceptionMarker
        };
    }
}
function isNormalizedAppRoute(route) {
    return route.normalized;
}
function isInterceptionAppRoute(route) {
    return route.interceptionMarker !== undefined && route.interceptingRoute !== undefined && route.interceptedRoute !== undefined;
}
function parseAppRoute(pathname, normalized) {
    const pathnameSegments = pathname.split('/').filter(Boolean);
    // Build segments array with static and dynamic segments
    const segments = [];
    // Parse if this is an interception route.
    let interceptionMarker;
    let interceptingRoute;
    let interceptedRoute;
    for (const segment of pathnameSegments){
        // Parse the segment into an AppSegment.
        const appSegment = parseAppRouteSegment(segment);
        if (!appSegment) {
            continue;
        }
        if (normalized && (appSegment.type === 'route-group' || appSegment.type === 'parallel-route')) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`${pathname} is being parsed as a normalized route, but it has a route group or parallel route segment.`), "__NEXT_ERROR_CODE", {
                value: "E923",
                enumerable: false,
                configurable: true
            });
        }
        segments.push(appSegment);
        if (appSegment.interceptionMarker) {
            const parts = pathname.split(appSegment.interceptionMarker);
            if (parts.length !== 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${pathname}`), "__NEXT_ERROR_CODE", {
                    value: "E924",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptingRoute = normalized ? parseAppRoute(parts[0], true) : parseAppRoute(parts[0], false);
            interceptedRoute = normalized ? parseAppRoute(parts[1], true) : parseAppRoute(parts[1], false);
            interceptionMarker = appSegment.interceptionMarker;
        }
    }
    const dynamicSegments = segments.filter((segment)=>segment.type === 'dynamic');
    return {
        normalized,
        pathname,
        segments,
        dynamicSegments,
        interceptionMarker,
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=app.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLoaderTree",
    ()=>parseLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
function parseLoaderTree(tree) {
    const [segment, parallelRoutes, modules] = tree;
    const { layout, template } = modules;
    let { page } = modules;
    // a __DEFAULT__ segment means that this route didn't match any of the
    // segments in the route, so we should use the default page
    page = segment === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"] ? modules.defaultPage : page;
    const conventionPath = layout?.[1] || template?.[1] || page?.[1];
    return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes
    };
} //# sourceMappingURL=parse-loader-tree.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interceptionPrefixFromParamType",
    ()=>interceptionPrefixFromParamType
]);
function interceptionPrefixFromParamType(paramType) {
    switch(paramType){
        case 'catchall-intercepted-(..)(..)':
        case 'dynamic-intercepted-(..)(..)':
            return '(..)(..)';
        case 'catchall-intercepted-(.)':
        case 'dynamic-intercepted-(.)':
            return '(.)';
        case 'catchall-intercepted-(..)':
        case 'dynamic-intercepted-(..)':
            return '(..)';
        case 'catchall-intercepted-(...)':
        case 'dynamic-intercepted-(...)':
            return '(...)';
        case 'catchall':
        case 'dynamic':
        case 'optional-catchall':
        default:
            return null;
    }
} //# sourceMappingURL=interception-prefix-from-param-type.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveParamValue",
    ()=>resolveParamValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [app-rsc] (ecmascript)");
;
;
/**
 * Extracts the param value from a path segment, handling interception markers
 * based on the expected param type.
 *
 * @param pathSegment - The path segment to extract the value from
 * @param params - The current params object for resolving dynamic param references
 * @param paramType - The expected param type which may include interception marker info
 * @returns The extracted param value
 */ function getParamValueFromSegment(pathSegment, params, paramType) {
    // If the segment is dynamic, resolve it from the params object
    if (pathSegment.type === 'dynamic') {
        return params[pathSegment.param.paramName];
    }
    // If the paramType indicates this is an intercepted param, strip the marker
    // that matches the interception marker in the param type
    const interceptionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interceptionPrefixFromParamType"])(paramType);
    if (interceptionPrefix === pathSegment.interceptionMarker) {
        return pathSegment.name.replace(pathSegment.interceptionMarker, '');
    }
    // For static segments, use the name
    return pathSegment.name;
}
function resolveParamValue(paramName, paramType, depth, route, params) {
    switch(paramType){
        case 'catchall':
        case 'optional-catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            // For catchall routes, derive from pathname using depth to determine
            // which segments to use
            const processedSegments = [];
            // Process segments to handle any embedded dynamic params
            for(let index = depth; index < route.segments.length; index++){
                const pathSegment = route.segments[index];
                if (pathSegment.type === 'static') {
                    let value = pathSegment.name;
                    // For intercepted catch-all params, strip the marker from the first segment
                    const interceptionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interceptionPrefixFromParamType"])(paramType);
                    if (interceptionPrefix && index === depth && interceptionPrefix === pathSegment.interceptionMarker) {
                        // Strip the interception marker from the value
                        value = value.replace(pathSegment.interceptionMarker, '');
                    }
                    processedSegments.push(value);
                } else {
                    // If the segment is a param placeholder, check if we have its value
                    if (!params.hasOwnProperty(pathSegment.param.paramName)) {
                        // If the segment is an optional catchall, we can break out of the
                        // loop because it's optional!
                        if (pathSegment.param.paramType === 'optional-catchall') {
                            break;
                        }
                        // Unknown param placeholder in pathname - can't derive full value
                        return undefined;
                    }
                    // If the segment matches a param, use the param value
                    // We don't encode values here as that's handled during retrieval.
                    const paramValue = params[pathSegment.param.paramName];
                    if (Array.isArray(paramValue)) {
                        processedSegments.push(...paramValue);
                    } else {
                        processedSegments.push(paramValue);
                    }
                }
            }
            if (processedSegments.length > 0) {
                return processedSegments;
            } else if (paramType === 'optional-catchall') {
                return undefined;
            } else {
                // We shouldn't be able to match a catchall segment without any path
                // segments if it's not an optional catchall
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected empty path segments match for a route "${route.pathname}" with param "${paramName}" of type "${paramType}"`), "__NEXT_ERROR_CODE", {
                    value: "E931",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            // For regular dynamic parameters, take the segment at this depth
            if (depth < route.segments.length) {
                const pathSegment = route.segments[depth];
                // Check if the segment at this depth is a placeholder for an unknown param
                if (pathSegment.type === 'dynamic' && !params.hasOwnProperty(pathSegment.param.paramName)) {
                    // The segment is a placeholder like [category] and we don't have the value
                    return undefined;
                }
                // If the segment matches a param, use the param value from params object
                // Otherwise it's a static segment, just use it directly
                // We don't encode values here as that's handled during retrieval
                return getParamValueFromSegment(pathSegment, params, paramType);
            }
            return undefined;
        default:
            paramType;
    }
} //# sourceMappingURL=resolve-param-value.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractPathnameRouteParamSegmentsFromLoaderTree",
    ()=>extractPathnameRouteParamSegmentsFromLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)");
;
;
;
/**
 * Validates that the static segments in currentPath match the corresponding
 * segments in targetSegments. This ensures we only extract dynamic parameters
 * that are part of the target pathname structure.
 *
 * Segments are compared literally - interception markers like "(.)photo" are
 * part of the pathname and must match exactly.
 *
 * @example
 * // Matching paths
 * currentPath: ['blog', '(.)photo']
 * targetSegments: ['blog', '(.)photo', '[id]']
 * → Returns true (both static segments match exactly)
 *
 * @example
 * // Non-matching paths
 * currentPath: ['blog', '(.)photo']
 * targetSegments: ['blog', 'photo', '[id]']
 * → Returns false (segments don't match - marker is part of pathname)
 *
 * @param currentPath - The accumulated path segments from the loader tree
 * @param targetSegments - The target pathname split into segments
 * @returns true if all static segments match, false otherwise
 */ function validatePrefixMatch(currentPath, route) {
    for(let i = 0; i < currentPath.length; i++){
        const pathSegment = currentPath[i];
        const targetPathSegment = route.segments[i];
        // Type mismatch - one is static, one is dynamic
        if (pathSegment.type !== targetPathSegment.type) {
            return false;
        }
        // One has an interception marker, the other doesn't.
        if (pathSegment.interceptionMarker !== targetPathSegment.interceptionMarker) {
            return false;
        }
        // Both are static but names don't match
        if (pathSegment.type === 'static' && targetPathSegment.type === 'static' && pathSegment.name !== targetPathSegment.name) {
            return false;
        } else if (pathSegment.type === 'dynamic' && targetPathSegment.type === 'dynamic' && pathSegment.param.paramType !== targetPathSegment.param.paramType && pathSegment.param.paramName !== targetPathSegment.param.paramName) {
            return false;
        }
    }
    return true;
}
function extractPathnameRouteParamSegmentsFromLoaderTree(loaderTree, route) {
    const pathnameRouteParamSegments = [];
    const params = {};
    // BFS traversal with depth and path tracking
    const queue = [
        {
            tree: loaderTree,
            depth: 0,
            currentPath: []
        }
    ];
    while(queue.length > 0){
        const { tree, depth, currentPath } = queue.shift();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        // Build the path for the current node
        let updatedPath = currentPath;
        let nextDepth = depth;
        const appSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppRouteSegment"])(segment);
        // Only add to path if it's a real segment that appears in the URL
        // Route groups and parallel markers don't contribute to URL pathname
        if (appSegment && appSegment.type !== 'route-group' && appSegment.type !== 'parallel-route') {
            updatedPath = [
                ...currentPath,
                appSegment
            ];
            nextDepth = depth + 1;
        }
        // Check if this segment has a param and matches the target pathname at this depth
        if ((appSegment == null ? void 0 : appSegment.type) === 'dynamic') {
            const { paramName, paramType } = appSegment.param;
            // Check if this segment is at the correct depth in the target pathname
            // A segment matches if:
            // 1. There's a dynamic segment at this depth in the pathname
            // 2. The parameter names match (e.g., [id] matches [id], not [category])
            // 3. The static segments leading up to this point match (prefix check)
            if (depth < route.segments.length) {
                const targetSegment = route.segments[depth];
                // Match if the target pathname has a dynamic segment at this depth
                if (targetSegment.type === 'dynamic') {
                    // Check that parameter names match exactly
                    // This prevents [category] from matching against /[id]
                    if (paramName !== targetSegment.param.paramName) {
                        continue; // Different param names, skip this segment
                    }
                    // Validate that the path leading up to this dynamic segment matches
                    // the target pathname. This prevents false matches like extracting
                    // [slug] from "/news/[slug]" when the tree has "/blog/[slug]"
                    if (validatePrefixMatch(currentPath, route)) {
                        pathnameRouteParamSegments.push({
                            name: segment,
                            paramName,
                            paramType
                        });
                    }
                }
            }
            // Resolve parameter value if it's not already known.
            if (!params.hasOwnProperty(paramName)) {
                const paramValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveParamValue"])(paramName, paramType, depth, route, params);
                if (paramValue !== undefined) {
                    params[paramName] = paramValue;
                }
            }
        }
        // Continue traversing all parallel routes to find matching segments
        for (const parallelRoute of Object.values(parallelRoutes)){
            queue.push({
                tree: parallelRoute,
                depth: nextDepth,
                currentPath: updatedPath
            });
        }
    }
    return {
        pathnameRouteParamSegments,
        params
    };
} //# sourceMappingURL=extract-pathname-route-param-segments-from-loader-tree.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeParam",
    ()=>encodeParam,
    "extractPathnameRouteParamSegments",
    ()=>extractPathnameRouteParamSegments,
    "extractPathnameRouteParamSegmentsFromSegments",
    ()=>extractPathnameRouteParamSegmentsFromSegments,
    "normalizePathname",
    ()=>normalizePathname,
    "resolveRouteParamsFromTree",
    ()=>resolveRouteParamsFromTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)");
;
;
;
;
;
function encodeParam(value, encoder) {
    let replaceValue;
    if (Array.isArray(value)) {
        replaceValue = value.map(encoder).join('/');
    } else {
        replaceValue = encoder(value);
    }
    return replaceValue;
}
function normalizePathname(pathname) {
    return pathname.replace(/\\/g, '/').replace(/(?!^)\/$/, '');
}
function extractPathnameRouteParamSegments(routeModule, segments, route) {
    // For AppPageRouteModule, use the loaderTree traversal approach
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppPageRouteModule"])(routeModule)) {
        const { pathnameRouteParamSegments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractPathnameRouteParamSegmentsFromLoaderTree"])(routeModule.userland.loaderTree, route);
        return pathnameRouteParamSegments;
    }
    return extractPathnameRouteParamSegmentsFromSegments(segments);
}
function extractPathnameRouteParamSegmentsFromSegments(segments) {
    // TODO: should we consider what values are already present in the page?
    // For AppRouteRouteModule, filter the segments array to get the route params
    // that contribute to the pathname.
    const result = [];
    for (const segment of segments){
        // Skip segments without param info.
        if (!segment.paramName || !segment.paramType) continue;
        // Collect all the route param keys that contribute to the pathname.
        result.push({
            name: segment.name,
            paramName: segment.paramName,
            paramType: segment.paramType
        });
    }
    return result;
}
function resolveRouteParamsFromTree(loaderTree, params, route, fallbackRouteParams) {
    // Stack-based traversal with depth tracking
    const stack = [
        {
            tree: loaderTree,
            depth: 0
        }
    ];
    while(stack.length > 0){
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        const appSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppRouteSegment"])(segment);
        // If this segment is a route parameter, then we should process it if it's
        // not already known and is not already marked as a fallback route param.
        if ((appSegment == null ? void 0 : appSegment.type) === 'dynamic' && !params.hasOwnProperty(appSegment.param.paramName) && !fallbackRouteParams.some((param)=>param.paramName === appSegment.param.paramName)) {
            const { paramName, paramType } = appSegment.param;
            const paramValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveParamValue"])(paramName, paramType, depth, route, params);
            if (paramValue !== undefined) {
                params[paramName] = paramValue;
            } else if (paramType !== 'optional-catchall') {
                // If we couldn't resolve the param, mark it as a fallback
                fallbackRouteParams.push({
                    paramName,
                    paramType
                });
            }
        }
        // Calculate next depth - increment if this is not a route group and not empty
        let nextDepth = depth;
        if (appSegment && appSegment.type !== 'route-group' && appSegment.type !== 'parallel-route') {
            nextDepth++;
        }
        // Add all parallel routes to the stack for processing.
        for (const parallelRoute of Object.values(parallelRoutes)){
            stack.push({
                tree: parallelRoute,
                depth: nextDepth
            });
        }
    }
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dynamicParamTypes",
    ()=>dynamicParamTypes
]);
const dynamicParamTypes = {
    catchall: 'c',
    'catchall-intercepted-(..)(..)': 'ci(..)(..)',
    'catchall-intercepted-(.)': 'ci(.)',
    'catchall-intercepted-(..)': 'ci(..)',
    'catchall-intercepted-(...)': 'ci(...)',
    'optional-catchall': 'oc',
    dynamic: 'd',
    'dynamic-intercepted-(..)(..)': 'di(..)(..)',
    'dynamic-intercepted-(.)': 'di(.)',
    'dynamic-intercepted-(..)': 'di(..)',
    'dynamic-intercepted-(...)': 'di(...)'
}; //# sourceMappingURL=get-short-dynamic-param-type.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOpaqueFallbackRouteParams",
    ()=>createOpaqueFallbackRouteParams,
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)");
;
;
;
;
function createOpaqueFallbackRouteParams(fallbackRouteParams) {
    // If there are no fallback route params, we can return early.
    if (fallbackRouteParams.length === 0) return null;
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    const keys = new Map();
    // Generate a unique key for the fallback route param, if this key is found
    // in the static output, it represents a bug in cache components.
    for (const { paramName, paramType } of fallbackRouteParams){
        keys.set(paramName, [
            `%%drp:${paramName}:${uniqueID}%%`,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicParamTypes"][paramType]
        ]);
    }
    return keys;
}
function getFallbackRouteParams(page, routeModule) {
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppRoute"])(page, true);
    // Extract the pathname-contributing segments from the loader tree. This
    // mirrors the logic in buildAppStaticPaths where we determine which segments
    // actually contribute to the pathname.
    const { pathnameRouteParamSegments, params } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractPathnameRouteParamSegmentsFromLoaderTree"])(routeModule.userland.loaderTree, route);
    // Create fallback route params for the pathname segments.
    const fallbackRouteParams = pathnameRouteParamSegments.map(({ paramName, paramType })=>({
            paramName,
            paramType
        }));
    // Resolve route params from the loader tree. This mutates the
    // fallbackRouteParams array to add any route params that are
    // unknown at request time.
    //
    // The page parameter contains placeholders like [slug], which helps
    // resolveRouteParamsFromTree determine which params are unknown.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRouteParamsFromTree"])(routeModule.userland.loaderTree, params, route, fallbackRouteParams // Will be mutated to add route params
    );
    // Convert the fallback route params to an opaque format that can be safely
    // used in the postponed state without exposing implementation details.
    return createOpaqueFallbackRouteParams(fallbackRouteParams);
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientReferenceManifest",
    ()=>getClientReferenceManifest,
    "getServerActionsManifest",
    ()=>getServerActionsManifest,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding,
    "setManifestsSingleton",
    ()=>setManifestsSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
;
;
// This is a global singleton that is, among other things, also used to
// encode/decode bound args of server function closures. This can't be using a
// AsyncLocalStorage as it might happen at the module level.
const MANIFESTS_SINGLETON = Symbol.for('next.server.manifests');
const globalThisWithManifests = globalThis;
function createProxiedClientReferenceManifest(clientReferenceManifestsPerRoute) {
    const createMappingProxy = (prop)=>{
        return new Proxy({}, {
            get (_, id) {
                const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
                if (workStore) {
                    const currentManifest = clientReferenceManifestsPerRoute.get(workStore.route);
                    if (currentManifest == null ? void 0 : currentManifest[prop][id]) {
                        return currentManifest[prop][id];
                    }
                    // In development, we also check all other manifests to see if the
                    // module exists there. This is to support a scenario where React's
                    // I/O tracking (dev-only) creates a connection from one page to
                    // another through an emitted async I/O node that references client
                    // components from the other page, e.g. in owner props.
                    // TODO: Maybe we need to add a `debugBundlerConfig` option to React
                    // to avoid this workaround. The current workaround has the
                    // disadvantage that one might accidentally or intentionally share
                    // client references across pages (e.g. by storing them in a global
                    // variable), which would then only be caught in production.
                    if ("TURBOPACK compile-time truthy", 1) {
                        for (const [route, manifest] of clientReferenceManifestsPerRoute){
                            if (route === workStore.route) {
                                continue;
                            }
                            const entry = manifest[prop][id];
                            if (entry !== undefined) {
                                return entry;
                            }
                        }
                    }
                } else {
                    // If there's no work store defined, we can assume that a client
                    // reference manifest is needed during module evaluation, e.g. to
                    // create a server function using a higher-order function. This
                    // might also use client components which need to be serialized by
                    // Flight, and therefore client references need to be resolvable. In
                    // that case we search all page manifests to find the module.
                    for (const manifest of clientReferenceManifestsPerRoute.values()){
                        const entry = manifest[prop][id];
                        if (entry !== undefined) {
                            return entry;
                        }
                    }
                }
                return undefined;
            }
        });
    };
    const mappingProxies = new Map();
    return new Proxy({}, {
        get (_, prop) {
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            switch(prop){
                case 'moduleLoading':
                case 'entryCSSFiles':
                case 'entryJSFiles':
                    {
                        if (!workStore) {
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Cannot access "${prop}" without a work store.`), "__NEXT_ERROR_CODE", {
                                value: "E952",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        const currentManifest = clientReferenceManifestsPerRoute.get(workStore.route);
                        if (!currentManifest) {
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`The client reference manifest for route "${workStore.route}" does not exist.`), "__NEXT_ERROR_CODE", {
                                value: "E951",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        return currentManifest[prop];
                    }
                case 'clientModules':
                case 'rscModuleMapping':
                case 'edgeRscModuleMapping':
                case 'ssrModuleMapping':
                case 'edgeSSRModuleMapping':
                    {
                        let proxy = mappingProxies.get(prop);
                        if (!proxy) {
                            proxy = createMappingProxy(prop);
                            mappingProxies.set(prop, proxy);
                        }
                        return proxy;
                    }
                default:
                    {
                        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`This is a proxied client reference manifest. The property "${String(prop)}" is not handled.`), "__NEXT_ERROR_CODE", {
                            value: "E953",
                            enumerable: false,
                            configurable: true
                        });
                    }
            }
        }
    });
}
/**
 * This function creates a Flight-acceptable server module map proxy from our
 * Server Reference Manifest similar to our client module map. This is because
 * our manifest contains a lot of internal Next.js data that are relevant to the
 * runtime, workers, etc. that React doesn't need to know.
 */ function createServerModuleMap() {
    return new Proxy({}, {
        get: (_, id)=>{
            var _getServerActionsManifest__id, _getServerActionsManifest_;
            const workers = (_getServerActionsManifest_ = getServerActionsManifest()[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node']) == null ? void 0 : (_getServerActionsManifest__id = _getServerActionsManifest_[id]) == null ? void 0 : _getServerActionsManifest__id.workers;
            if (!workers) {
                return undefined;
            }
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            let workerEntry;
            if (workStore) {
                workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
                // If there's no work store defined, we can assume that a server
                // module map is needed during module evaluation, e.g. to create a
                // server action using a higher-order function. Therefore it should be
                // safe to return any entry from the manifest that matches the action
                // ID. They all refer to the same module ID, which must also exist in
                // the current page bundle. TODO: This is currently not guaranteed in
                // Turbopack, and needs to be fixed.
                workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
                return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
                id: moduleId,
                name: id,
                chunks: [],
                async
            };
        }
    });
}
/**
 * The flight entry loader keys actions by bundlePath. bundlePath corresponds
 * with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, 'app')) {
        return pageName;
    }
    return 'app' + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page
 * name.
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(bundlePath, 'app'));
}
function selectWorkerForForwarding(actionId, pageName) {
    var _serverActionsManifest__actionId;
    const serverActionsManifest = getServerActionsManifest();
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node'][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    // There are no workers to handle this action, nothing to forward to.
    if (!workers) {
        return;
    }
    // If there is an entry for the current page, we don't need to forward.
    if (workers[normalizeWorkerPageName(pageName)]) {
        return;
    }
    // Otherwise, grab the first worker that has a handler for this action id.
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
function setManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest }) {
    const existingSingleton = globalThisWithManifests[MANIFESTS_SINGLETON];
    if (existingSingleton) {
        existingSingleton.clientReferenceManifestsPerRoute.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page), clientReferenceManifest);
        existingSingleton.serverActionsManifest = serverActionsManifest;
    } else {
        const clientReferenceManifestsPerRoute = new Map([
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page),
                clientReferenceManifest
            ]
        ]);
        const proxiedClientReferenceManifest = createProxiedClientReferenceManifest(clientReferenceManifestsPerRoute);
        globalThisWithManifests[MANIFESTS_SINGLETON] = {
            clientReferenceManifestsPerRoute,
            proxiedClientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: createServerModuleMap()
        };
    }
}
function getManifestsSingleton() {
    const manifestSingleton = globalThisWithManifests[MANIFESTS_SINGLETON];
    if (!manifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('The manifests singleton was not initialized.'), "__NEXT_ERROR_CODE", {
            value: "E950",
            enumerable: false,
            configurable: true
        });
    }
    return manifestSingleton;
}
function getClientReferenceManifest() {
    return getManifestsSingleton().proxiedClientReferenceManifest;
}
function getServerActionsManifest() {
    return getManifestsSingleton().serverActionsManifest;
}
function getServerModuleMap() {
    return getManifestsSingleton().serverModuleMap;
} //# sourceMappingURL=manifests-singleton.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    // We don't actually support URL encoded actions, and the action handler will bail out if it sees one.
    // But we still want it to flow through to the action handler, to prevent changes in behavior when a regular
    // page component tries to handle a POST.
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const warnings = new Set();
    warnOnce = (msg)=>{
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
} //# sourceMappingURL=warn-once.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/deployment-id.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This could also be a variable instead of a function, but some unit tests want to change the ID at
// runtime. Even though that would never happen in a real deployment.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getDeploymentId: null,
    getDeploymentIdQueryOrEmptyString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getDeploymentId: function() {
        return getDeploymentId;
    },
    getDeploymentIdQueryOrEmptyString: function() {
        return getDeploymentIdQueryOrEmptyString;
    }
});
function getDeploymentId() {
    return "TURBOPACK compile-time value", false;
}
function getDeploymentIdQueryOrEmptyString() {
    let deploymentId = getDeploymentId();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
} //# sourceMappingURL=deployment-id.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-blur-svg.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-config.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/get-img-props.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-rsc] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/deployment-id.js [app-rsc] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-blur-svg.js [app-rsc] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-config.js [app-rsc] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        const deploymentId = (0, _deploymentid.getDeploymentId)();
        if (src.startsWith('/') && !src.startsWith('//') && deploymentId) {
            const sep = src.includes('?') ? '&' : '?';
            src = `${src}${sep}dpl=${deploymentId}`;
        }
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js <module evaluation>"));
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js"));
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/find-closest-quality.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/picomatch/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof process !== "undefined" && process.platform) {
                    return process.platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/match-local-pattern.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/picomatch/index.js [app-rsc] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/compiled/picomatch/index.js [app-rsc] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-loader.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/find-closest-quality.js [app-rsc] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/deployment-id.js [app-rsc] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/match-local-pattern.js [app-rsc] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-rsc] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    let deploymentId = (0, _deploymentid.getDeploymentId)();
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/') && deploymentId ? `&dpl=${deploymentId}` : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-external.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-rsc] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/get-img-props.js [app-rsc] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-loader.js [app-rsc] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/image.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/shared/lib/image-external.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
// packages/react/compose-refs/src/compose-refs.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
// src/slot.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
;
;
;
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[" use ".trim().toString()];
function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Children.only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
/**
 * Concatenates two arrays faster than the array spread operator.
 */ const concatArrays = (array1, array2)=>{
    // Pre-allocate for better V8 optimization
    const combinedArray = new Array(array1.length + array2.length);
    for(let i = 0; i < array1.length; i++){
        combinedArray[i] = array1[i];
    }
    for(let i = 0; i < array2.length; i++){
        combinedArray[array1.length + i] = array2[i];
    }
    return combinedArray;
};
// Factory function ensures consistent object shapes
const createClassValidatorObject = (classGroupId, validator)=>({
        classGroupId,
        validator
    });
// Factory ensures consistent ClassPartObject shape
const createClassPartObject = (nextPart = new Map(), validators = null, classGroupId)=>({
        nextPart,
        validators,
        classGroupId
    });
const CLASS_PART_SEPARATOR = '-';
const EMPTY_CONFLICTS = [];
// I use two dots here because one dot is used as prefix for class groups in plugins
const ARBITRARY_PROPERTY_PREFIX = 'arbitrary..';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        if (className.startsWith('[') && className.endsWith(']')) {
            return getGroupIdForArbitraryProperty(className);
        }
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and skip it.
        const startIndex = classParts[0] === '' && classParts.length > 1 ? 1 : 0;
        return getGroupRecursive(classParts, startIndex, classMap);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        if (hasPostfixModifier) {
            const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
            const baseConflicts = conflictingClassGroups[classGroupId];
            if (modifierConflicts) {
                if (baseConflicts) {
                    // Merge base conflicts with modifier conflicts
                    return concatArrays(baseConflicts, modifierConflicts);
                }
                // Only modifier conflicts
                return modifierConflicts;
            }
            // Fall back to without postfix if no modifier conflicts
            return baseConflicts || EMPTY_CONFLICTS;
        }
        return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, startIndex, classPartObject)=>{
    const classPathsLength = classParts.length - startIndex;
    if (classPathsLength === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[startIndex];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    if (nextClassPartObject) {
        const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
        if (result) return result;
    }
    const validators = classPartObject.validators;
    if (validators === null) {
        return undefined;
    }
    // Build classRest string efficiently by joining from startIndex onwards
    const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
    const validatorsLength = validators.length;
    for(let i = 0; i < validatorsLength; i++){
        const validatorObj = validators[i];
        if (validatorObj.validator(classRest)) {
            return validatorObj.classGroupId;
        }
    }
    return undefined;
};
/**
 * Get the class group ID for an arbitrary property.
 *
 * @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
 */ const getGroupIdForArbitraryProperty = (className)=>className.slice(1, -1).indexOf(':') === -1 ? undefined : (()=>{
        const content = className.slice(1, -1);
        const colonIndex = content.indexOf(':');
        const property = content.slice(0, colonIndex);
        return property ? ARBITRARY_PROPERTY_PREFIX + property : undefined;
    })();
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, classGroups } = config;
    return processClassGroups(classGroups, theme);
};
// Split into separate functions to maintain monomorphic call sites
const processClassGroups = (classGroups, theme)=>{
    const classMap = createClassPartObject();
    for(const classGroupId in classGroups){
        const group = classGroups[classGroupId];
        processClassesRecursively(group, classMap, classGroupId, theme);
    }
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    const len = classGroup.length;
    for(let i = 0; i < len; i++){
        const classDefinition = classGroup[i];
        processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
    }
};
// Split into separate functions for each type to maintain monomorphic call sites
const processClassDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (typeof classDefinition === 'string') {
        processStringDefinition(classDefinition, classPartObject, classGroupId);
        return;
    }
    if (typeof classDefinition === 'function') {
        processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
        return;
    }
    processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
const processStringDefinition = (classDefinition, classPartObject, classGroupId)=>{
    const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
    classPartObjectToEdit.classGroupId = classGroupId;
};
const processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
    }
    if (classPartObject.validators === null) {
        classPartObject.validators = [];
    }
    classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
const processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    const entries = Object.entries(classDefinition);
    const len = entries.length;
    for(let i = 0; i < len; i++){
        const [key, value] = entries[i];
        processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
    }
};
const getPart = (classPartObject, path)=>{
    let current = classPartObject;
    const parts = path.split(CLASS_PART_SEPARATOR);
    const len = parts.length;
    for(let i = 0; i < len; i++){
        const part = parts[i];
        let next = current.nextPart.get(part);
        if (!next) {
            next = createClassPartObject();
            current.nextPart.set(part, next);
        }
        current = next;
    }
    return current;
};
// Type guard maintains monomorphic check
const isThemeGetter = (func)=>'isThemeGetter' in func && func.isThemeGetter === true;
// LRU cache implementation using plain objects for simplicity
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = Object.create(null);
    let previousCache = Object.create(null);
    const update = (key, value)=>{
        cache[key] = value;
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = Object.create(null);
        }
    };
    return {
        get (key) {
            let value = cache[key];
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache[key]) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (key in cache) {
                cache[key] = value;
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const MODIFIER_SEPARATOR = ':';
const EMPTY_MODIFIERS = [];
// Pre-allocated result object shape for consistency
const createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal)=>({
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition,
        isExternal
    });
const createParseClassName = (config)=>{
    const { prefix, experimentalParseClassName } = config;
    /**
   * Parse class name into parts.
   *
   * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
   * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
   */ let parseClassName = (className)=>{
        // Use simple array with push for better performance
        const modifiers = [];
        let bracketDepth = 0;
        let parenDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        const len = className.length;
        for(let index = 0; index < len; index++){
            const currentCharacter = className[index];
            if (bracketDepth === 0 && parenDepth === 0) {
                if (currentCharacter === MODIFIER_SEPARATOR) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + 1;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') bracketDepth++;
            else if (currentCharacter === ']') bracketDepth--;
            else if (currentCharacter === '(') parenDepth++;
            else if (currentCharacter === ')') parenDepth--;
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
        // Inline important modifier check
        let baseClassName = baseClassNameWithImportantModifier;
        let hasImportantModifier = false;
        if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
            hasImportantModifier = true;
        } else if (/**
     * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
     * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
     */ baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(1);
            hasImportantModifier = true;
        }
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
    };
    if (prefix) {
        const fullPrefix = prefix + MODIFIER_SEPARATOR;
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, undefined, true);
    }
    if (experimentalParseClassName) {
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>experimentalParseClassName({
                className,
                parseClassName: parseClassNameOriginal
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const createSortModifiers = (config)=>{
    // Pre-compute weights for all known modifiers for O(1) comparison
    const modifierWeights = new Map();
    // Assign weights to sensitive modifiers (highest priority, but preserve order)
    config.orderSensitiveModifiers.forEach((mod, index)=>{
        modifierWeights.set(mod, 1000000 + index); // High weights for sensitive mods
    });
    return (modifiers)=>{
        const result = [];
        let currentSegment = [];
        // Process modifiers in one pass
        for(let i = 0; i < modifiers.length; i++){
            const modifier = modifiers[i];
            // Check if modifier is sensitive (starts with '[' or in orderSensitiveModifiers)
            const isArbitrary = modifier[0] === '[';
            const isOrderSensitive = modifierWeights.has(modifier);
            if (isArbitrary || isOrderSensitive) {
                // Sort and flush current segment alphabetically
                if (currentSegment.length > 0) {
                    currentSegment.sort();
                    result.push(...currentSegment);
                    currentSegment = [];
                }
                result.push(modifier);
            } else {
                // Regular modifier - add to current segment for batch sorting
                currentSegment.push(modifier);
            }
        }
        // Sort and add any remaining segment items
        if (currentSegment.length > 0) {
            currentSegment.sort();
            result.push(...currentSegment);
        }
        return result;
    };
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        sortModifiers: createSortModifiers(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        if (isExternal) {
            result = originalClassName + (result.length > 0 ? ' ' + result : result);
            continue;
        }
        let hasPostfixModifier = !!maybePostfixModifierPosition;
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        // Fast path: skip sorting for empty or single modifier
        const variantModifier = modifiers.length === 0 ? '' : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.indexOf(classId) > -1) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ const twJoin = (...classLists)=>{
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < classLists.length){
        if (argument = classLists[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
const toValue = (mix)=>{
    // Fast path for strings
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
const createTailwindMerge = (createConfigFirst, ...createConfigRest)=>{
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall;
    const initTailwindMerge = (classList)=>{
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    };
    const tailwindMerge = (classList)=>{
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    };
    functionToCall = initTailwindMerge;
    return (...args)=>functionToCall(twJoin(...args));
};
const fallbackThemeArr = [];
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || fallbackThemeArr;
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+\/\d+$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value)=>fractionRegex.test(value);
const isNumber = (value)=>!!value && !Number.isNaN(Number(value));
const isInteger = (value)=>!!value && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const isAny = ()=>true;
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const isAnyNonArbitrary = (value)=>!isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = (value)=>arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value)=>getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value)=>getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value)=>getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value)=>getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value)=>getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value)=>getIsArbitraryVariable(value, isLabelShadow, true);
// Helpers
const getIsArbitraryValue = (value, testLabel, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false)=>{
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return shouldMatchNoLabel;
    }
    return false;
};
// Labels
const isLabelPosition = (label)=>label === 'position' || label === 'percentage';
const isLabelImage = (label)=>label === 'image' || label === 'url';
const isLabelSize = (label)=>label === 'length' || label === 'size' || label === 'bg-size';
const isLabelLength = (label)=>label === 'length';
const isLabelNumber = (label)=>label === 'number';
const isLabelFamilyName = (label)=>label === 'family-name';
const isLabelShadow = (label)=>label === 'shadow';
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isAnyNonArbitrary,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isArbitraryVariable,
    isArbitraryVariableFamilyName,
    isArbitraryVariableImage,
    isArbitraryVariableLength,
    isArbitraryVariablePosition,
    isArbitraryVariableShadow,
    isArbitraryVariableSize,
    isFraction,
    isInteger,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    /**
   * Theme getters for theme variable namespaces
   * @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
   */ /***/ const themeColor = fromTheme('color');
    const themeFont = fromTheme('font');
    const themeText = fromTheme('text');
    const themeFontWeight = fromTheme('font-weight');
    const themeTracking = fromTheme('tracking');
    const themeLeading = fromTheme('leading');
    const themeBreakpoint = fromTheme('breakpoint');
    const themeContainer = fromTheme('container');
    const themeSpacing = fromTheme('spacing');
    const themeRadius = fromTheme('radius');
    const themeShadow = fromTheme('shadow');
    const themeInsetShadow = fromTheme('inset-shadow');
    const themeTextShadow = fromTheme('text-shadow');
    const themeDropShadow = fromTheme('drop-shadow');
    const themeBlur = fromTheme('blur');
    const themePerspective = fromTheme('perspective');
    const themeAspect = fromTheme('aspect');
    const themeEase = fromTheme('ease');
    const themeAnimate = fromTheme('animate');
    /**
   * Helpers to avoid repeating the same scales
   *
   * We use functions that create a new array every time they're called instead of static arrays.
   * This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
   */ /***/ const scaleBreak = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const scalePosition = ()=>[
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'top-left',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'left-top',
            'top-right',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'right-top',
            'bottom-right',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'right-bottom',
            'bottom-left',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'left-bottom'
        ];
    const scalePositionWithArbitrary = ()=>[
            ...scalePosition(),
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const scaleOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const scaleUnambiguousSpacing = ()=>[
            isArbitraryVariable,
            isArbitraryValue,
            themeSpacing
        ];
    const scaleInset = ()=>[
            isFraction,
            'full',
            'auto',
            ...scaleUnambiguousSpacing()
        ];
    const scaleGridTemplateColsRows = ()=>[
            isInteger,
            'none',
            'subgrid',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartAndEnd = ()=>[
            'auto',
            {
                span: [
                    'full',
                    isInteger,
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            },
            isInteger,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartOrEnd = ()=>[
            isInteger,
            'auto',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridAutoColsRows = ()=>[
            'auto',
            'min',
            'max',
            'fr',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleAlignPrimaryAxis = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch',
            'baseline',
            'center-safe',
            'end-safe'
        ];
    const scaleAlignSecondaryAxis = ()=>[
            'start',
            'end',
            'center',
            'stretch',
            'center-safe',
            'end-safe'
        ];
    const scaleMargin = ()=>[
            'auto',
            ...scaleUnambiguousSpacing()
        ];
    const scaleSizing = ()=>[
            isFraction,
            'auto',
            'full',
            'dvw',
            'dvh',
            'lvw',
            'lvh',
            'svw',
            'svh',
            'min',
            'max',
            'fit',
            ...scaleUnambiguousSpacing()
        ];
    const scaleColor = ()=>[
            themeColor,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBgPosition = ()=>[
            ...scalePosition(),
            isArbitraryVariablePosition,
            isArbitraryPosition,
            {
                position: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleBgRepeat = ()=>[
            'no-repeat',
            {
                repeat: [
                    '',
                    'x',
                    'y',
                    'space',
                    'round'
                ]
            }
        ];
    const scaleBgSize = ()=>[
            'auto',
            'cover',
            'contain',
            isArbitraryVariableSize,
            isArbitrarySize,
            {
                size: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleGradientStopPosition = ()=>[
            isPercent,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleRadius = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            '',
            'none',
            'full',
            themeRadius,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBorderWidth = ()=>[
            '',
            isNumber,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleLineStyle = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double'
        ];
    const scaleBlendMode = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const scaleMaskImagePosition = ()=>[
            isNumber,
            isPercent,
            isArbitraryVariablePosition,
            isArbitraryPosition
        ];
    const scaleBlur = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            '',
            'none',
            themeBlur,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleRotate = ()=>[
            'none',
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleScale = ()=>[
            'none',
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleSkew = ()=>[
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleTranslate = ()=>[
            isFraction,
            'full',
            ...scaleUnambiguousSpacing()
        ];
    return {
        cacheSize: 500,
        theme: {
            animate: [
                'spin',
                'ping',
                'pulse',
                'bounce'
            ],
            aspect: [
                'video'
            ],
            blur: [
                isTshirtSize
            ],
            breakpoint: [
                isTshirtSize
            ],
            color: [
                isAny
            ],
            container: [
                isTshirtSize
            ],
            'drop-shadow': [
                isTshirtSize
            ],
            ease: [
                'in',
                'out',
                'in-out'
            ],
            font: [
                isAnyNonArbitrary
            ],
            'font-weight': [
                'thin',
                'extralight',
                'light',
                'normal',
                'medium',
                'semibold',
                'bold',
                'extrabold',
                'black'
            ],
            'inset-shadow': [
                isTshirtSize
            ],
            leading: [
                'none',
                'tight',
                'snug',
                'normal',
                'relaxed',
                'loose'
            ],
            perspective: [
                'dramatic',
                'near',
                'normal',
                'midrange',
                'distant',
                'none'
            ],
            radius: [
                isTshirtSize
            ],
            shadow: [
                isTshirtSize
            ],
            spacing: [
                'px',
                isNumber
            ],
            text: [
                isTshirtSize
            ],
            'text-shadow': [
                isTshirtSize
            ],
            tracking: [
                'tighter',
                'tight',
                'normal',
                'wide',
                'wider',
                'widest'
            ]
        },
        classGroups: {
            // --------------
            // --- Layout ---
            // --------------
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        isFraction,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeAspect
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isNumber,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeContainer
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': scaleBreak()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': scaleBreak()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: scalePositionWithArbitrary()
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: scaleOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': scaleOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': scaleOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': scaleOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: scaleInset()
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': scaleInset()
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': scaleInset()
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: scaleInset()
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: scaleInset()
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: scaleInset()
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: scaleInset()
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: scaleInset()
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: scaleInset()
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        isInteger,
                        'auto',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------------
            // --- Flexbox and Grid ---
            // ------------------------
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: [
                        isFraction,
                        'full',
                        'auto',
                        themeContainer,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'nowrap',
                        'wrap',
                        'wrap-reverse'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        isNumber,
                        isFraction,
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        isInteger,
                        'first',
                        'last',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': scaleGridAutoColsRows()
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': scaleGridAutoColsRows()
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        ...scaleAlignPrimaryAxis(),
                        'normal'
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        ...scaleAlignSecondaryAxis(),
                        'normal'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...scaleAlignPrimaryAxis()
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                '',
                                'last'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                '',
                                'last'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': scaleAlignPrimaryAxis()
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        ...scaleAlignSecondaryAxis(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: scaleMargin()
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: scaleMargin()
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: scaleMargin()
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: scaleMargin()
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: scaleMargin()
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: scaleMargin()
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: scaleMargin()
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: scaleMargin()
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: scaleMargin()
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-x': [
                {
                    'space-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-y': [
                {
                    'space-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // --------------
            // --- Sizing ---
            // --------------
            /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */ size: [
                {
                    size: scaleSizing()
                }
            ],
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        themeContainer,
                        'screen',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        themeContainer,
                        'screen',
                        /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ 'none',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        themeContainer,
                        'screen',
                        'none',
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ 'prose',
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ {
                            screen: [
                                themeBreakpoint
                            ]
                        },
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        'screen',
                        'lh',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        'screen',
                        'lh',
                        'none',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        'screen',
                        'lh',
                        ...scaleSizing()
                    ]
                }
            ],
            // ------------------
            // --- Typography ---
            // ------------------
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        themeText,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        themeFontWeight,
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */ 'font-stretch': [
                {
                    'font-stretch': [
                        'ultra-condensed',
                        'extra-condensed',
                        'condensed',
                        'semi-condensed',
                        'normal',
                        'semi-expanded',
                        'expanded',
                        'extra-expanded',
                        'ultra-expanded',
                        isPercent,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isArbitraryVariableFamilyName,
                        isArbitraryValue,
                        themeFont
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        themeTracking,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        isNumber,
                        'none',
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ themeLeading,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'disc',
                        'decimal',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: scaleColor()
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: scaleColor()
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...scaleLineStyle(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        isNumber,
                        'from-font',
                        'auto',
                        isArbitraryVariable,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: scaleColor()
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        isNumber,
                        'auto',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */ wrap: [
                {
                    wrap: [
                        'break-word',
                        'anywhere',
                        'normal'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -------------------
            // --- Backgrounds ---
            // -------------------
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: scaleBgPosition()
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: scaleBgRepeat()
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: scaleBgSize()
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            linear: [
                                {
                                    to: [
                                        't',
                                        'tr',
                                        'r',
                                        'br',
                                        'b',
                                        'bl',
                                        'l',
                                        'tl'
                                    ]
                                },
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            radial: [
                                '',
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            conic: [
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryVariableImage,
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: scaleColor()
                }
            ],
            // ---------------
            // --- Borders ---
            // ---------------
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: scaleRadius()
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': scaleRadius()
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': scaleRadius()
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': scaleRadius()
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': scaleRadius()
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': scaleRadius()
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': scaleRadius()
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': scaleRadius()
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': scaleRadius()
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': scaleRadius()
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': scaleRadius()
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': scaleRadius()
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: scaleBorderWidth()
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': scaleBorderWidth()
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-x': [
                {
                    'divide-x': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-y': [
                {
                    'divide-y': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...scaleLineStyle(),
                        'hidden',
                        'none'
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */ 'divide-style': [
                {
                    divide: [
                        ...scaleLineStyle(),
                        'hidden',
                        'none'
                    ]
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: scaleColor()
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': scaleColor()
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': scaleColor()
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': scaleColor()
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': scaleColor()
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': scaleColor()
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': scaleColor()
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': scaleColor()
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': scaleColor()
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: scaleColor()
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        ...scaleLineStyle(),
                        'none',
                        'hidden'
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        '',
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: scaleColor()
                }
            ],
            // ---------------
            // --- Effects ---
            // ---------------
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        // Deprecated since Tailwind CSS v4.0.0
                        '',
                        'none',
                        themeShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */ 'shadow-color': [
                {
                    shadow: scaleColor()
                }
            ],
            /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */ 'inset-shadow': [
                {
                    'inset-shadow': [
                        'none',
                        themeInsetShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */ 'inset-shadow-color': [
                {
                    'inset-shadow': scaleColor()
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */ 'ring-w': [
                {
                    ring: scaleBorderWidth()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */ 'ring-color': [
                {
                    ring: scaleColor()
                }
            ],
            /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isNumber,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-offset-color': [
                {
                    'ring-offset': scaleColor()
                }
            ],
            /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */ 'inset-ring-w': [
                {
                    'inset-ring': scaleBorderWidth()
                }
            ],
            /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */ 'inset-ring-color': [
                {
                    'inset-ring': scaleColor()
                }
            ],
            /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */ 'text-shadow': [
                {
                    'text-shadow': [
                        'none',
                        themeTextShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */ 'text-shadow-color': [
                {
                    'text-shadow': scaleColor()
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...scaleBlendMode(),
                        'plus-darker',
                        'plus-lighter'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': scaleBlendMode()
                }
            ],
            /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */ 'mask-clip': [
                {
                    'mask-clip': [
                        'border',
                        'padding',
                        'content',
                        'fill',
                        'stroke',
                        'view'
                    ]
                },
                'mask-no-clip'
            ],
            /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */ 'mask-composite': [
                {
                    mask: [
                        'add',
                        'subtract',
                        'intersect',
                        'exclude'
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ 'mask-image-linear-pos': [
                {
                    'mask-linear': [
                        isNumber
                    ]
                }
            ],
            'mask-image-linear-from-pos': [
                {
                    'mask-linear-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-linear-to-pos': [
                {
                    'mask-linear-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-linear-from-color': [
                {
                    'mask-linear-from': scaleColor()
                }
            ],
            'mask-image-linear-to-color': [
                {
                    'mask-linear-to': scaleColor()
                }
            ],
            'mask-image-t-from-pos': [
                {
                    'mask-t-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-t-to-pos': [
                {
                    'mask-t-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-t-from-color': [
                {
                    'mask-t-from': scaleColor()
                }
            ],
            'mask-image-t-to-color': [
                {
                    'mask-t-to': scaleColor()
                }
            ],
            'mask-image-r-from-pos': [
                {
                    'mask-r-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-r-to-pos': [
                {
                    'mask-r-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-r-from-color': [
                {
                    'mask-r-from': scaleColor()
                }
            ],
            'mask-image-r-to-color': [
                {
                    'mask-r-to': scaleColor()
                }
            ],
            'mask-image-b-from-pos': [
                {
                    'mask-b-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-b-to-pos': [
                {
                    'mask-b-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-b-from-color': [
                {
                    'mask-b-from': scaleColor()
                }
            ],
            'mask-image-b-to-color': [
                {
                    'mask-b-to': scaleColor()
                }
            ],
            'mask-image-l-from-pos': [
                {
                    'mask-l-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-l-to-pos': [
                {
                    'mask-l-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-l-from-color': [
                {
                    'mask-l-from': scaleColor()
                }
            ],
            'mask-image-l-to-color': [
                {
                    'mask-l-to': scaleColor()
                }
            ],
            'mask-image-x-from-pos': [
                {
                    'mask-x-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-x-to-pos': [
                {
                    'mask-x-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-x-from-color': [
                {
                    'mask-x-from': scaleColor()
                }
            ],
            'mask-image-x-to-color': [
                {
                    'mask-x-to': scaleColor()
                }
            ],
            'mask-image-y-from-pos': [
                {
                    'mask-y-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-y-to-pos': [
                {
                    'mask-y-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-y-from-color': [
                {
                    'mask-y-from': scaleColor()
                }
            ],
            'mask-image-y-to-color': [
                {
                    'mask-y-to': scaleColor()
                }
            ],
            'mask-image-radial': [
                {
                    'mask-radial': [
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            'mask-image-radial-from-pos': [
                {
                    'mask-radial-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-radial-to-pos': [
                {
                    'mask-radial-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-radial-from-color': [
                {
                    'mask-radial-from': scaleColor()
                }
            ],
            'mask-image-radial-to-color': [
                {
                    'mask-radial-to': scaleColor()
                }
            ],
            'mask-image-radial-shape': [
                {
                    'mask-radial': [
                        'circle',
                        'ellipse'
                    ]
                }
            ],
            'mask-image-radial-size': [
                {
                    'mask-radial': [
                        {
                            closest: [
                                'side',
                                'corner'
                            ],
                            farthest: [
                                'side',
                                'corner'
                            ]
                        }
                    ]
                }
            ],
            'mask-image-radial-pos': [
                {
                    'mask-radial-at': scalePosition()
                }
            ],
            'mask-image-conic-pos': [
                {
                    'mask-conic': [
                        isNumber
                    ]
                }
            ],
            'mask-image-conic-from-pos': [
                {
                    'mask-conic-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-conic-to-pos': [
                {
                    'mask-conic-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-conic-from-color': [
                {
                    'mask-conic-from': scaleColor()
                }
            ],
            'mask-image-conic-to-color': [
                {
                    'mask-conic-to': scaleColor()
                }
            ],
            /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */ 'mask-mode': [
                {
                    mask: [
                        'alpha',
                        'luminance',
                        'match'
                    ]
                }
            ],
            /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */ 'mask-origin': [
                {
                    'mask-origin': [
                        'border',
                        'padding',
                        'content',
                        'fill',
                        'stroke',
                        'view'
                    ]
                }
            ],
            /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */ 'mask-position': [
                {
                    mask: scaleBgPosition()
                }
            ],
            /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */ 'mask-repeat': [
                {
                    mask: scaleBgRepeat()
                }
            ],
            /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */ 'mask-size': [
                {
                    mask: scaleBgSize()
                }
            ],
            /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */ 'mask-type': [
                {
                    'mask-type': [
                        'alpha',
                        'luminance'
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ 'mask-image': [
                {
                    mask: [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ---------------
            // --- Filters ---
            // ---------------
            /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        // Deprecated since Tailwind CSS v3.0.0
                        '',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: scaleBlur()
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        // Deprecated since Tailwind CSS v4.0.0
                        '',
                        'none',
                        themeDropShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */ 'drop-shadow-color': [
                {
                    'drop-shadow': scaleColor()
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        // Deprecated since Tailwind CSS v3.0.0
                        '',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': scaleBlur()
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // --------------
            // --- Tables ---
            // --------------
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // ---------------------------------
            // --- Transitions and Animation ---
            // ---------------------------------
            /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        '',
                        'all',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */ 'transition-behavior': [
                {
                    transition: [
                        'normal',
                        'discrete'
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: [
                        isNumber,
                        'initial',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'initial',
                        themeEase,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        themeAnimate,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------
            // --- Transforms ---
            // ------------------
            /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */ backface: [
                {
                    backface: [
                        'hidden',
                        'visible'
                    ]
                }
            ],
            /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */ perspective: [
                {
                    perspective: [
                        themePerspective,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */ 'perspective-origin': [
                {
                    'perspective-origin': scalePositionWithArbitrary()
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: scaleRotate()
                }
            ],
            /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-x': [
                {
                    'rotate-x': scaleRotate()
                }
            ],
            /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-y': [
                {
                    'rotate-y': scaleRotate()
                }
            ],
            /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-z': [
                {
                    'rotate-z': scaleRotate()
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: scaleScale()
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': scaleScale()
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': scaleScale()
                }
            ],
            /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-z': [
                {
                    'scale-z': scaleScale()
                }
            ],
            /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-3d': [
                'scale-3d'
            ],
            /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */ skew: [
                {
                    skew: scaleSkew()
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': scaleSkew()
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': scaleSkew()
                }
            ],
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        isArbitraryVariable,
                        isArbitraryValue,
                        '',
                        'none',
                        'gpu',
                        'cpu'
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: scalePositionWithArbitrary()
                }
            ],
            /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */ 'transform-style': [
                {
                    transform: [
                        '3d',
                        'flat'
                    ]
                }
            ],
            /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */ translate: [
                {
                    translate: scaleTranslate()
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': scaleTranslate()
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': scaleTranslate()
                }
            ],
            /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-z': [
                {
                    'translate-z': scaleTranslate()
                }
            ],
            /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-none': [
                'translate-none'
            ],
            // ---------------------
            // --- Interactivity ---
            // ---------------------
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: scaleColor()
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: scaleColor()
                }
            ],
            /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */ 'color-scheme': [
                {
                    scheme: [
                        'normal',
                        'dark',
                        'light',
                        'light-dark',
                        'only-dark',
                        'only-light'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */ 'field-sizing': [
                {
                    'field-sizing': [
                        'fixed',
                        'content'
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'auto',
                        'none'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        '',
                        'y',
                        'x'
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -----------
            // --- SVG ---
            // -----------
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        'none',
                        ...scaleColor()
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        'none',
                        ...scaleColor()
                    ]
                }
            ],
            // ---------------------
            // --- Accessibility ---
            // ---------------------
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-x',
                'border-w-y',
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-x',
                'border-color-y',
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            translate: [
                'translate-x',
                'translate-y',
                'translate-none'
            ],
            'translate-none': [
                'translate',
                'translate-x',
                'translate-y',
                'translate-z'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        },
        orderSensitiveModifiers: [
            '*',
            '**',
            'after',
            'backdrop',
            'before',
            'details-content',
            'file',
            'first-letter',
            'first-line',
            'marker',
            'placeholder',
            'selection'
        ]
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    overrideConfigProperties(baseConfig.theme, override.theme);
    overrideConfigProperties(baseConfig.classGroups, override.classGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
    overrideProperty(baseConfig, 'orderSensitiveModifiers', override.orderSensitiveModifiers);
    mergeConfigProperties(baseConfig.theme, extend.theme);
    mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
    mergeArrayProperties(baseConfig, extend, 'orderSensitiveModifiers');
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            mergeArrayProperties(baseObject, mergeObject, key);
        }
    }
};
const mergeArrayProperties = (baseObject, mergeObject, key)=>{
    const mergeValue = mergeObject[key];
    if (mergeValue !== undefined) {
        baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/move-up-right.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MoveUpRight
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13 5H19V11",
            key: "1n1gyv"
        }
    ],
    [
        "path",
        {
            d: "M19 5L5 19",
            key: "72u4yj"
        }
    ]
];
const MoveUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("move-up-right", __iconNode);
;
 //# sourceMappingURL=move-up-right.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/move-up-right.js [app-rsc] (ecmascript) <export default as MoveUpRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveUpRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/move-up-right.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/pickaxe.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pickaxe
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999",
            key: "1lw9ds"
        }
    ],
    [
        "path",
        {
            d: "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024",
            key: "ffj4ej"
        }
    ],
    [
        "path",
        {
            d: "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069",
            key: "8tj4zw"
        }
    ],
    [
        "path",
        {
            d: "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z",
            key: "hh6h97"
        }
    ]
];
const Pickaxe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("pickaxe", __iconNode);
;
 //# sourceMappingURL=pickaxe.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/pickaxe.js [app-rsc] (ecmascript) <export default as Pickaxe>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pickaxe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pickaxe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pickaxe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/pickaxe.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/dot.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Dot
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12.1",
            cy: "12.1",
            r: "1",
            key: "18d7e5"
        }
    ]
];
const Dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("dot", __iconNode);
;
 //# sourceMappingURL=dot.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/dot.js [app-rsc] (ecmascript) <export default as Dot>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/lucide-react/dist/esm/icons/dot.js [app-rsc] (ecmascript)");
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/svg-dotted-map/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMap",
    ()=>r1
]);
var T = new Map;
var x = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            id: "AFG",
            properties: {
                name: "Afghanistan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            61.211,
                            35.65
                        ],
                        [
                            60.528,
                            33.676
                        ],
                        [
                            60.874,
                            29.829
                        ],
                        [
                            66.346,
                            29.888
                        ],
                        [
                            68.927,
                            31.62
                        ],
                        [
                            71.846,
                            36.51
                        ],
                        [
                            75.158,
                            37.133
                        ],
                        [
                            74.98,
                            37.42
                        ],
                        [
                            71.542,
                            37.906
                        ],
                        [
                            67.83,
                            37.145
                        ],
                        [
                            66.519,
                            37.363
                        ],
                        [
                            61.211,
                            35.65
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "AGO",
            properties: {
                name: "Angola"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                23.912,
                                -10.927
                            ],
                            [
                                22.155,
                                -11.085
                            ],
                            [
                                21.728,
                                -7.291
                            ],
                            [
                                17.473,
                                -8.069
                            ],
                            [
                                16.327,
                                -5.877
                            ],
                            [
                                12.322,
                                -6.1
                            ],
                            [
                                13.634,
                                -12.039
                            ],
                            [
                                11.734,
                                -17.302
                            ],
                            [
                                18.263,
                                -17.31
                            ],
                            [
                                23.215,
                                -17.523
                            ],
                            [
                                21.888,
                                -16.08
                            ],
                            [
                                21.934,
                                -12.898
                            ],
                            [
                                23.912,
                                -10.927
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                12.182,
                                -5.79
                            ],
                            [
                                12.996,
                                -4.781
                            ],
                            [
                                11.915,
                                -5.038
                            ],
                            [
                                12.182,
                                -5.79
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ALB",
            properties: {
                name: "Albania"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            21.02,
                            40.843
                        ],
                        [
                            20.523,
                            42.218
                        ],
                        [
                            20.071,
                            42.589
                        ],
                        [
                            19.738,
                            42.688
                        ],
                        [
                            20.15,
                            39.625
                        ],
                        [
                            21.02,
                            40.843
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ARE",
            properties: {
                name: "United Arab Emirates"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            51.58,
                            24.245
                        ],
                        [
                            52.001,
                            23.001
                        ],
                        [
                            55.208,
                            22.708
                        ],
                        [
                            56.397,
                            24.925
                        ],
                        [
                            56.261,
                            25.715
                        ],
                        [
                            56.071,
                            26.055
                        ],
                        [
                            54.008,
                            24.122
                        ],
                        [
                            51.58,
                            24.245
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ARG",
            properties: {
                name: "Argentina"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -62.685,
                            -22.249
                        ],
                        [
                            -66.273,
                            -21.832
                        ],
                        [
                            -67.107,
                            -22.736
                        ],
                        [
                            -68.418,
                            -24.519
                        ],
                        [
                            -68.296,
                            -26.899
                        ],
                        [
                            -70.535,
                            -31.365
                        ],
                        [
                            -69.817,
                            -34.194
                        ],
                        [
                            -71.122,
                            -36.658
                        ],
                        [
                            -72.149,
                            -42.255
                        ],
                        [
                            -71.552,
                            -45.561
                        ],
                        [
                            -73.328,
                            -50.379
                        ],
                        [
                            -68.572,
                            -52.299
                        ],
                        [
                            -69.139,
                            -50.733
                        ],
                        [
                            -65.641,
                            -47.236
                        ],
                        [
                            -64.379,
                            -42.874
                        ],
                        [
                            -62.146,
                            -40.677
                        ],
                        [
                            -56.788,
                            -36.902
                        ],
                        [
                            -58.427,
                            -33.909
                        ],
                        [
                            -57.625,
                            -30.216
                        ],
                        [
                            -53.649,
                            -26.923
                        ],
                        [
                            -54.625,
                            -25.739
                        ],
                        [
                            -56.487,
                            -27.548
                        ],
                        [
                            -57.777,
                            -25.162
                        ],
                        [
                            -62.685,
                            -22.249
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ARM",
            properties: {
                name: "Armenia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            43.583,
                            41.092
                        ],
                        [
                            44.794,
                            39.713
                        ],
                        [
                            46.144,
                            38.741
                        ],
                        [
                            46.506,
                            38.771
                        ],
                        [
                            44.972,
                            41.248
                        ],
                        [
                            43.583,
                            41.092
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ATA",
            properties: {
                name: "Antarctica"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -58.614,
                            -64.152
                        ],
                        [
                            -63.001,
                            -64.642
                        ],
                        [
                            -67.741,
                            -67.327
                        ],
                        [
                            -68.936,
                            -73.009
                        ],
                        [
                            -76.222,
                            -73.97
                        ],
                        [
                            -88.424,
                            -73.009
                        ],
                        [
                            -96.337,
                            -73.617
                        ],
                        [
                            -100.646,
                            -75.302
                        ],
                        [
                            -116.216,
                            -74.244
                        ],
                        [
                            -135.215,
                            -74.303
                        ],
                        [
                            -144.322,
                            -75.537
                        ],
                        [
                            -151.334,
                            -77.399
                        ],
                        [
                            -147.221,
                            -80.671
                        ],
                        [
                            -152.862,
                            -82.043
                        ],
                        [
                            -148.533,
                            -85.609
                        ],
                        [
                            -179.942,
                            -84.721
                        ],
                        [
                            180,
                            -84.713
                        ],
                        [
                            159.788,
                            -80.945
                        ],
                        [
                            166.095,
                            -74.381
                        ],
                        [
                            171.207,
                            -71.697
                        ],
                        [
                            154.285,
                            -68.561
                        ],
                        [
                            145.49,
                            -66.915
                        ],
                        [
                            135.874,
                            -66.034
                        ],
                        [
                            120.871,
                            -67.19
                        ],
                        [
                            113.605,
                            -65.877
                        ],
                        [
                            99.718,
                            -67.249
                        ],
                        [
                            87.477,
                            -66.876
                        ],
                        [
                            82.776,
                            -67.209
                        ],
                        [
                            77.645,
                            -69.463
                        ],
                        [
                            67.813,
                            -70.305
                        ],
                        [
                            68.89,
                            -67.934
                        ],
                        [
                            52.614,
                            -66.053
                        ],
                        [
                            40.02,
                            -69.11
                        ],
                        [
                            32.754,
                            -69.384
                        ],
                        [
                            27.094,
                            -70.462
                        ],
                        [
                            19.259,
                            -69.894
                        ],
                        [
                            9.525,
                            -70.011
                        ],
                        [
                            -7.417,
                            -71.697
                        ],
                        [
                            -15.447,
                            -73.147
                        ],
                        [
                            -15.701,
                            -74.499
                        ],
                        [
                            -28.883,
                            -76.674
                        ],
                        [
                            -35.777,
                            -78.339
                        ],
                        [
                            -28.55,
                            -80.338
                        ],
                        [
                            -63.256,
                            -81.749
                        ],
                        [
                            -77.926,
                            -78.378
                        ],
                        [
                            -61.963,
                            -74.44
                        ],
                        [
                            -61.513,
                            -71.089
                        ],
                        [
                            -65.508,
                            -67.582
                        ],
                        [
                            -62.512,
                            -65.093
                        ],
                        [
                            -58.614,
                            -64.152
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ATF",
            properties: {
                name: "French Southern and Antarctic Lands"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            68.935,
                            -48.625
                        ],
                        [
                            68.745,
                            -49.775
                        ],
                        [
                            70.28,
                            -49.71
                        ],
                        [
                            70.525,
                            -49.065
                        ],
                        [
                            68.935,
                            -48.625
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "AUS",
            properties: {
                name: "Australia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            143.562,
                            -13.764
                        ],
                        [
                            139.261,
                            -17.372
                        ],
                        [
                            135.429,
                            -14.715
                        ],
                        [
                            136.952,
                            -12.352
                        ],
                        [
                            133.551,
                            -11.787
                        ],
                        [
                            130.618,
                            -12.536
                        ],
                        [
                            129.41,
                            -14.421
                        ],
                        [
                            125.686,
                            -14.231
                        ],
                        [
                            122.313,
                            -17.255
                        ],
                        [
                            120.856,
                            -19.684
                        ],
                        [
                            114.648,
                            -21.83
                        ],
                        [
                            113.394,
                            -24.385
                        ],
                        [
                            115.802,
                            -32.205
                        ],
                        [
                            115.027,
                            -34.197
                        ],
                        [
                            118.025,
                            -35.065
                        ],
                        [
                            119.894,
                            -33.976
                        ],
                        [
                            123.66,
                            -33.89
                        ],
                        [
                            126.149,
                            -32.216
                        ],
                        [
                            131.326,
                            -31.496
                        ],
                        [
                            134.274,
                            -32.617
                        ],
                        [
                            140.639,
                            -38.019
                        ],
                        [
                            146.318,
                            -39.036
                        ],
                        [
                            150.075,
                            -36.42
                        ],
                        [
                            152.892,
                            -31.64
                        ],
                        [
                            153.569,
                            -28.11
                        ],
                        [
                            152.855,
                            -25.268
                        ],
                        [
                            149.678,
                            -22.343
                        ],
                        [
                            148.848,
                            -20.391
                        ],
                        [
                            146.387,
                            -18.958
                        ],
                        [
                            145.375,
                            -14.985
                        ],
                        [
                            143.562,
                            -13.764
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "AUT",
            properties: {
                name: "Austria"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            16.98,
                            48.123
                        ],
                        [
                            16.96,
                            48.597
                        ],
                        [
                            13.596,
                            48.877
                        ],
                        [
                            9.594,
                            47.525
                        ],
                        [
                            10.443,
                            46.894
                        ],
                        [
                            13.806,
                            46.509
                        ],
                        [
                            16.202,
                            46.852
                        ],
                        [
                            16.98,
                            48.123
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "AZE",
            properties: {
                name: "Azerbaijan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            47.987,
                            41.406
                        ],
                        [
                            46.405,
                            41.861
                        ],
                        [
                            44.972,
                            41.248
                        ],
                        [
                            46.506,
                            38.771
                        ],
                        [
                            48.883,
                            38.32
                        ],
                        [
                            47.987,
                            41.406
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BDI",
            properties: {
                name: "Burundi"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            29.34,
                            -4.5
                        ],
                        [
                            29.754,
                            -4.452
                        ],
                        [
                            30.47,
                            -2.414
                        ],
                        [
                            29.025,
                            -2.839
                        ],
                        [
                            29.34,
                            -4.5
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BEL",
            properties: {
                name: "Belgium"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            4.047,
                            51.267
                        ],
                        [
                            2.514,
                            51.149
                        ],
                        [
                            5.674,
                            49.529
                        ],
                        [
                            6.043,
                            50.128
                        ],
                        [
                            6.157,
                            50.804
                        ],
                        [
                            4.047,
                            51.267
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BEN",
            properties: {
                name: "Benin"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            2.692,
                            6.259
                        ],
                        [
                            3.611,
                            11.66
                        ],
                        [
                            2.154,
                            11.94
                        ],
                        [
                            .9,
                            10.997
                        ],
                        [
                            1.865,
                            6.142
                        ],
                        [
                            2.692,
                            6.259
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BFA",
            properties: {
                name: "Burkina Faso"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -2.827,
                            9.642
                        ],
                        [
                            .024,
                            11.019
                        ],
                        [
                            .9,
                            10.997
                        ],
                        [
                            2.154,
                            11.94
                        ],
                        [
                            .375,
                            14.929
                        ],
                        [
                            -2.001,
                            14.559
                        ],
                        [
                            -5.221,
                            11.714
                        ],
                        [
                            -5.404,
                            10.371
                        ],
                        [
                            -2.827,
                            9.642
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BGD",
            properties: {
                name: "Bangladesh"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            92.673,
                            22.041
                        ],
                        [
                            91.915,
                            24.13
                        ],
                        [
                            89.921,
                            25.27
                        ],
                        [
                            88.084,
                            24.502
                        ],
                        [
                            89.032,
                            22.056
                        ],
                        [
                            91.417,
                            22.765
                        ],
                        [
                            92.369,
                            20.671
                        ],
                        [
                            92.673,
                            22.041
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BGR",
            properties: {
                name: "Bulgaria"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            22.657,
                            44.235
                        ],
                        [
                            22.381,
                            42.32
                        ],
                        [
                            22.952,
                            41.338
                        ],
                        [
                            26.117,
                            41.827
                        ],
                        [
                            27.997,
                            42.007
                        ],
                        [
                            28.558,
                            43.707
                        ],
                        [
                            22.657,
                            44.235
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BHS",
            properties: {
                name: "The Bahamas"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -77.535,
                            23.76
                        ],
                        [
                            -77.89,
                            25.17
                        ],
                        [
                            -78.408,
                            24.576
                        ],
                        [
                            -77.535,
                            23.76
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BIH",
            properties: {
                name: "Bosnia and Herzegovina"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            19.005,
                            44.86
                        ],
                        [
                            18.56,
                            42.65
                        ],
                        [
                            19.219,
                            43.524
                        ],
                        [
                            19.368,
                            44.863
                        ],
                        [
                            19.005,
                            44.86
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BLR",
            properties: {
                name: "Belarus"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            23.484,
                            53.912
                        ],
                        [
                            23.527,
                            51.578
                        ],
                        [
                            29.255,
                            51.368
                        ],
                        [
                            31.786,
                            52.102
                        ],
                        [
                            31.54,
                            52.742
                        ],
                        [
                            31.305,
                            53.074
                        ],
                        [
                            32.305,
                            53.133
                        ],
                        [
                            30.874,
                            55.551
                        ],
                        [
                            28.177,
                            56.169
                        ],
                        [
                            26.494,
                            55.615
                        ],
                        [
                            23.484,
                            53.912
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BLZ",
            properties: {
                name: "Belize"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -89.143,
                            17.808
                        ],
                        [
                            -88.931,
                            15.887
                        ],
                        [
                            -88.3,
                            18.5
                        ],
                        [
                            -89.143,
                            17.808
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BMU",
            properties: {
                name: "Bermuda"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -64.78,
                            32.307
                        ],
                        [
                            -64.78,
                            32.307
                        ],
                        [
                            -64.78,
                            32.307
                        ],
                        [
                            -64.78,
                            32.307
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BOL",
            properties: {
                name: "Bolivia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -67.107,
                            -22.736
                        ],
                        [
                            -66.273,
                            -21.832
                        ],
                        [
                            -62.685,
                            -22.249
                        ],
                        [
                            -61.786,
                            -19.634
                        ],
                        [
                            -58.166,
                            -20.177
                        ],
                        [
                            -58.241,
                            -16.3
                        ],
                        [
                            -60.158,
                            -16.258
                        ],
                        [
                            -60.503,
                            -13.776
                        ],
                        [
                            -65.402,
                            -11.566
                        ],
                        [
                            -65.338,
                            -9.762
                        ],
                        [
                            -69.53,
                            -10.952
                        ],
                        [
                            -68.665,
                            -12.561
                        ],
                        [
                            -69.59,
                            -17.58
                        ],
                        [
                            -67.107,
                            -22.736
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BRA",
            properties: {
                name: "Brazil"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -57.625,
                            -30.216
                        ],
                        [
                            -53.788,
                            -32.047
                        ],
                        [
                            -53.374,
                            -33.768
                        ],
                        [
                            -48.888,
                            -28.674
                        ],
                        [
                            -48.495,
                            -25.877
                        ],
                        [
                            -46.472,
                            -24.089
                        ],
                        [
                            -41.988,
                            -22.97
                        ],
                        [
                            -39.761,
                            -19.599
                        ],
                        [
                            -38.953,
                            -13.793
                        ],
                        [
                            -35.128,
                            -8.996
                        ],
                        [
                            -35.235,
                            -5.465
                        ],
                        [
                            -39.979,
                            -2.873
                        ],
                        [
                            -41.473,
                            -2.912
                        ],
                        [
                            -48.621,
                            -.235
                        ],
                        [
                            -51.658,
                            4.156
                        ],
                        [
                            -52.94,
                            2.125
                        ],
                        [
                            -54.525,
                            2.312
                        ],
                        [
                            -56.539,
                            1.9
                        ],
                        [
                            -59.031,
                            1.318
                        ],
                        [
                            -60.734,
                            5.2
                        ],
                        [
                            -64.368,
                            3.797
                        ],
                        [
                            -64.199,
                            1.493
                        ],
                        [
                            -66.876,
                            1.253
                        ],
                        [
                            -69.817,
                            1.715
                        ],
                        [
                            -69.894,
                            -4.298
                        ],
                        [
                            -72.892,
                            -5.275
                        ],
                        [
                            -73.987,
                            -7.524
                        ],
                        [
                            -72.185,
                            -10.054
                        ],
                        [
                            -69.53,
                            -10.952
                        ],
                        [
                            -65.338,
                            -9.762
                        ],
                        [
                            -65.402,
                            -11.566
                        ],
                        [
                            -60.503,
                            -13.776
                        ],
                        [
                            -60.158,
                            -16.258
                        ],
                        [
                            -58.241,
                            -16.3
                        ],
                        [
                            -58.166,
                            -20.177
                        ],
                        [
                            -57.937,
                            -22.09
                        ],
                        [
                            -55.611,
                            -22.656
                        ],
                        [
                            -54.625,
                            -25.739
                        ],
                        [
                            -53.649,
                            -26.923
                        ],
                        [
                            -57.625,
                            -30.216
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BRN",
            properties: {
                name: "Brunei"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            114.204,
                            4.526
                        ],
                        [
                            115.347,
                            4.317
                        ],
                        [
                            115.451,
                            5.448
                        ],
                        [
                            114.204,
                            4.526
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BTN",
            properties: {
                name: "Bhutan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            91.697,
                            27.772
                        ],
                        [
                            90.016,
                            28.296
                        ],
                        [
                            88.814,
                            27.299
                        ],
                        [
                            91.697,
                            27.772
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "BWA",
            properties: {
                name: "Botswana"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            29.432,
                            -22.091
                        ],
                        [
                            28.021,
                            -21.486
                        ],
                        [
                            25.264,
                            -17.737
                        ],
                        [
                            25.084,
                            -17.662
                        ],
                        [
                            20.911,
                            -18.252
                        ],
                        [
                            20.881,
                            -21.814
                        ],
                        [
                            19.896,
                            -24.768
                        ],
                        [
                            21.606,
                            -26.727
                        ],
                        [
                            23.312,
                            -25.269
                        ],
                        [
                            25.665,
                            -25.487
                        ],
                        [
                            29.432,
                            -22.091
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CAF",
            properties: {
                name: "Central African Republic"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            15.279,
                            7.422
                        ],
                        [
                            14.478,
                            4.733
                        ],
                        [
                            16.013,
                            2.268
                        ],
                        [
                            18.453,
                            3.504
                        ],
                        [
                            19.468,
                            5.032
                        ],
                        [
                            22.405,
                            4.029
                        ],
                        [
                            24.411,
                            5.109
                        ],
                        [
                            27.374,
                            5.234
                        ],
                        [
                            24.567,
                            8.229
                        ],
                        [
                            23.806,
                            8.666
                        ],
                        [
                            22.864,
                            11.142
                        ],
                        [
                            17.965,
                            7.891
                        ],
                        [
                            15.279,
                            7.422
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CAN",
            properties: {
                name: "Canada"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                -56.134,
                                50.687
                            ],
                            [
                                -59.266,
                                47.603
                            ],
                            [
                                -53.069,
                                46.655
                            ],
                            [
                                -53.477,
                                49.249
                            ],
                            [
                                -56.134,
                                50.687
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                -67.137,
                                45.138
                            ],
                            [
                                -64.472,
                                46.238
                            ],
                            [
                                -65.056,
                                49.233
                            ],
                            [
                                -60.033,
                                50.243
                            ],
                            [
                                -55.683,
                                52.147
                            ],
                            [
                                -59.57,
                                55.204
                            ],
                            [
                                -64.584,
                                60.336
                            ],
                            [
                                -73.84,
                                62.444
                            ],
                            [
                                -78.107,
                                62.32
                            ],
                            [
                                -78.517,
                                58.805
                            ],
                            [
                                -76.541,
                                56.534
                            ],
                            [
                                -81.401,
                                52.158
                            ],
                            [
                                -82.273,
                                55.148
                            ],
                            [
                                -85.012,
                                55.303
                            ],
                            [
                                -90.898,
                                57.285
                            ],
                            [
                                -94.629,
                                60.11
                            ],
                            [
                                -93.157,
                                62.025
                            ],
                            [
                                -81.387,
                                67.111
                            ],
                            [
                                -88.02,
                                68.615
                            ],
                            [
                                -95.209,
                                71.921
                            ],
                            [
                                -98.443,
                                67.782
                            ],
                            [
                                -109.946,
                                67.981
                            ],
                            [
                                -127.447,
                                70.377
                            ],
                            [
                                -136.504,
                                68.898
                            ],
                            [
                                -140.986,
                                69.712
                            ],
                            [
                                -140.998,
                                60.306
                            ],
                            [
                                -138.341,
                                59.562
                            ],
                            [
                                -134.271,
                                58.861
                            ],
                            [
                                -132.73,
                                57.693
                            ],
                            [
                                -130.008,
                                55.916
                            ],
                            [
                                -130.515,
                                54.288
                            ],
                            [
                                -127.436,
                                50.831
                            ],
                            [
                                -122.84,
                                49
                            ],
                            [
                                -95.159,
                                49
                            ],
                            [
                                -88.378,
                                48.303
                            ],
                            [
                                -82.551,
                                45.348
                            ],
                            [
                                -82.439,
                                41.675
                            ],
                            [
                                -76.82,
                                43.629
                            ],
                            [
                                -74.867,
                                45
                            ],
                            [
                                -71.505,
                                45.008
                            ],
                            [
                                -69.237,
                                47.448
                            ],
                            [
                                -67.137,
                                45.138
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                -114.167,
                                73.121
                            ],
                            [
                                -119.402,
                                71.559
                            ],
                            [
                                -113.313,
                                68.536
                            ],
                            [
                                -105.96,
                                69.18
                            ],
                            [
                                -105.402,
                                72.673
                            ],
                            [
                                -114.167,
                                73.121
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                -86.562,
                                73.157
                            ],
                            [
                                -89.513,
                                70.762
                            ],
                            [
                                -77.287,
                                69.77
                            ],
                            [
                                -72.651,
                                67.285
                            ],
                            [
                                -77.897,
                                65.309
                            ],
                            [
                                -71.023,
                                62.911
                            ],
                            [
                                -66.166,
                                61.931
                            ],
                            [
                                -62.163,
                                66.16
                            ],
                            [
                                -71.2,
                                70.92
                            ],
                            [
                                -82.316,
                                73.751
                            ],
                            [
                                -86.562,
                                73.157
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                -68.5,
                                83.106
                            ],
                            [
                                -91.587,
                                81.894
                            ],
                            [
                                -85.095,
                                79.345
                            ],
                            [
                                -89.491,
                                76.472
                            ],
                            [
                                -80.561,
                                76.178
                            ],
                            [
                                -61.894,
                                82.362
                            ],
                            [
                                -68.5,
                                83.106
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CHE",
            properties: {
                name: "Switzerland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            9.594,
                            47.525
                        ],
                        [
                            7.467,
                            47.621
                        ],
                        [
                            6.844,
                            45.991
                        ],
                        [
                            10.443,
                            46.894
                        ],
                        [
                            9.594,
                            47.525
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CHL",
            properties: {
                name: "Chile"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -67.107,
                            -22.736
                        ],
                        [
                            -69.59,
                            -17.58
                        ],
                        [
                            -70.373,
                            -18.348
                        ],
                        [
                            -70.091,
                            -21.393
                        ],
                        [
                            -70.905,
                            -27.64
                        ],
                        [
                            -71.438,
                            -32.419
                        ],
                        [
                            -73.167,
                            -37.124
                        ],
                        [
                            -74.692,
                            -45.764
                        ],
                        [
                            -75.644,
                            -46.648
                        ],
                        [
                            -74.947,
                            -52.263
                        ],
                        [
                            -72.558,
                            -53.531
                        ],
                        [
                            -68.572,
                            -52.299
                        ],
                        [
                            -73.328,
                            -50.379
                        ],
                        [
                            -71.552,
                            -45.561
                        ],
                        [
                            -72.149,
                            -42.255
                        ],
                        [
                            -71.122,
                            -36.658
                        ],
                        [
                            -69.817,
                            -34.194
                        ],
                        [
                            -70.535,
                            -31.365
                        ],
                        [
                            -68.296,
                            -26.899
                        ],
                        [
                            -68.418,
                            -24.519
                        ],
                        [
                            -67.107,
                            -22.736
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CHN",
            properties: {
                name: "China"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            116.679,
                            49.889
                        ],
                        [
                            117.422,
                            46.673
                        ],
                        [
                            109.244,
                            42.519
                        ],
                        [
                            104.965,
                            41.597
                        ],
                        [
                            101.833,
                            42.515
                        ],
                        [
                            96.349,
                            42.726
                        ],
                        [
                            95.307,
                            44.241
                        ],
                        [
                            90.946,
                            45.286
                        ],
                        [
                            90.971,
                            46.888
                        ],
                        [
                            87.751,
                            49.297
                        ],
                        [
                            87.36,
                            49.215
                        ],
                        [
                            85.164,
                            47.001
                        ],
                        [
                            79.966,
                            44.918
                        ],
                        [
                            80.26,
                            42.35
                        ],
                        [
                            73.675,
                            39.431
                        ],
                        [
                            74.98,
                            37.42
                        ],
                        [
                            75.158,
                            37.133
                        ],
                        [
                            77.837,
                            35.494
                        ],
                        [
                            78.739,
                            31.516
                        ],
                        [
                            81.111,
                            30.183
                        ],
                        [
                            85.823,
                            28.204
                        ],
                        [
                            88.12,
                            27.877
                        ],
                        [
                            88.814,
                            27.299
                        ],
                        [
                            90.016,
                            28.296
                        ],
                        [
                            91.697,
                            27.772
                        ],
                        [
                            94.566,
                            29.277
                        ],
                        [
                            97.327,
                            28.262
                        ],
                        [
                            98.683,
                            27.509
                        ],
                        [
                            99.241,
                            22.118
                        ],
                        [
                            101.18,
                            21.437
                        ],
                        [
                            102.17,
                            22.465
                        ],
                        [
                            105.329,
                            23.352
                        ],
                        [
                            108.05,
                            21.552
                        ],
                        [
                            111.844,
                            21.55
                        ],
                        [
                            115.891,
                            22.783
                        ],
                        [
                            118.657,
                            24.547
                        ],
                        [
                            122.092,
                            29.833
                        ],
                        [
                            121.908,
                            31.692
                        ],
                        [
                            119.151,
                            34.91
                        ],
                        [
                            119.703,
                            37.156
                        ],
                        [
                            117.533,
                            38.738
                        ],
                        [
                            124.266,
                            39.928
                        ],
                        [
                            126.869,
                            41.817
                        ],
                        [
                            130.64,
                            42.395
                        ],
                        [
                            130.634,
                            42.903
                        ],
                        [
                            131.289,
                            44.112
                        ],
                        [
                            131.883,
                            45.321
                        ],
                        [
                            133.77,
                            46.117
                        ],
                        [
                            135.026,
                            48.478
                        ],
                        [
                            133.374,
                            48.183
                        ],
                        [
                            130.582,
                            48.73
                        ],
                        [
                            129.398,
                            49.441
                        ],
                        [
                            127.287,
                            50.74
                        ],
                        [
                            125.068,
                            53.161
                        ],
                        [
                            122.246,
                            53.432
                        ],
                        [
                            120.726,
                            52.516
                        ],
                        [
                            119.288,
                            50.143
                        ],
                        [
                            116.679,
                            49.889
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CIV",
            properties: {
                name: "Ivory Coast"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -2.856,
                            4.994
                        ],
                        [
                            -2.827,
                            9.642
                        ],
                        [
                            -5.404,
                            10.371
                        ],
                        [
                            -8.03,
                            10.207
                        ],
                        [
                            -8.439,
                            7.686
                        ],
                        [
                            -7.712,
                            4.365
                        ],
                        [
                            -2.856,
                            4.994
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CMR",
            properties: {
                name: "Cameroon"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            13.076,
                            2.267
                        ],
                        [
                            16.013,
                            2.268
                        ],
                        [
                            14.478,
                            4.733
                        ],
                        [
                            15.279,
                            7.422
                        ],
                        [
                            14.96,
                            11.556
                        ],
                        [
                            14.496,
                            12.859
                        ],
                        [
                            14.181,
                            12.484
                        ],
                        [
                            11.746,
                            6.981
                        ],
                        [
                            9.233,
                            6.444
                        ],
                        [
                            8.5,
                            4.772
                        ],
                        [
                            9.649,
                            2.284
                        ],
                        [
                            11.276,
                            2.261
                        ],
                        [
                            13.076,
                            2.267
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "COD",
            properties: {
                name: "Democratic Republic of the Congo"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            31.174,
                            2.204
                        ],
                        [
                            29.716,
                            4.601
                        ],
                        [
                            27.374,
                            5.234
                        ],
                        [
                            24.411,
                            5.109
                        ],
                        [
                            22.405,
                            4.029
                        ],
                        [
                            19.468,
                            5.032
                        ],
                        [
                            18.453,
                            3.504
                        ],
                        [
                            17.524,
                            -.744
                        ],
                        [
                            14.583,
                            -4.97
                        ],
                        [
                            12.996,
                            -4.781
                        ],
                        [
                            12.182,
                            -5.79
                        ],
                        [
                            12.322,
                            -6.1
                        ],
                        [
                            16.327,
                            -5.877
                        ],
                        [
                            17.473,
                            -8.069
                        ],
                        [
                            21.728,
                            -7.291
                        ],
                        [
                            22.155,
                            -11.085
                        ],
                        [
                            23.912,
                            -10.927
                        ],
                        [
                            28.155,
                            -12.272
                        ],
                        [
                            28.735,
                            -8.527
                        ],
                        [
                            30.74,
                            -8.34
                        ],
                        [
                            29.42,
                            -5.94
                        ],
                        [
                            29.34,
                            -4.5
                        ],
                        [
                            29.025,
                            -2.839
                        ],
                        [
                            29.579,
                            -1.341
                        ],
                        [
                            29.588,
                            -.587
                        ],
                        [
                            29.876,
                            .597
                        ],
                        [
                            31.174,
                            2.204
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "COG",
            properties: {
                name: "Republic of the Congo"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            12.996,
                            -4.781
                        ],
                        [
                            14.583,
                            -4.97
                        ],
                        [
                            17.524,
                            -.744
                        ],
                        [
                            18.453,
                            3.504
                        ],
                        [
                            16.013,
                            2.268
                        ],
                        [
                            13.076,
                            2.267
                        ],
                        [
                            14.425,
                            -1.333
                        ],
                        [
                            11.094,
                            -3.979
                        ],
                        [
                            11.915,
                            -5.038
                        ],
                        [
                            12.996,
                            -4.781
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "COL",
            properties: {
                name: "Colombia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -75.373,
                            -.152
                        ],
                        [
                            -73.07,
                            -2.309
                        ],
                        [
                            -70.813,
                            -2.257
                        ],
                        [
                            -69.894,
                            -4.298
                        ],
                        [
                            -69.817,
                            1.715
                        ],
                        [
                            -66.876,
                            1.253
                        ],
                        [
                            -67.823,
                            4.504
                        ],
                        [
                            -71.96,
                            6.992
                        ],
                        [
                            -72.905,
                            10.45
                        ],
                        [
                            -71.332,
                            11.776
                        ],
                        [
                            -75.48,
                            10.619
                        ],
                        [
                            -77.353,
                            8.671
                        ],
                        [
                            -77.882,
                            7.224
                        ],
                        [
                            -77.128,
                            3.85
                        ],
                        [
                            -78.855,
                            1.381
                        ],
                        [
                            -75.373,
                            -.152
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CRI",
            properties: {
                name: "Costa Rica"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -82.966,
                            8.225
                        ],
                        [
                            -82.546,
                            9.566
                        ],
                        [
                            -83.656,
                            10.939
                        ],
                        [
                            -85.713,
                            11.088
                        ],
                        [
                            -82.966,
                            8.225
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CUB",
            properties: {
                name: "Cuba"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -82.268,
                            23.189
                        ],
                        [
                            -81.821,
                            22.192
                        ],
                        [
                            -78.72,
                            21.598
                        ],
                        [
                            -77.755,
                            19.855
                        ],
                        [
                            -76.524,
                            21.207
                        ],
                        [
                            -78.347,
                            22.512
                        ],
                        [
                            -82.268,
                            23.189
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "-99",
            properties: {
                name: "Northern yprus"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            32.732,
                            35.14
                        ],
                        [
                            33.974,
                            35.059
                        ],
                        [
                            33.667,
                            35.373
                        ],
                        [
                            32.732,
                            35.14
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "yP",
            properties: {
                name: "yprus"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            33.974,
                            35.059
                        ],
                        [
                            32.732,
                            35.14
                        ],
                        [
                            32.98,
                            34.572
                        ],
                        [
                            33.974,
                            35.059
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CZE",
            properties: {
                name: "Czech Republic"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            16.96,
                            48.597
                        ],
                        [
                            18.853,
                            49.496
                        ],
                        [
                            15.017,
                            51.107
                        ],
                        [
                            13.596,
                            48.877
                        ],
                        [
                            16.96,
                            48.597
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "DEU",
            properties: {
                name: "Germany"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            9.922,
                            54.983
                        ],
                        [
                            8.526,
                            54.963
                        ],
                        [
                            6.905,
                            53.482
                        ],
                        [
                            6.157,
                            50.804
                        ],
                        [
                            6.043,
                            50.128
                        ],
                        [
                            6.186,
                            49.464
                        ],
                        [
                            7.467,
                            47.621
                        ],
                        [
                            9.594,
                            47.525
                        ],
                        [
                            13.596,
                            48.877
                        ],
                        [
                            15.017,
                            51.107
                        ],
                        [
                            14.12,
                            53.757
                        ],
                        [
                            9.922,
                            54.983
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "DJI",
            properties: {
                name: "Djibouti"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            43.081,
                            12.7
                        ],
                        [
                            42.352,
                            12.542
                        ],
                        [
                            42.777,
                            10.927
                        ],
                        [
                            43.145,
                            11.462
                        ],
                        [
                            43.081,
                            12.7
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "DNK",
            properties: {
                name: "Denmark"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            9.922,
                            54.983
                        ],
                        [
                            10.25,
                            56.89
                        ],
                        [
                            8.09,
                            56.54
                        ],
                        [
                            8.526,
                            54.963
                        ],
                        [
                            9.922,
                            54.983
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "DOM",
            properties: {
                name: "Dominican Republic"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -71.712,
                            19.714
                        ],
                        [
                            -71.708,
                            18.045
                        ],
                        [
                            -68.318,
                            18.612
                        ],
                        [
                            -70.807,
                            19.88
                        ],
                        [
                            -71.712,
                            19.714
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "DZA",
            properties: {
                name: "Algeria"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            12,
                            23.472
                        ],
                        [
                            10.304,
                            24.379
                        ],
                        [
                            9.482,
                            30.308
                        ],
                        [
                            7.613,
                            33.344
                        ],
                        [
                            8.421,
                            36.946
                        ],
                        [
                            1.467,
                            36.606
                        ],
                        [
                            -2.17,
                            35.168
                        ],
                        [
                            -1.308,
                            32.263
                        ],
                        [
                            -5.242,
                            30
                        ],
                        [
                            -8.674,
                            28.841
                        ],
                        [
                            -8.666,
                            27.656
                        ],
                        [
                            -8.684,
                            27.396
                        ],
                        [
                            -4.923,
                            24.975
                        ],
                        [
                            4.267,
                            19.155
                        ],
                        [
                            5.678,
                            19.601
                        ],
                        [
                            12,
                            23.472
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ECU",
            properties: {
                name: "Ecuador"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -80.303,
                            -3.405
                        ],
                        [
                            -77.838,
                            -3.003
                        ],
                        [
                            -75.373,
                            -.152
                        ],
                        [
                            -78.855,
                            1.381
                        ],
                        [
                            -80.934,
                            -1.057
                        ],
                        [
                            -80.303,
                            -3.405
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "EGY",
            properties: {
                name: "Egypt"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            36.866,
                            22
                        ],
                        [
                            34.105,
                            26.142
                        ],
                        [
                            34.923,
                            29.501
                        ],
                        [
                            34.265,
                            31.219
                        ],
                        [
                            28.914,
                            30.87
                        ],
                        [
                            25.165,
                            31.569
                        ],
                        [
                            25,
                            22
                        ],
                        [
                            36.866,
                            22
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ERI",
            properties: {
                name: "Eritrea"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            42.352,
                            12.542
                        ],
                        [
                            43.081,
                            12.7
                        ],
                        [
                            39.266,
                            15.923
                        ],
                        [
                            38.41,
                            17.998
                        ],
                        [
                            36.853,
                            16.957
                        ],
                        [
                            36.43,
                            14.422
                        ],
                        [
                            39.341,
                            14.532
                        ],
                        [
                            40.897,
                            14.119
                        ],
                        [
                            41.599,
                            13.452
                        ],
                        [
                            42.352,
                            12.542
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ESP",
            properties: {
                name: "Spain"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -9.035,
                            41.881
                        ],
                        [
                            -6.669,
                            41.883
                        ],
                        [
                            -7.454,
                            37.098
                        ],
                        [
                            -5.377,
                            35.947
                        ],
                        [
                            -.683,
                            37.642
                        ],
                        [
                            .811,
                            41.015
                        ],
                        [
                            2.986,
                            42.473
                        ],
                        [
                            -1.901,
                            43.423
                        ],
                        [
                            -7.978,
                            43.748
                        ],
                        [
                            -9.035,
                            41.881
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "EST",
            properties: {
                name: "Estonia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            24.313,
                            57.793
                        ],
                        [
                            27.288,
                            57.475
                        ],
                        [
                            27.717,
                            57.792
                        ],
                        [
                            28.132,
                            59.301
                        ],
                        [
                            24.313,
                            57.793
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ETH",
            properties: {
                name: "Ethiopia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            36.43,
                            14.422
                        ],
                        [
                            33.962,
                            9.584
                        ],
                        [
                            33.975,
                            8.685
                        ],
                        [
                            35.298,
                            5.506
                        ],
                        [
                            39.559,
                            3.422
                        ],
                        [
                            41.855,
                            3.919
                        ],
                        [
                            44.964,
                            5.002
                        ],
                        [
                            47.789,
                            8.003
                        ],
                        [
                            43.679,
                            9.184
                        ],
                        [
                            42.928,
                            10.022
                        ],
                        [
                            42.777,
                            10.927
                        ],
                        [
                            42.352,
                            12.542
                        ],
                        [
                            41.599,
                            13.452
                        ],
                        [
                            40.897,
                            14.119
                        ],
                        [
                            39.341,
                            14.532
                        ],
                        [
                            36.43,
                            14.422
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "FIN",
            properties: {
                name: "Finland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            28.592,
                            69.065
                        ],
                        [
                            20.646,
                            69.106
                        ],
                        [
                            23.903,
                            66.007
                        ],
                        [
                            21.059,
                            62.607
                        ],
                        [
                            22.87,
                            59.846
                        ],
                        [
                            30.211,
                            61.78
                        ],
                        [
                            29.977,
                            67.698
                        ],
                        [
                            28.592,
                            69.065
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "FJI",
            properties: {
                name: "Fiji"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            178.374,
                            -17.34
                        ],
                        [
                            177.671,
                            -17.381
                        ],
                        [
                            177.381,
                            -18.164
                        ],
                        [
                            178.553,
                            -18.151
                        ],
                        [
                            178.374,
                            -17.34
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "FLK",
            properties: {
                name: "Falkland Islands"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -61.2,
                            -51.85
                        ],
                        [
                            -60.7,
                            -52.3
                        ],
                        [
                            -58.05,
                            -51.9
                        ],
                        [
                            -60,
                            -51.25
                        ],
                        [
                            -61.2,
                            -51.85
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "FRA",
            properties: {
                name: "France"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            5.674,
                            49.529
                        ],
                        [
                            2.514,
                            51.149
                        ],
                        [
                            -2.963,
                            47.57
                        ],
                        [
                            -1.194,
                            46.015
                        ],
                        [
                            -1.901,
                            43.423
                        ],
                        [
                            2.986,
                            42.473
                        ],
                        [
                            7.435,
                            43.694
                        ],
                        [
                            6.844,
                            45.991
                        ],
                        [
                            7.467,
                            47.621
                        ],
                        [
                            6.186,
                            49.464
                        ],
                        [
                            5.674,
                            49.529
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GAB",
            properties: {
                name: "Gabon"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            11.094,
                            -3.979
                        ],
                        [
                            14.425,
                            -1.333
                        ],
                        [
                            13.076,
                            2.267
                        ],
                        [
                            11.276,
                            2.261
                        ],
                        [
                            9.493,
                            1.01
                        ],
                        [
                            8.798,
                            -1.111
                        ],
                        [
                            11.094,
                            -3.979
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GBR",
            properties: {
                name: "United Kingdom"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -3.005,
                            58.635
                        ],
                        [
                            -6.15,
                            56.785
                        ],
                        [
                            -3.63,
                            54.615
                        ],
                        [
                            -5.267,
                            51.991
                        ],
                        [
                            -3.617,
                            50.228
                        ],
                        [
                            .55,
                            50.766
                        ],
                        [
                            .47,
                            52.93
                        ],
                        [
                            -2.085,
                            55.91
                        ],
                        [
                            -3.005,
                            58.635
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GEO",
            properties: {
                name: "Georgia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            41.554,
                            41.536
                        ],
                        [
                            43.583,
                            41.092
                        ],
                        [
                            44.972,
                            41.248
                        ],
                        [
                            46.405,
                            41.861
                        ],
                        [
                            45.47,
                            42.503
                        ],
                        [
                            44.538,
                            42.712
                        ],
                        [
                            40.077,
                            43.553
                        ],
                        [
                            39.955,
                            43.435
                        ],
                        [
                            41.554,
                            41.536
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GHA",
            properties: {
                name: "Ghana"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            1.06,
                            5.929
                        ],
                        [
                            .024,
                            11.019
                        ],
                        [
                            -2.827,
                            9.642
                        ],
                        [
                            -2.856,
                            4.994
                        ],
                        [
                            1.06,
                            5.929
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GIN",
            properties: {
                name: "Guinea"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -8.439,
                            7.686
                        ],
                        [
                            -8.03,
                            10.207
                        ],
                        [
                            -9.127,
                            12.308
                        ],
                        [
                            -11.514,
                            12.443
                        ],
                        [
                            -13.7,
                            12.586
                        ],
                        [
                            -15.13,
                            11.04
                        ],
                        [
                            -13.247,
                            8.903
                        ],
                        [
                            -11.117,
                            10.046
                        ],
                        [
                            -10.23,
                            8.406
                        ],
                        [
                            -8.439,
                            7.686
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GMB",
            properties: {
                name: "Gambia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -16.842,
                            13.151
                        ],
                        [
                            -15.931,
                            13.13
                        ],
                        [
                            -15.625,
                            13.624
                        ],
                        [
                            -16.714,
                            13.595
                        ],
                        [
                            -16.842,
                            13.151
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GNB",
            properties: {
                name: "Guinea Bissau"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -15.13,
                            11.04
                        ],
                        [
                            -13.7,
                            12.586
                        ],
                        [
                            -16.677,
                            12.385
                        ],
                        [
                            -15.13,
                            11.04
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GNQ",
            properties: {
                name: "Equatorial Guinea"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            9.493,
                            1.01
                        ],
                        [
                            11.276,
                            2.261
                        ],
                        [
                            9.649,
                            2.284
                        ],
                        [
                            9.493,
                            1.01
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GRC",
            properties: {
                name: "Greece"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            26.057,
                            40.824
                        ],
                        [
                            26.117,
                            41.827
                        ],
                        [
                            22.952,
                            41.338
                        ],
                        [
                            21.02,
                            40.843
                        ],
                        [
                            20.15,
                            39.625
                        ],
                        [
                            26.057,
                            40.824
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GRL",
            properties: {
                name: "Greenland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -46.764,
                            82.628
                        ],
                        [
                            -62.651,
                            81.77
                        ],
                        [
                            -73.159,
                            78.433
                        ],
                        [
                            -68.504,
                            76.061
                        ],
                        [
                            -58.585,
                            75.517
                        ],
                        [
                            -54.004,
                            71.547
                        ],
                        [
                            -53.969,
                            67.189
                        ],
                        [
                            -51.633,
                            63.627
                        ],
                        [
                            -48.263,
                            60.858
                        ],
                        [
                            -43.378,
                            60.098
                        ],
                        [
                            -39.812,
                            65.458
                        ],
                        [
                            -27.747,
                            68.47
                        ],
                        [
                            -22.349,
                            70.129
                        ],
                        [
                            -23.443,
                            72.08
                        ],
                        [
                            -19.373,
                            74.296
                        ],
                        [
                            -19.705,
                            78.751
                        ],
                        [
                            -12.209,
                            81.292
                        ],
                        [
                            -27.1,
                            83.52
                        ],
                        [
                            -46.764,
                            82.628
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GTM",
            properties: {
                name: "Guatemala"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -90.096,
                            13.735
                        ],
                        [
                            -89.353,
                            14.424
                        ],
                        [
                            -88.225,
                            15.728
                        ],
                        [
                            -88.931,
                            15.887
                        ],
                        [
                            -89.143,
                            17.808
                        ],
                        [
                            -91.002,
                            17.818
                        ],
                        [
                            -92.228,
                            14.539
                        ],
                        [
                            -90.096,
                            13.735
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GUF",
            properties: {
                name: "French Guiana"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -54.525,
                            2.312
                        ],
                        [
                            -52.94,
                            2.125
                        ],
                        [
                            -51.658,
                            4.156
                        ],
                        [
                            -53.958,
                            5.757
                        ],
                        [
                            -54.4,
                            4.213
                        ],
                        [
                            -54.525,
                            2.312
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "GUY",
            properties: {
                name: "Guyana"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -59.758,
                            8.367
                        ],
                        [
                            -60.734,
                            5.2
                        ],
                        [
                            -59.031,
                            1.318
                        ],
                        [
                            -56.539,
                            1.9
                        ],
                        [
                            -58.045,
                            4.061
                        ],
                        [
                            -57.147,
                            5.973
                        ],
                        [
                            -59.758,
                            8.367
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "HND",
            properties: {
                name: "Honduras"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -87.317,
                            12.985
                        ],
                        [
                            -83.147,
                            14.996
                        ],
                        [
                            -84.368,
                            15.835
                        ],
                        [
                            -88.225,
                            15.728
                        ],
                        [
                            -89.353,
                            14.424
                        ],
                        [
                            -87.793,
                            13.384
                        ],
                        [
                            -87.317,
                            12.985
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "HRV",
            properties: {
                name: "Croatia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            18.83,
                            45.909
                        ],
                        [
                            16.565,
                            46.504
                        ],
                        [
                            13.715,
                            45.5
                        ],
                        [
                            18.56,
                            42.65
                        ],
                        [
                            19.005,
                            44.86
                        ],
                        [
                            19.39,
                            45.237
                        ],
                        [
                            19.073,
                            45.522
                        ],
                        [
                            18.83,
                            45.909
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "HTI",
            properties: {
                name: "Haiti"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -71.712,
                            19.714
                        ],
                        [
                            -72.695,
                            18.446
                        ],
                        [
                            -71.708,
                            18.045
                        ],
                        [
                            -71.712,
                            19.714
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "HUN",
            properties: {
                name: "Hungary"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            16.202,
                            46.852
                        ],
                        [
                            16.565,
                            46.504
                        ],
                        [
                            18.83,
                            45.909
                        ],
                        [
                            19.596,
                            46.172
                        ],
                        [
                            20.22,
                            46.127
                        ],
                        [
                            22.711,
                            47.882
                        ],
                        [
                            22.086,
                            48.422
                        ],
                        [
                            16.98,
                            48.123
                        ],
                        [
                            16.202,
                            46.852
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "IDN",
            properties: {
                name: "Indonesia"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                141,
                                -2.6
                            ],
                            [
                                138.33,
                                -1.703
                            ],
                            [
                                134.423,
                                -2.769
                            ],
                            [
                                137.928,
                                -5.393
                            ],
                            [
                                138.669,
                                -7.32
                            ],
                            [
                                141.034,
                                -9.118
                            ],
                            [
                                141,
                                -2.6
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                125.241,
                                1.42
                            ],
                            [
                                120.886,
                                1.309
                            ],
                            [
                                118.768,
                                -2.802
                            ],
                            [
                                120.305,
                                -2.932
                            ],
                            [
                                120.183,
                                .237
                            ],
                            [
                                124.437,
                                .428
                            ],
                            [
                                125.241,
                                1.42
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                109.663,
                                2.006
                            ],
                            [
                                109.092,
                                -.46
                            ],
                            [
                                110.224,
                                -2.934
                            ],
                            [
                                116.001,
                                -3.657
                            ],
                            [
                                117.522,
                                -.804
                            ],
                            [
                                117.882,
                                4.138
                            ],
                            [
                                115.866,
                                4.307
                            ],
                            [
                                114.621,
                                1.431
                            ],
                            [
                                110.514,
                                .773
                            ],
                            [
                                109.663,
                                2.006
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                105.818,
                                -5.852
                            ],
                            [
                                106.109,
                                -3.062
                            ],
                            [
                                103.438,
                                -.712
                            ],
                            [
                                97.485,
                                5.246
                            ],
                            [
                                98.601,
                                1.824
                            ],
                            [
                                102.584,
                                -4.22
                            ],
                            [
                                105.818,
                                -5.852
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "IND",
            properties: {
                name: "India"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            77.837,
                            35.494
                        ],
                        [
                            74.24,
                            34.749
                        ],
                        [
                            74.421,
                            30.98
                        ],
                        [
                            70.169,
                            26.492
                        ],
                        [
                            71.043,
                            24.357
                        ],
                        [
                            68.177,
                            23.692
                        ],
                        [
                            70.47,
                            20.877
                        ],
                        [
                            72.631,
                            21.356
                        ],
                        [
                            73.534,
                            15.991
                        ],
                        [
                            76.593,
                            8.899
                        ],
                        [
                            79.858,
                            10.357
                        ],
                        [
                            80.325,
                            15.899
                        ],
                        [
                            89.032,
                            22.056
                        ],
                        [
                            88.084,
                            24.502
                        ],
                        [
                            89.921,
                            25.27
                        ],
                        [
                            91.915,
                            24.13
                        ],
                        [
                            92.673,
                            22.041
                        ],
                        [
                            95.125,
                            26.574
                        ],
                        [
                            97.327,
                            28.262
                        ],
                        [
                            94.566,
                            29.277
                        ],
                        [
                            91.697,
                            27.772
                        ],
                        [
                            88.814,
                            27.299
                        ],
                        [
                            88.12,
                            27.877
                        ],
                        [
                            85.252,
                            26.726
                        ],
                        [
                            80.088,
                            28.794
                        ],
                        [
                            81.111,
                            30.183
                        ],
                        [
                            78.739,
                            31.516
                        ],
                        [
                            77.837,
                            35.494
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "IRL",
            properties: {
                name: "Ireland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -6.198,
                            53.868
                        ],
                        [
                            -7.572,
                            55.132
                        ],
                        [
                            -9.689,
                            53.881
                        ],
                        [
                            -8.562,
                            51.669
                        ],
                        [
                            -6.198,
                            53.868
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "IRN",
            properties: {
                name: "Iran"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            53.922,
                            37.199
                        ],
                        [
                            52.264,
                            36.7
                        ],
                        [
                            48.883,
                            38.32
                        ],
                        [
                            46.506,
                            38.771
                        ],
                        [
                            46.144,
                            38.741
                        ],
                        [
                            44.794,
                            39.713
                        ],
                        [
                            44.226,
                            37.972
                        ],
                        [
                            45.421,
                            35.978
                        ],
                        [
                            45.417,
                            33.968
                        ],
                        [
                            48.568,
                            29.927
                        ],
                        [
                            51.521,
                            27.866
                        ],
                        [
                            57.397,
                            25.74
                        ],
                        [
                            61.497,
                            25.078
                        ],
                        [
                            63.317,
                            26.757
                        ],
                        [
                            60.874,
                            29.829
                        ],
                        [
                            60.528,
                            33.676
                        ],
                        [
                            61.211,
                            35.65
                        ],
                        [
                            59.235,
                            37.413
                        ],
                        [
                            53.922,
                            37.199
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "IRQ",
            properties: {
                name: "Iraq"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            45.421,
                            35.978
                        ],
                        [
                            44.773,
                            37.17
                        ],
                        [
                            42.35,
                            37.23
                        ],
                        [
                            41.006,
                            34.419
                        ],
                        [
                            38.792,
                            33.379
                        ],
                        [
                            39.195,
                            32.161
                        ],
                        [
                            44.709,
                            29.179
                        ],
                        [
                            46.569,
                            29.099
                        ],
                        [
                            47.975,
                            29.976
                        ],
                        [
                            48.568,
                            29.927
                        ],
                        [
                            45.417,
                            33.968
                        ],
                        [
                            45.421,
                            35.978
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ISL",
            properties: {
                name: "Iceland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -14.509,
                            66.456
                        ],
                        [
                            -20.576,
                            65.732
                        ],
                        [
                            -18.656,
                            63.496
                        ],
                        [
                            -13.61,
                            65.127
                        ],
                        [
                            -14.509,
                            66.456
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ISR",
            properties: {
                name: "Israel"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            35.72,
                            32.709
                        ],
                        [
                            35.821,
                            33.277
                        ],
                        [
                            35.126,
                            33.091
                        ],
                        [
                            34.923,
                            29.501
                        ],
                        [
                            35.398,
                            31.489
                        ],
                        [
                            34.927,
                            31.353
                        ],
                        [
                            35.184,
                            32.533
                        ],
                        [
                            35.546,
                            32.394
                        ],
                        [
                            35.72,
                            32.709
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ITA",
            properties: {
                name: "Italy"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            13.806,
                            46.509
                        ],
                        [
                            10.443,
                            46.894
                        ],
                        [
                            6.844,
                            45.991
                        ],
                        [
                            7.435,
                            43.694
                        ],
                        [
                            8.889,
                            44.366
                        ],
                        [
                            12.107,
                            41.705
                        ],
                        [
                            13.938,
                            45.591
                        ],
                        [
                            13.806,
                            46.509
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "JAM",
            properties: {
                name: "Jamaica"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -77.57,
                            18.491
                        ],
                        [
                            -77.206,
                            17.701
                        ],
                        [
                            -76.365,
                            18.161
                        ],
                        [
                            -77.57,
                            18.491
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "JOR",
            properties: {
                name: "Jordan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            35.546,
                            32.394
                        ],
                        [
                            35.398,
                            31.489
                        ],
                        [
                            34.923,
                            29.501
                        ],
                        [
                            34.956,
                            29.357
                        ],
                        [
                            37.999,
                            30.509
                        ],
                        [
                            39.195,
                            32.161
                        ],
                        [
                            38.792,
                            33.379
                        ],
                        [
                            35.72,
                            32.709
                        ],
                        [
                            35.546,
                            32.394
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "JPN",
            properties: {
                name: "Japan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            140.976,
                            37.142
                        ],
                        [
                            139.426,
                            38.216
                        ],
                        [
                            135.678,
                            35.527
                        ],
                        [
                            132.618,
                            35.433
                        ],
                        [
                            132.157,
                            33.905
                        ],
                        [
                            140.253,
                            35.138
                        ],
                        [
                            140.976,
                            37.142
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "KAZ",
            properties: {
                name: "Kazakhstan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            70.962,
                            42.266
                        ],
                        [
                            74.213,
                            43.298
                        ],
                        [
                            80.26,
                            42.35
                        ],
                        [
                            79.966,
                            44.918
                        ],
                        [
                            85.164,
                            47.001
                        ],
                        [
                            87.36,
                            49.215
                        ],
                        [
                            83.383,
                            51.069
                        ],
                        [
                            80.036,
                            50.865
                        ],
                        [
                            76.891,
                            54.491
                        ],
                        [
                            73.426,
                            53.49
                        ],
                        [
                            68.169,
                            54.97
                        ],
                        [
                            65.179,
                            54.354
                        ],
                        [
                            60.978,
                            53.665
                        ],
                        [
                            59.642,
                            50.545
                        ],
                        [
                            54.533,
                            51.026
                        ],
                        [
                            50.767,
                            51.693
                        ],
                        [
                            47.549,
                            50.455
                        ],
                        [
                            46.466,
                            48.394
                        ],
                        [
                            48.695,
                            47.076
                        ],
                        [
                            49.101,
                            46.399
                        ],
                        [
                            52.502,
                            41.783
                        ],
                        [
                            55.968,
                            41.309
                        ],
                        [
                            55.929,
                            44.996
                        ],
                        [
                            58.503,
                            45.587
                        ],
                        [
                            62.013,
                            43.504
                        ],
                        [
                            64.901,
                            43.728
                        ],
                        [
                            66.714,
                            41.168
                        ],
                        [
                            70.962,
                            42.266
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "KEN",
            properties: {
                name: "Kenya"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            41.585,
                            -1.683
                        ],
                        [
                            40.981,
                            2.785
                        ],
                        [
                            41.855,
                            3.919
                        ],
                        [
                            39.559,
                            3.422
                        ],
                        [
                            35.298,
                            5.506
                        ],
                        [
                            34.005,
                            4.25
                        ],
                        [
                            35.036,
                            1.906
                        ],
                        [
                            33.904,
                            -.95
                        ],
                        [
                            37.699,
                            -3.097
                        ],
                        [
                            39.202,
                            -4.677
                        ],
                        [
                            41.585,
                            -1.683
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "KGZ",
            properties: {
                name: "Kyrgyzstan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            70.962,
                            42.266
                        ],
                        [
                            71.014,
                            40.244
                        ],
                        [
                            73.675,
                            39.431
                        ],
                        [
                            80.26,
                            42.35
                        ],
                        [
                            74.213,
                            43.298
                        ],
                        [
                            70.962,
                            42.266
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "KHM",
            properties: {
                name: "Cambodia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            102.585,
                            12.187
                        ],
                        [
                            104.334,
                            10.487
                        ],
                        [
                            107.491,
                            12.337
                        ],
                        [
                            107.383,
                            14.202
                        ],
                        [
                            105.219,
                            14.273
                        ],
                        [
                            102.988,
                            14.226
                        ],
                        [
                            102.585,
                            12.187
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "KOR",
            properties: {
                name: "South Korea"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            128.35,
                            38.612
                        ],
                        [
                            126.175,
                            37.75
                        ],
                        [
                            126.486,
                            34.39
                        ],
                        [
                            129.091,
                            35.082
                        ],
                        [
                            128.35,
                            38.612
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "CS-KM",
            properties: {
                name: "Kosovo"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            20.59,
                            41.855
                        ],
                        [
                            21.577,
                            42.245
                        ],
                        [
                            20.258,
                            42.813
                        ],
                        [
                            20.071,
                            42.589
                        ],
                        [
                            20.523,
                            42.218
                        ],
                        [
                            20.59,
                            41.855
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "KWT",
            properties: {
                name: "Kuwait"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            47.975,
                            29.976
                        ],
                        [
                            46.569,
                            29.099
                        ],
                        [
                            48.416,
                            28.552
                        ],
                        [
                            47.975,
                            29.976
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LAO",
            properties: {
                name: "Laos"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            105.219,
                            14.273
                        ],
                        [
                            107.383,
                            14.202
                        ],
                        [
                            107.565,
                            15.202
                        ],
                        [
                            105.095,
                            18.667
                        ],
                        [
                            104.435,
                            20.759
                        ],
                        [
                            102.17,
                            22.465
                        ],
                        [
                            101.18,
                            21.437
                        ],
                        [
                            100.116,
                            20.418
                        ],
                        [
                            102.114,
                            18.109
                        ],
                        [
                            103.956,
                            18.241
                        ],
                        [
                            105.219,
                            14.273
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LBN",
            properties: {
                name: "Lebanon"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            35.821,
                            33.277
                        ],
                        [
                            35.998,
                            34.645
                        ],
                        [
                            35.126,
                            33.091
                        ],
                        [
                            35.821,
                            33.277
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LBR",
            properties: {
                name: "Liberia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -7.712,
                            4.365
                        ],
                        [
                            -8.439,
                            7.686
                        ],
                        [
                            -10.23,
                            8.406
                        ],
                        [
                            -11.439,
                            6.786
                        ],
                        [
                            -7.712,
                            4.365
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LBY",
            properties: {
                name: "Libya"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            14.851,
                            22.863
                        ],
                        [
                            15.861,
                            23.41
                        ],
                        [
                            23.838,
                            19.58
                        ],
                        [
                            25,
                            22
                        ],
                        [
                            25.165,
                            31.569
                        ],
                        [
                            20.855,
                            32.707
                        ],
                        [
                            19.086,
                            30.266
                        ],
                        [
                            15.246,
                            32.265
                        ],
                        [
                            11.489,
                            33.137
                        ],
                        [
                            9.482,
                            30.308
                        ],
                        [
                            10.304,
                            24.379
                        ],
                        [
                            12,
                            23.472
                        ],
                        [
                            14.851,
                            22.863
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LKA",
            properties: {
                name: "Sri Lanka"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            81.788,
                            7.523
                        ],
                        [
                            79.695,
                            8.201
                        ],
                        [
                            80.348,
                            5.968
                        ],
                        [
                            81.788,
                            7.523
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LSO",
            properties: {
                name: "Lesotho"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            28.978,
                            -28.956
                        ],
                        [
                            26.999,
                            -29.876
                        ],
                        [
                            27.749,
                            -30.645
                        ],
                        [
                            28.848,
                            -30.07
                        ],
                        [
                            28.978,
                            -28.956
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LTU",
            properties: {
                name: "Lithuania"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            22.731,
                            54.328
                        ],
                        [
                            23.484,
                            53.912
                        ],
                        [
                            26.494,
                            55.615
                        ],
                        [
                            21.056,
                            56.031
                        ],
                        [
                            21.268,
                            55.19
                        ],
                        [
                            22.731,
                            54.328
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LUX",
            properties: {
                name: "Luxembourg"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            6.043,
                            50.128
                        ],
                        [
                            5.674,
                            49.529
                        ],
                        [
                            6.186,
                            49.464
                        ],
                        [
                            6.043,
                            50.128
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "LVA",
            properties: {
                name: "Latvia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            21.056,
                            56.031
                        ],
                        [
                            26.494,
                            55.615
                        ],
                        [
                            28.177,
                            56.169
                        ],
                        [
                            27.288,
                            57.475
                        ],
                        [
                            24.313,
                            57.793
                        ],
                        [
                            21.056,
                            56.031
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MAR",
            properties: {
                name: "Morocco"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -2.17,
                            35.168
                        ],
                        [
                            -5.93,
                            35.76
                        ],
                        [
                            -8.657,
                            33.24
                        ],
                        [
                            -9.565,
                            29.934
                        ],
                        [
                            -14.44,
                            26.254
                        ],
                        [
                            -17.02,
                            21.422
                        ],
                        [
                            -14.751,
                            21.501
                        ],
                        [
                            -11.393,
                            26.883
                        ],
                        [
                            -8.818,
                            27.656
                        ],
                        [
                            -8.666,
                            27.656
                        ],
                        [
                            -8.674,
                            28.841
                        ],
                        [
                            -5.242,
                            30
                        ],
                        [
                            -1.308,
                            32.263
                        ],
                        [
                            -2.17,
                            35.168
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MDA",
            properties: {
                name: "Moldova"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            26.619,
                            48.221
                        ],
                        [
                            28.234,
                            45.488
                        ],
                        [
                            29.123,
                            47.849
                        ],
                        [
                            26.619,
                            48.221
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MDG",
            properties: {
                name: "Madagascar"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            49.544,
                            -12.47
                        ],
                        [
                            43.963,
                            -17.41
                        ],
                        [
                            44.374,
                            -20.072
                        ],
                        [
                            43.254,
                            -22.057
                        ],
                        [
                            44.04,
                            -24.988
                        ],
                        [
                            47.096,
                            -24.942
                        ],
                        [
                            49.499,
                            -17.106
                        ],
                        [
                            50.477,
                            -15.227
                        ],
                        [
                            49.544,
                            -12.47
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MEX",
            properties: {
                name: "Mexico"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -88.3,
                            18.5
                        ],
                        [
                            -87.052,
                            21.544
                        ],
                        [
                            -90.279,
                            21
                        ],
                        [
                            -90.772,
                            19.284
                        ],
                        [
                            -94.426,
                            18.144
                        ],
                        [
                            -95.901,
                            18.828
                        ],
                        [
                            -97.872,
                            22.444
                        ],
                        [
                            -97.53,
                            25.84
                        ],
                        [
                            -99.02,
                            26.37
                        ],
                        [
                            -100.958,
                            29.381
                        ],
                        [
                            -104.457,
                            29.572
                        ],
                        [
                            -106.508,
                            31.755
                        ],
                        [
                            -111.024,
                            31.335
                        ],
                        [
                            -117.128,
                            32.535
                        ],
                        [
                            -114.466,
                            27.142
                        ],
                        [
                            -109.292,
                            26.443
                        ],
                        [
                            -106.029,
                            22.774
                        ],
                        [
                            -104.992,
                            19.316
                        ],
                        [
                            -100.829,
                            17.171
                        ],
                        [
                            -96.557,
                            15.654
                        ],
                        [
                            -94.692,
                            16.201
                        ],
                        [
                            -92.228,
                            14.539
                        ],
                        [
                            -91.002,
                            17.818
                        ],
                        [
                            -89.143,
                            17.808
                        ],
                        [
                            -88.3,
                            18.5
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MKD",
            properties: {
                name: "Macedonia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            20.59,
                            41.855
                        ],
                        [
                            21.02,
                            40.843
                        ],
                        [
                            22.952,
                            41.338
                        ],
                        [
                            22.381,
                            42.32
                        ],
                        [
                            21.577,
                            42.245
                        ],
                        [
                            20.59,
                            41.855
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MLI",
            properties: {
                name: "Mali"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -12.171,
                            14.617
                        ],
                        [
                            -11.514,
                            12.443
                        ],
                        [
                            -9.127,
                            12.308
                        ],
                        [
                            -8.03,
                            10.207
                        ],
                        [
                            -5.404,
                            10.371
                        ],
                        [
                            -5.221,
                            11.714
                        ],
                        [
                            -2.001,
                            14.559
                        ],
                        [
                            .375,
                            14.929
                        ],
                        [
                            3.638,
                            15.568
                        ],
                        [
                            4.267,
                            19.155
                        ],
                        [
                            -4.923,
                            24.975
                        ],
                        [
                            -6.454,
                            24.957
                        ],
                        [
                            -5.538,
                            15.502
                        ],
                        [
                            -11.666,
                            15.388
                        ],
                        [
                            -12.171,
                            14.617
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MLT",
            properties: {
                name: "Malta"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            14.566,
                            35.853
                        ],
                        [
                            14.448,
                            35.957
                        ],
                        [
                            14.352,
                            35.872
                        ],
                        [
                            14.566,
                            35.853
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MMR",
            properties: {
                name: "Myanmar"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            98.554,
                            9.933
                        ],
                        [
                            99.587,
                            11.893
                        ],
                        [
                            97.859,
                            17.568
                        ],
                        [
                            98.254,
                            19.708
                        ],
                        [
                            100.116,
                            20.418
                        ],
                        [
                            101.18,
                            21.437
                        ],
                        [
                            99.241,
                            22.118
                        ],
                        [
                            98.683,
                            27.509
                        ],
                        [
                            97.327,
                            28.262
                        ],
                        [
                            95.125,
                            26.574
                        ],
                        [
                            92.673,
                            22.041
                        ],
                        [
                            92.369,
                            20.671
                        ],
                        [
                            94.325,
                            18.214
                        ],
                        [
                            94.189,
                            16.038
                        ],
                        [
                            97.165,
                            16.929
                        ],
                        [
                            98.765,
                            11.441
                        ],
                        [
                            98.554,
                            9.933
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MNE",
            properties: {
                name: "Montenegro"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            19.738,
                            42.688
                        ],
                        [
                            20.071,
                            42.589
                        ],
                        [
                            20.258,
                            42.813
                        ],
                        [
                            19.219,
                            43.524
                        ],
                        [
                            18.56,
                            42.65
                        ],
                        [
                            19.738,
                            42.688
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MNG",
            properties: {
                name: "Mongolia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            87.751,
                            49.297
                        ],
                        [
                            90.971,
                            46.888
                        ],
                        [
                            90.946,
                            45.286
                        ],
                        [
                            95.307,
                            44.241
                        ],
                        [
                            96.349,
                            42.726
                        ],
                        [
                            101.833,
                            42.515
                        ],
                        [
                            104.965,
                            41.597
                        ],
                        [
                            109.244,
                            42.519
                        ],
                        [
                            117.422,
                            46.673
                        ],
                        [
                            116.679,
                            49.889
                        ],
                        [
                            110.662,
                            49.13
                        ],
                        [
                            105.887,
                            50.406
                        ],
                        [
                            103.677,
                            50.09
                        ],
                        [
                            100.889,
                            51.517
                        ],
                        [
                            98.232,
                            50.422
                        ],
                        [
                            94.816,
                            50.013
                        ],
                        [
                            94.148,
                            50.481
                        ],
                        [
                            92.235,
                            50.802
                        ],
                        [
                            87.751,
                            49.297
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MOZ",
            properties: {
                name: "Mozambique"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            34.56,
                            -11.52
                        ],
                        [
                            33.214,
                            -13.972
                        ],
                        [
                            30.274,
                            -15.508
                        ],
                        [
                            32.848,
                            -16.713
                        ],
                        [
                            32.773,
                            -19.716
                        ],
                        [
                            31.191,
                            -22.252
                        ],
                        [
                            31.838,
                            -25.843
                        ],
                        [
                            32.072,
                            -26.734
                        ],
                        [
                            32.83,
                            -26.742
                        ],
                        [
                            35.459,
                            -24.123
                        ],
                        [
                            34.786,
                            -19.784
                        ],
                        [
                            39.453,
                            -16.721
                        ],
                        [
                            40.775,
                            -14.692
                        ],
                        [
                            40.478,
                            -10.765
                        ],
                        [
                            38.428,
                            -11.285
                        ],
                        [
                            36.775,
                            -11.595
                        ],
                        [
                            34.56,
                            -11.52
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MRT",
            properties: {
                name: "Mauritania"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -12.171,
                            14.617
                        ],
                        [
                            -11.666,
                            15.388
                        ],
                        [
                            -5.538,
                            15.502
                        ],
                        [
                            -6.454,
                            24.957
                        ],
                        [
                            -4.923,
                            24.975
                        ],
                        [
                            -8.684,
                            27.396
                        ],
                        [
                            -11.969,
                            25.933
                        ],
                        [
                            -12.929,
                            21.327
                        ],
                        [
                            -17.063,
                            21
                        ],
                        [
                            -16.278,
                            20.093
                        ],
                        [
                            -16.463,
                            16.135
                        ],
                        [
                            -14.577,
                            16.598
                        ],
                        [
                            -12.171,
                            14.617
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MWI",
            properties: {
                name: "Malawi"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            34.56,
                            -11.52
                        ],
                        [
                            33.941,
                            -9.694
                        ],
                        [
                            32.759,
                            -9.231
                        ],
                        [
                            33.486,
                            -10.526
                        ],
                        [
                            33.214,
                            -13.972
                        ],
                        [
                            34.56,
                            -11.52
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "MYS",
            properties: {
                name: "Malaysia"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                102.141,
                                6.222
                            ],
                            [
                                100.086,
                                6.464
                            ],
                            [
                                101.391,
                                2.761
                            ],
                            [
                                103.381,
                                4.855
                            ],
                            [
                                102.141,
                                6.222
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                117.882,
                                4.138
                            ],
                            [
                                115.451,
                                5.448
                            ],
                            [
                                115.347,
                                4.317
                            ],
                            [
                                114.204,
                                4.526
                            ],
                            [
                                112.996,
                                3.102
                            ],
                            [
                                109.663,
                                2.006
                            ],
                            [
                                110.514,
                                .773
                            ],
                            [
                                114.621,
                                1.431
                            ],
                            [
                                115.866,
                                4.307
                            ],
                            [
                                117.882,
                                4.138
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NAM",
            properties: {
                name: "Namibia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            16.345,
                            -28.577
                        ],
                        [
                            19.895,
                            -28.461
                        ],
                        [
                            19.896,
                            -24.768
                        ],
                        [
                            20.881,
                            -21.814
                        ],
                        [
                            20.911,
                            -18.252
                        ],
                        [
                            25.084,
                            -17.662
                        ],
                        [
                            23.215,
                            -17.523
                        ],
                        [
                            18.263,
                            -17.31
                        ],
                        [
                            11.734,
                            -17.302
                        ],
                        [
                            14.258,
                            -22.111
                        ],
                        [
                            15.21,
                            -27.091
                        ],
                        [
                            16.345,
                            -28.577
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NCL",
            properties: {
                name: "New Caledonia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            165.78,
                            -21.08
                        ],
                        [
                            164.46,
                            -20.12
                        ],
                        [
                            164.168,
                            -20.445
                        ],
                        [
                            165.474,
                            -21.68
                        ],
                        [
                            165.78,
                            -21.08
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NER",
            properties: {
                name: "Niger"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            2.154,
                            11.94
                        ],
                        [
                            3.611,
                            11.66
                        ],
                        [
                            4.368,
                            13.747
                        ],
                        [
                            9.015,
                            12.827
                        ],
                        [
                            14.181,
                            12.484
                        ],
                        [
                            14.496,
                            12.859
                        ],
                        [
                            13.54,
                            14.367
                        ],
                        [
                            15.248,
                            16.627
                        ],
                        [
                            15.487,
                            20.73
                        ],
                        [
                            15.097,
                            21.309
                        ],
                        [
                            14.851,
                            22.863
                        ],
                        [
                            12,
                            23.472
                        ],
                        [
                            5.678,
                            19.601
                        ],
                        [
                            4.267,
                            19.155
                        ],
                        [
                            3.638,
                            15.568
                        ],
                        [
                            .375,
                            14.929
                        ],
                        [
                            2.154,
                            11.94
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NGA",
            properties: {
                name: "Nigeria"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            8.5,
                            4.772
                        ],
                        [
                            9.233,
                            6.444
                        ],
                        [
                            11.746,
                            6.981
                        ],
                        [
                            14.181,
                            12.484
                        ],
                        [
                            9.015,
                            12.827
                        ],
                        [
                            4.368,
                            13.747
                        ],
                        [
                            3.611,
                            11.66
                        ],
                        [
                            2.692,
                            6.259
                        ],
                        [
                            4.326,
                            6.271
                        ],
                        [
                            5.898,
                            4.262
                        ],
                        [
                            8.5,
                            4.772
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NIC",
            properties: {
                name: "Nicaragua"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -85.713,
                            11.088
                        ],
                        [
                            -83.656,
                            10.939
                        ],
                        [
                            -83.147,
                            14.996
                        ],
                        [
                            -87.317,
                            12.985
                        ],
                        [
                            -85.713,
                            11.088
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NLD",
            properties: {
                name: "Netherlands"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            6.905,
                            53.482
                        ],
                        [
                            4.047,
                            51.267
                        ],
                        [
                            6.157,
                            50.804
                        ],
                        [
                            6.905,
                            53.482
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NOR",
            properties: {
                name: "Norway"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            28.592,
                            69.065
                        ],
                        [
                            28.166,
                            71.185
                        ],
                        [
                            19.184,
                            69.817
                        ],
                        [
                            10.528,
                            64.486
                        ],
                        [
                            4.992,
                            61.971
                        ],
                        [
                            5.666,
                            58.588
                        ],
                        [
                            11.027,
                            58.856
                        ],
                        [
                            11.931,
                            63.128
                        ],
                        [
                            16.769,
                            68.014
                        ],
                        [
                            20.646,
                            69.106
                        ],
                        [
                            28.592,
                            69.065
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NPL",
            properties: {
                name: "Nepal"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            88.12,
                            27.877
                        ],
                        [
                            85.823,
                            28.204
                        ],
                        [
                            81.111,
                            30.183
                        ],
                        [
                            80.088,
                            28.794
                        ],
                        [
                            85.252,
                            26.726
                        ],
                        [
                            88.12,
                            27.877
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "NZL",
            properties: {
                name: "New Zealand"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                173.02,
                                -40.919
                            ],
                            [
                                167.046,
                                -45.111
                            ],
                            [
                                169.332,
                                -46.641
                            ],
                            [
                                174.249,
                                -41.77
                            ],
                            [
                                173.02,
                                -40.919
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                174.612,
                                -36.156
                            ],
                            [
                                173.824,
                                -39.509
                            ],
                            [
                                176.012,
                                -41.29
                            ],
                            [
                                177.97,
                                -39.166
                            ],
                            [
                                174.612,
                                -36.156
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "OMN",
            properties: {
                name: "Oman"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            53.109,
                            16.651
                        ],
                        [
                            57.789,
                            19.068
                        ],
                        [
                            59.806,
                            22.311
                        ],
                        [
                            56.397,
                            24.925
                        ],
                        [
                            55.208,
                            22.708
                        ],
                        [
                            55,
                            20
                        ],
                        [
                            52,
                            19
                        ],
                        [
                            53.109,
                            16.651
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PAK",
            properties: {
                name: "Pakistan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            75.158,
                            37.133
                        ],
                        [
                            71.846,
                            36.51
                        ],
                        [
                            68.927,
                            31.62
                        ],
                        [
                            66.346,
                            29.888
                        ],
                        [
                            60.874,
                            29.829
                        ],
                        [
                            63.317,
                            26.757
                        ],
                        [
                            61.497,
                            25.078
                        ],
                        [
                            66.373,
                            25.425
                        ],
                        [
                            68.177,
                            23.692
                        ],
                        [
                            71.043,
                            24.357
                        ],
                        [
                            70.169,
                            26.492
                        ],
                        [
                            74.421,
                            30.98
                        ],
                        [
                            74.24,
                            34.749
                        ],
                        [
                            77.837,
                            35.494
                        ],
                        [
                            75.158,
                            37.133
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PAN",
            properties: {
                name: "Panama"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -77.882,
                            7.224
                        ],
                        [
                            -77.353,
                            8.671
                        ],
                        [
                            -79.573,
                            9.612
                        ],
                        [
                            -82.546,
                            9.566
                        ],
                        [
                            -82.966,
                            8.225
                        ],
                        [
                            -77.882,
                            7.224
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PER",
            properties: {
                name: "Peru"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -69.59,
                            -17.58
                        ],
                        [
                            -68.665,
                            -12.561
                        ],
                        [
                            -69.53,
                            -10.952
                        ],
                        [
                            -72.185,
                            -10.054
                        ],
                        [
                            -73.987,
                            -7.524
                        ],
                        [
                            -72.892,
                            -5.275
                        ],
                        [
                            -69.894,
                            -4.298
                        ],
                        [
                            -70.813,
                            -2.257
                        ],
                        [
                            -73.07,
                            -2.309
                        ],
                        [
                            -75.373,
                            -.152
                        ],
                        [
                            -77.838,
                            -3.003
                        ],
                        [
                            -80.303,
                            -3.405
                        ],
                        [
                            -81.25,
                            -6.137
                        ],
                        [
                            -79.761,
                            -7.194
                        ],
                        [
                            -76.009,
                            -14.649
                        ],
                        [
                            -70.373,
                            -18.348
                        ],
                        [
                            -69.59,
                            -17.58
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PHL",
            properties: {
                name: "Philippines"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                126.377,
                                8.415
                            ],
                            [
                                123.488,
                                8.693
                            ],
                            [
                                124.22,
                                6.161
                            ],
                            [
                                126.377,
                                8.415
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                121.321,
                                18.504
                            ],
                            [
                                120.39,
                                17.599
                            ],
                            [
                                120.07,
                                14.971
                            ],
                            [
                                122.516,
                                17.094
                            ],
                            [
                                121.321,
                                18.504
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PNG",
            properties: {
                name: "Papua New Guinea"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            141.034,
                            -9.118
                        ],
                        [
                            142.628,
                            -9.327
                        ],
                        [
                            144.744,
                            -7.63
                        ],
                        [
                            147.913,
                            -10.13
                        ],
                        [
                            149.782,
                            -10.393
                        ],
                        [
                            144.584,
                            -3.861
                        ],
                        [
                            141,
                            -2.6
                        ],
                        [
                            141.034,
                            -9.118
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "POL",
            properties: {
                name: "Poland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            15.017,
                            51.107
                        ],
                        [
                            18.853,
                            49.496
                        ],
                        [
                            22.558,
                            49.086
                        ],
                        [
                            23.527,
                            51.578
                        ],
                        [
                            23.484,
                            53.912
                        ],
                        [
                            22.731,
                            54.328
                        ],
                        [
                            19.661,
                            54.426
                        ],
                        [
                            14.12,
                            53.757
                        ],
                        [
                            15.017,
                            51.107
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PRI",
            properties: {
                name: "Puerto Rico"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -66.282,
                            18.515
                        ],
                        [
                            -67.101,
                            18.521
                        ],
                        [
                            -67.184,
                            17.947
                        ],
                        [
                            -65.847,
                            17.976
                        ],
                        [
                            -66.282,
                            18.515
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PRK",
            properties: {
                name: "North Korea"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            130.64,
                            42.395
                        ],
                        [
                            126.869,
                            41.817
                        ],
                        [
                            124.266,
                            39.928
                        ],
                        [
                            126.175,
                            37.75
                        ],
                        [
                            128.35,
                            38.612
                        ],
                        [
                            130.64,
                            42.395
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PRT",
            properties: {
                name: "Portugal"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -9.035,
                            41.881
                        ],
                        [
                            -9.527,
                            38.737
                        ],
                        [
                            -7.454,
                            37.098
                        ],
                        [
                            -6.669,
                            41.883
                        ],
                        [
                            -9.035,
                            41.881
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PRY",
            properties: {
                name: "Paraguay"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -62.685,
                            -22.249
                        ],
                        [
                            -57.777,
                            -25.162
                        ],
                        [
                            -56.487,
                            -27.548
                        ],
                        [
                            -54.625,
                            -25.739
                        ],
                        [
                            -55.611,
                            -22.656
                        ],
                        [
                            -57.937,
                            -22.09
                        ],
                        [
                            -58.166,
                            -20.177
                        ],
                        [
                            -61.786,
                            -19.634
                        ],
                        [
                            -62.685,
                            -22.249
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "QAT",
            properties: {
                name: "Qatar"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            50.81,
                            24.755
                        ],
                        [
                            51.39,
                            24.627
                        ],
                        [
                            51.589,
                            25.801
                        ],
                        [
                            51.013,
                            26.007
                        ],
                        [
                            50.81,
                            24.755
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ROU",
            properties: {
                name: "Romania"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            22.711,
                            47.882
                        ],
                        [
                            20.22,
                            46.127
                        ],
                        [
                            22.657,
                            44.235
                        ],
                        [
                            28.558,
                            43.707
                        ],
                        [
                            29.603,
                            45.293
                        ],
                        [
                            28.234,
                            45.488
                        ],
                        [
                            26.619,
                            48.221
                        ],
                        [
                            22.711,
                            47.882
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "RUS",
            properties: {
                name: "Russia"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                22.731,
                                54.328
                            ],
                            [
                                21.268,
                                55.19
                            ],
                            [
                                19.661,
                                54.426
                            ],
                            [
                                22.731,
                                54.328
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                130.634,
                                42.903
                            ],
                            [
                                134.869,
                                43.398
                            ],
                            [
                                140.062,
                                48.447
                            ],
                            [
                                141.345,
                                53.09
                            ],
                            [
                                135.126,
                                54.73
                            ],
                            [
                                142.198,
                                59.04
                            ],
                            [
                                151.266,
                                58.781
                            ],
                            [
                                156.721,
                                61.434
                            ],
                            [
                                160.121,
                                60.544
                            ],
                            [
                                155.434,
                                55.381
                            ],
                            [
                                156.79,
                                51.011
                            ],
                            [
                                162.117,
                                54.855
                            ],
                            [
                                163.539,
                                59.869
                            ],
                            [
                                170.699,
                                60.336
                            ],
                            [
                                179.37,
                                62.983
                            ],
                            [
                                180,
                                64.98
                            ],
                            [
                                180,
                                68.964
                            ],
                            [
                                175.724,
                                69.877
                            ],
                            [
                                160.941,
                                69.437
                            ],
                            [
                                157.007,
                                71.031
                            ],
                            [
                                140.468,
                                72.849
                            ],
                            [
                                139.87,
                                71.488
                            ],
                            [
                                128.46,
                                71.98
                            ],
                            [
                                126.976,
                                73.565
                            ],
                            [
                                113.969,
                                73.595
                            ],
                            [
                                111.077,
                                76.71
                            ],
                            [
                                98.923,
                                76.447
                            ],
                            [
                                80.511,
                                73.648
                            ],
                            [
                                69.94,
                                73.04
                            ],
                            [
                                63.504,
                                69.547
                            ],
                            [
                                53.717,
                                68.857
                            ],
                            [
                                43.95,
                                66.069
                            ],
                            [
                                32.133,
                                69.906
                            ],
                            [
                                28.592,
                                69.065
                            ],
                            [
                                29.977,
                                67.698
                            ],
                            [
                                30.211,
                                61.78
                            ],
                            [
                                28.132,
                                59.301
                            ],
                            [
                                27.717,
                                57.792
                            ],
                            [
                                27.288,
                                57.475
                            ],
                            [
                                28.177,
                                56.169
                            ],
                            [
                                30.874,
                                55.551
                            ],
                            [
                                32.305,
                                53.133
                            ],
                            [
                                31.305,
                                53.074
                            ],
                            [
                                31.54,
                                52.742
                            ],
                            [
                                32.412,
                                52.289
                            ],
                            [
                                35.022,
                                51.208
                            ],
                            [
                                35.356,
                                50.577
                            ],
                            [
                                38.595,
                                49.926
                            ],
                            [
                                40.081,
                                49.307
                            ],
                            [
                                39.738,
                                47.899
                            ],
                            [
                                38.255,
                                47.546
                            ],
                            [
                                38.224,
                                47.102
                            ],
                            [
                                37.539,
                                44.657
                            ],
                            [
                                39.955,
                                43.435
                            ],
                            [
                                40.077,
                                43.553
                            ],
                            [
                                44.538,
                                42.712
                            ],
                            [
                                45.47,
                                42.503
                            ],
                            [
                                46.405,
                                41.861
                            ],
                            [
                                47.987,
                                41.406
                            ],
                            [
                                46.682,
                                44.609
                            ],
                            [
                                49.101,
                                46.399
                            ],
                            [
                                48.695,
                                47.076
                            ],
                            [
                                46.466,
                                48.394
                            ],
                            [
                                47.549,
                                50.455
                            ],
                            [
                                50.767,
                                51.693
                            ],
                            [
                                54.533,
                                51.026
                            ],
                            [
                                59.642,
                                50.545
                            ],
                            [
                                60.978,
                                53.665
                            ],
                            [
                                65.179,
                                54.354
                            ],
                            [
                                68.169,
                                54.97
                            ],
                            [
                                73.426,
                                53.49
                            ],
                            [
                                76.891,
                                54.491
                            ],
                            [
                                80.036,
                                50.865
                            ],
                            [
                                83.383,
                                51.069
                            ],
                            [
                                87.36,
                                49.215
                            ],
                            [
                                87.751,
                                49.297
                            ],
                            [
                                92.235,
                                50.802
                            ],
                            [
                                94.148,
                                50.481
                            ],
                            [
                                94.816,
                                50.013
                            ],
                            [
                                98.232,
                                50.422
                            ],
                            [
                                100.889,
                                51.517
                            ],
                            [
                                103.677,
                                50.09
                            ],
                            [
                                105.887,
                                50.406
                            ],
                            [
                                110.662,
                                49.13
                            ],
                            [
                                116.679,
                                49.889
                            ],
                            [
                                119.288,
                                50.143
                            ],
                            [
                                120.726,
                                52.516
                            ],
                            [
                                122.246,
                                53.432
                            ],
                            [
                                125.068,
                                53.161
                            ],
                            [
                                127.287,
                                50.74
                            ],
                            [
                                129.398,
                                49.441
                            ],
                            [
                                130.582,
                                48.73
                            ],
                            [
                                133.374,
                                48.183
                            ],
                            [
                                135.026,
                                48.478
                            ],
                            [
                                133.77,
                                46.117
                            ],
                            [
                                131.883,
                                45.321
                            ],
                            [
                                131.289,
                                44.112
                            ],
                            [
                                130.634,
                                42.903
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "RWA",
            properties: {
                name: "Rwanda"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            30.419,
                            -1.135
                        ],
                        [
                            29.579,
                            -1.341
                        ],
                        [
                            29.025,
                            -2.839
                        ],
                        [
                            30.47,
                            -2.414
                        ],
                        [
                            30.758,
                            -2.287
                        ],
                        [
                            30.419,
                            -1.135
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ESH",
            properties: {
                name: "Western Sahara"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -17.02,
                            21.422
                        ],
                        [
                            -17.063,
                            21
                        ],
                        [
                            -12.929,
                            21.327
                        ],
                        [
                            -11.969,
                            25.933
                        ],
                        [
                            -8.684,
                            27.396
                        ],
                        [
                            -8.666,
                            27.656
                        ],
                        [
                            -8.818,
                            27.656
                        ],
                        [
                            -11.393,
                            26.883
                        ],
                        [
                            -14.751,
                            21.501
                        ],
                        [
                            -17.02,
                            21.422
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SAU",
            properties: {
                name: "Saudi Arabia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            42.779,
                            16.348
                        ],
                        [
                            43.381,
                            17.58
                        ],
                        [
                            47,
                            16.95
                        ],
                        [
                            49.117,
                            18.617
                        ],
                        [
                            52,
                            19
                        ],
                        [
                            55,
                            20
                        ],
                        [
                            55.208,
                            22.708
                        ],
                        [
                            52.001,
                            23.001
                        ],
                        [
                            51.58,
                            24.245
                        ],
                        [
                            51.39,
                            24.627
                        ],
                        [
                            50.81,
                            24.755
                        ],
                        [
                            48.416,
                            28.552
                        ],
                        [
                            46.569,
                            29.099
                        ],
                        [
                            44.709,
                            29.179
                        ],
                        [
                            39.195,
                            32.161
                        ],
                        [
                            37.999,
                            30.509
                        ],
                        [
                            34.956,
                            29.357
                        ],
                        [
                            35.13,
                            28.063
                        ],
                        [
                            38.493,
                            23.688
                        ],
                        [
                            39.139,
                            21.292
                        ],
                        [
                            42.779,
                            16.348
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SDN",
            properties: {
                name: "Sudan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            33.963,
                            9.464
                        ],
                        [
                            33.962,
                            9.584
                        ],
                        [
                            36.43,
                            14.422
                        ],
                        [
                            36.853,
                            16.957
                        ],
                        [
                            38.41,
                            17.998
                        ],
                        [
                            36.866,
                            22
                        ],
                        [
                            25,
                            22
                        ],
                        [
                            23.838,
                            19.58
                        ],
                        [
                            23.887,
                            15.611
                        ],
                        [
                            22.038,
                            12.955
                        ],
                        [
                            22.864,
                            11.142
                        ],
                        [
                            23.806,
                            8.666
                        ],
                        [
                            23.887,
                            8.62
                        ],
                        [
                            25.07,
                            10.274
                        ],
                        [
                            28.967,
                            9.398
                        ],
                        [
                            33.207,
                            10.72
                        ],
                        [
                            33.963,
                            9.464
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SSD",
            properties: {
                name: "South Sudan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            33.963,
                            9.464
                        ],
                        [
                            33.207,
                            10.72
                        ],
                        [
                            28.967,
                            9.398
                        ],
                        [
                            25.07,
                            10.274
                        ],
                        [
                            23.887,
                            8.62
                        ],
                        [
                            24.567,
                            8.229
                        ],
                        [
                            27.374,
                            5.234
                        ],
                        [
                            29.716,
                            4.601
                        ],
                        [
                            30.834,
                            3.509
                        ],
                        [
                            34.005,
                            4.25
                        ],
                        [
                            35.298,
                            5.506
                        ],
                        [
                            33.975,
                            8.685
                        ],
                        [
                            33.963,
                            9.464
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SEN",
            properties: {
                name: "Senegal"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -16.714,
                            13.595
                        ],
                        [
                            -15.625,
                            13.624
                        ],
                        [
                            -15.931,
                            13.13
                        ],
                        [
                            -16.842,
                            13.151
                        ],
                        [
                            -16.677,
                            12.385
                        ],
                        [
                            -13.7,
                            12.586
                        ],
                        [
                            -11.514,
                            12.443
                        ],
                        [
                            -12.171,
                            14.617
                        ],
                        [
                            -14.577,
                            16.598
                        ],
                        [
                            -16.463,
                            16.135
                        ],
                        [
                            -16.714,
                            13.595
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SLB",
            properties: {
                name: "Solomon Islands"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            159.875,
                            -8.337
                        ],
                        [
                            159.64,
                            -8.02
                        ],
                        [
                            158.36,
                            -7.32
                        ],
                        [
                            158.586,
                            -7.755
                        ],
                        [
                            159.134,
                            -8.114
                        ],
                        [
                            159.875,
                            -8.337
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SLE",
            properties: {
                name: "Sierra Leone"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -11.439,
                            6.786
                        ],
                        [
                            -10.23,
                            8.406
                        ],
                        [
                            -11.117,
                            10.046
                        ],
                        [
                            -13.247,
                            8.903
                        ],
                        [
                            -11.439,
                            6.786
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SLV",
            properties: {
                name: "El Salvador"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -87.793,
                            13.384
                        ],
                        [
                            -89.353,
                            14.424
                        ],
                        [
                            -90.096,
                            13.735
                        ],
                        [
                            -87.793,
                            13.384
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "-99",
            properties: {
                name: "Somaliland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            47.789,
                            8.003
                        ],
                        [
                            48.942,
                            11.394
                        ],
                        [
                            44.118,
                            10.446
                        ],
                        [
                            43.145,
                            11.462
                        ],
                        [
                            42.777,
                            10.927
                        ],
                        [
                            42.928,
                            10.022
                        ],
                        [
                            43.679,
                            9.184
                        ],
                        [
                            47.789,
                            8.003
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SOM",
            properties: {
                name: "Somalia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            41.585,
                            -1.683
                        ],
                        [
                            43.136,
                            .292
                        ],
                        [
                            46.565,
                            2.855
                        ],
                        [
                            49.453,
                            6.805
                        ],
                        [
                            51.045,
                            10.641
                        ],
                        [
                            48.942,
                            11.394
                        ],
                        [
                            47.789,
                            8.003
                        ],
                        [
                            44.964,
                            5.002
                        ],
                        [
                            41.855,
                            3.919
                        ],
                        [
                            40.981,
                            2.785
                        ],
                        [
                            41.585,
                            -1.683
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SRB",
            properties: {
                name: "Republic of Serbia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            22.657,
                            44.235
                        ],
                        [
                            20.22,
                            46.127
                        ],
                        [
                            19.596,
                            46.172
                        ],
                        [
                            19.073,
                            45.522
                        ],
                        [
                            19.39,
                            45.237
                        ],
                        [
                            19.368,
                            44.863
                        ],
                        [
                            19.219,
                            43.524
                        ],
                        [
                            20.258,
                            42.813
                        ],
                        [
                            21.577,
                            42.245
                        ],
                        [
                            22.381,
                            42.32
                        ],
                        [
                            22.657,
                            44.235
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SUR",
            properties: {
                name: "Suriname"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -57.147,
                            5.973
                        ],
                        [
                            -58.045,
                            4.061
                        ],
                        [
                            -56.539,
                            1.9
                        ],
                        [
                            -54.525,
                            2.312
                        ],
                        [
                            -54.4,
                            4.213
                        ],
                        [
                            -53.958,
                            5.757
                        ],
                        [
                            -57.147,
                            5.973
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SVK",
            properties: {
                name: "Slovakia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            18.853,
                            49.496
                        ],
                        [
                            16.96,
                            48.597
                        ],
                        [
                            16.98,
                            48.123
                        ],
                        [
                            22.086,
                            48.422
                        ],
                        [
                            22.558,
                            49.086
                        ],
                        [
                            18.853,
                            49.496
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SVN",
            properties: {
                name: "Slovenia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            13.806,
                            46.509
                        ],
                        [
                            13.938,
                            45.591
                        ],
                        [
                            13.715,
                            45.5
                        ],
                        [
                            16.565,
                            46.504
                        ],
                        [
                            16.202,
                            46.852
                        ],
                        [
                            13.806,
                            46.509
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SWE",
            properties: {
                name: "Sweden"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            11.027,
                            58.856
                        ],
                        [
                            12.943,
                            55.362
                        ],
                        [
                            15.88,
                            56.104
                        ],
                        [
                            18.788,
                            60.082
                        ],
                        [
                            17.848,
                            62.749
                        ],
                        [
                            23.903,
                            66.007
                        ],
                        [
                            20.646,
                            69.106
                        ],
                        [
                            16.769,
                            68.014
                        ],
                        [
                            11.931,
                            63.128
                        ],
                        [
                            11.027,
                            58.856
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SWZ",
            properties: {
                name: "Swaziland"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            32.072,
                            -26.734
                        ],
                        [
                            31.838,
                            -25.843
                        ],
                        [
                            31.044,
                            -25.731
                        ],
                        [
                            30.686,
                            -26.744
                        ],
                        [
                            32.072,
                            -26.734
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "SYR",
            properties: {
                name: "Syria"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            38.792,
                            33.379
                        ],
                        [
                            41.006,
                            34.419
                        ],
                        [
                            42.35,
                            37.23
                        ],
                        [
                            36.15,
                            35.822
                        ],
                        [
                            35.998,
                            34.645
                        ],
                        [
                            35.821,
                            33.277
                        ],
                        [
                            35.72,
                            32.709
                        ],
                        [
                            38.792,
                            33.379
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TCD",
            properties: {
                name: "Chad"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            14.496,
                            12.859
                        ],
                        [
                            14.96,
                            11.556
                        ],
                        [
                            15.279,
                            7.422
                        ],
                        [
                            17.965,
                            7.891
                        ],
                        [
                            22.864,
                            11.142
                        ],
                        [
                            22.038,
                            12.955
                        ],
                        [
                            23.887,
                            15.611
                        ],
                        [
                            23.838,
                            19.58
                        ],
                        [
                            15.861,
                            23.41
                        ],
                        [
                            14.851,
                            22.863
                        ],
                        [
                            15.097,
                            21.309
                        ],
                        [
                            15.487,
                            20.73
                        ],
                        [
                            15.248,
                            16.627
                        ],
                        [
                            13.54,
                            14.367
                        ],
                        [
                            14.496,
                            12.859
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TGO",
            properties: {
                name: "Togo"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            1.865,
                            6.142
                        ],
                        [
                            .9,
                            10.997
                        ],
                        [
                            .024,
                            11.019
                        ],
                        [
                            1.06,
                            5.929
                        ],
                        [
                            1.865,
                            6.142
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "THA",
            properties: {
                name: "Thailand"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            102.585,
                            12.187
                        ],
                        [
                            102.988,
                            14.226
                        ],
                        [
                            105.219,
                            14.273
                        ],
                        [
                            103.956,
                            18.241
                        ],
                        [
                            102.114,
                            18.109
                        ],
                        [
                            100.116,
                            20.418
                        ],
                        [
                            98.254,
                            19.708
                        ],
                        [
                            97.859,
                            17.568
                        ],
                        [
                            99.587,
                            11.893
                        ],
                        [
                            98.554,
                            9.933
                        ],
                        [
                            100.086,
                            6.464
                        ],
                        [
                            102.141,
                            6.222
                        ],
                        [
                            99.154,
                            9.963
                        ],
                        [
                            100.978,
                            13.413
                        ],
                        [
                            102.585,
                            12.187
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TJK",
            properties: {
                name: "Tajikistan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            71.014,
                            40.244
                        ],
                        [
                            69.329,
                            40.728
                        ],
                        [
                            67.83,
                            37.145
                        ],
                        [
                            71.542,
                            37.906
                        ],
                        [
                            74.98,
                            37.42
                        ],
                        [
                            73.675,
                            39.431
                        ],
                        [
                            71.014,
                            40.244
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TKM",
            properties: {
                name: "Turkmenistan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            61.211,
                            35.65
                        ],
                        [
                            66.519,
                            37.363
                        ],
                        [
                            60.083,
                            41.425
                        ],
                        [
                            55.968,
                            41.309
                        ],
                        [
                            52.502,
                            41.783
                        ],
                        [
                            53.922,
                            37.199
                        ],
                        [
                            59.235,
                            37.413
                        ],
                        [
                            61.211,
                            35.65
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TLS",
            properties: {
                name: "East Timor"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            124.969,
                            -8.893
                        ],
                        [
                            125.089,
                            -9.393
                        ],
                        [
                            126.968,
                            -8.668
                        ],
                        [
                            126.645,
                            -8.398
                        ],
                        [
                            124.969,
                            -8.893
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TTO",
            properties: {
                name: "Trinidad and Tobago"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -61.68,
                            10.76
                        ],
                        [
                            -61.77,
                            10
                        ],
                        [
                            -60.935,
                            10.11
                        ],
                        [
                            -60.895,
                            10.855
                        ],
                        [
                            -61.68,
                            10.76
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TUN",
            properties: {
                name: "Tunisia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            9.482,
                            30.308
                        ],
                        [
                            11.489,
                            33.137
                        ],
                        [
                            10.94,
                            35.699
                        ],
                        [
                            8.421,
                            36.946
                        ],
                        [
                            7.613,
                            33.344
                        ],
                        [
                            9.482,
                            30.308
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TUR",
            properties: {
                name: "Turkey"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                41.554,
                                41.536
                            ],
                            [
                                38.348,
                                40.949
                            ],
                            [
                                35.168,
                                42.04
                            ],
                            [
                                29.24,
                                41.22
                            ],
                            [
                                26.171,
                                39.464
                            ],
                            [
                                27.641,
                                36.659
                            ],
                            [
                                36.15,
                                35.822
                            ],
                            [
                                42.35,
                                37.23
                            ],
                            [
                                44.773,
                                37.17
                            ],
                            [
                                44.226,
                                37.972
                            ],
                            [
                                44.794,
                                39.713
                            ],
                            [
                                43.583,
                                41.092
                            ],
                            [
                                41.554,
                                41.536
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                26.057,
                                40.824
                            ],
                            [
                                27.997,
                                42.007
                            ],
                            [
                                26.117,
                                41.827
                            ],
                            [
                                26.057,
                                40.824
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TWN",
            properties: {
                name: "Taiwan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            121.778,
                            24.394
                        ],
                        [
                            120.106,
                            23.556
                        ],
                        [
                            120.747,
                            21.971
                        ],
                        [
                            121.778,
                            24.394
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "TZA",
            properties: {
                name: "United Republic of Tanzania"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            33.904,
                            -.95
                        ],
                        [
                            30.419,
                            -1.135
                        ],
                        [
                            30.758,
                            -2.287
                        ],
                        [
                            29.754,
                            -4.452
                        ],
                        [
                            29.34,
                            -4.5
                        ],
                        [
                            29.42,
                            -5.94
                        ],
                        [
                            31.158,
                            -8.595
                        ],
                        [
                            32.759,
                            -9.231
                        ],
                        [
                            33.941,
                            -9.694
                        ],
                        [
                            34.56,
                            -11.52
                        ],
                        [
                            36.775,
                            -11.595
                        ],
                        [
                            38.428,
                            -11.285
                        ],
                        [
                            39.187,
                            -8.486
                        ],
                        [
                            39.202,
                            -4.677
                        ],
                        [
                            37.699,
                            -3.097
                        ],
                        [
                            33.904,
                            -.95
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "UGA",
            properties: {
                name: "Uganda"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            30.419,
                            -1.135
                        ],
                        [
                            33.904,
                            -.95
                        ],
                        [
                            35.036,
                            1.906
                        ],
                        [
                            34.005,
                            4.25
                        ],
                        [
                            30.834,
                            3.509
                        ],
                        [
                            31.174,
                            2.204
                        ],
                        [
                            29.876,
                            .597
                        ],
                        [
                            29.588,
                            -.587
                        ],
                        [
                            29.579,
                            -1.341
                        ],
                        [
                            30.419,
                            -1.135
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "UKR",
            properties: {
                name: "Ukraine"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            31.786,
                            52.102
                        ],
                        [
                            29.255,
                            51.368
                        ],
                        [
                            23.527,
                            51.578
                        ],
                        [
                            22.558,
                            49.086
                        ],
                        [
                            22.086,
                            48.422
                        ],
                        [
                            22.711,
                            47.882
                        ],
                        [
                            26.619,
                            48.221
                        ],
                        [
                            29.123,
                            47.849
                        ],
                        [
                            28.234,
                            45.488
                        ],
                        [
                            29.603,
                            45.293
                        ],
                        [
                            38.224,
                            47.102
                        ],
                        [
                            38.255,
                            47.546
                        ],
                        [
                            39.738,
                            47.899
                        ],
                        [
                            40.081,
                            49.307
                        ],
                        [
                            38.595,
                            49.926
                        ],
                        [
                            35.356,
                            50.577
                        ],
                        [
                            35.022,
                            51.208
                        ],
                        [
                            32.412,
                            52.289
                        ],
                        [
                            31.786,
                            52.102
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "URY",
            properties: {
                name: "Uruguay"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -57.625,
                            -30.216
                        ],
                        [
                            -58.427,
                            -33.909
                        ],
                        [
                            -54.936,
                            -34.953
                        ],
                        [
                            -53.374,
                            -33.768
                        ],
                        [
                            -53.788,
                            -32.047
                        ],
                        [
                            -57.625,
                            -30.216
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "USA",
            properties: {
                name: "United States of America"
            },
            geometry: {
                type: "MultiPolygon",
                coordinates: [
                    [
                        [
                            [
                                -67.137,
                                45.138
                            ],
                            [
                                -69.237,
                                47.448
                            ],
                            [
                                -71.505,
                                45.008
                            ],
                            [
                                -74.867,
                                45
                            ],
                            [
                                -76.82,
                                43.629
                            ],
                            [
                                -82.439,
                                41.675
                            ],
                            [
                                -82.551,
                                45.348
                            ],
                            [
                                -88.378,
                                48.303
                            ],
                            [
                                -95.159,
                                49
                            ],
                            [
                                -122.84,
                                49
                            ],
                            [
                                -124.687,
                                48.184
                            ],
                            [
                                -123.899,
                                45.523
                            ],
                            [
                                -124.533,
                                42.766
                            ],
                            [
                                -123.727,
                                38.952
                            ],
                            [
                                -120.368,
                                34.447
                            ],
                            [
                                -117.128,
                                32.535
                            ],
                            [
                                -111.024,
                                31.335
                            ],
                            [
                                -106.508,
                                31.755
                            ],
                            [
                                -104.457,
                                29.572
                            ],
                            [
                                -100.958,
                                29.381
                            ],
                            [
                                -99.02,
                                26.37
                            ],
                            [
                                -97.53,
                                25.84
                            ],
                            [
                                -97.37,
                                27.38
                            ],
                            [
                                -94.69,
                                29.48
                            ],
                            [
                                -89.18,
                                30.316
                            ],
                            [
                                -83.71,
                                29.937
                            ],
                            [
                                -81.172,
                                25.201
                            ],
                            [
                                -80.057,
                                26.88
                            ],
                            [
                                -81.49,
                                30.73
                            ],
                            [
                                -78.554,
                                33.861
                            ],
                            [
                                -75.727,
                                35.551
                            ],
                            [
                                -75.722,
                                37.937
                            ],
                            [
                                -73.982,
                                40.628
                            ],
                            [
                                -70.64,
                                41.475
                            ],
                            [
                                -70.116,
                                43.684
                            ],
                            [
                                -67.137,
                                45.138
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                -140.986,
                                69.712
                            ],
                            [
                                -161.909,
                                70.333
                            ],
                            [
                                -168.111,
                                65.67
                            ],
                            [
                                -164.563,
                                63.146
                            ],
                            [
                                -166.121,
                                61.5
                            ],
                            [
                                -157.723,
                                57.57
                            ],
                            [
                                -148.018,
                                59.978
                            ],
                            [
                                -139.868,
                                59.538
                            ],
                            [
                                -134.078,
                                58.123
                            ],
                            [
                                -130.008,
                                55.916
                            ],
                            [
                                -132.73,
                                57.693
                            ],
                            [
                                -134.271,
                                58.861
                            ],
                            [
                                -138.341,
                                59.562
                            ],
                            [
                                -140.998,
                                60.306
                            ],
                            [
                                -140.986,
                                69.712
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "UZB",
            properties: {
                name: "Uzbekistan"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            66.519,
                            37.363
                        ],
                        [
                            67.83,
                            37.145
                        ],
                        [
                            69.329,
                            40.728
                        ],
                        [
                            71.014,
                            40.244
                        ],
                        [
                            70.962,
                            42.266
                        ],
                        [
                            66.714,
                            41.168
                        ],
                        [
                            64.901,
                            43.728
                        ],
                        [
                            62.013,
                            43.504
                        ],
                        [
                            58.503,
                            45.587
                        ],
                        [
                            55.929,
                            44.996
                        ],
                        [
                            55.968,
                            41.309
                        ],
                        [
                            60.083,
                            41.425
                        ],
                        [
                            66.519,
                            37.363
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "VEN",
            properties: {
                name: "Venezuela"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            -71.332,
                            11.776
                        ],
                        [
                            -72.905,
                            10.45
                        ],
                        [
                            -71.96,
                            6.992
                        ],
                        [
                            -67.823,
                            4.504
                        ],
                        [
                            -66.876,
                            1.253
                        ],
                        [
                            -64.199,
                            1.493
                        ],
                        [
                            -64.368,
                            3.797
                        ],
                        [
                            -60.734,
                            5.2
                        ],
                        [
                            -59.758,
                            8.367
                        ],
                        [
                            -62.73,
                            10.42
                        ],
                        [
                            -68.194,
                            10.555
                        ],
                        [
                            -71.332,
                            11.776
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "VNM",
            properties: {
                name: "Vietnam"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            108.05,
                            21.552
                        ],
                        [
                            105.329,
                            23.352
                        ],
                        [
                            102.17,
                            22.465
                        ],
                        [
                            104.435,
                            20.759
                        ],
                        [
                            105.095,
                            18.667
                        ],
                        [
                            107.565,
                            15.202
                        ],
                        [
                            107.383,
                            14.202
                        ],
                        [
                            107.491,
                            12.337
                        ],
                        [
                            104.334,
                            10.487
                        ],
                        [
                            105.158,
                            8.6
                        ],
                        [
                            109.2,
                            11.667
                        ],
                        [
                            108.877,
                            15.277
                        ],
                        [
                            105.662,
                            19.058
                        ],
                        [
                            108.05,
                            21.552
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "VUT",
            properties: {
                name: "Vanuatu"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            167.108,
                            -14.934
                        ],
                        [
                            166.793,
                            -15.669
                        ],
                        [
                            167.27,
                            -15.74
                        ],
                        [
                            167.108,
                            -14.934
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "PSE",
            properties: {
                name: "West Bank"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            35.546,
                            32.394
                        ],
                        [
                            35.184,
                            32.533
                        ],
                        [
                            34.927,
                            31.353
                        ],
                        [
                            35.398,
                            31.489
                        ],
                        [
                            35.546,
                            32.394
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "YEM",
            properties: {
                name: "Yemen"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            53.109,
                            16.651
                        ],
                        [
                            52,
                            19
                        ],
                        [
                            49.117,
                            18.617
                        ],
                        [
                            47,
                            16.95
                        ],
                        [
                            43.381,
                            17.58
                        ],
                        [
                            42.779,
                            16.348
                        ],
                        [
                            43.483,
                            12.637
                        ],
                        [
                            48.679,
                            14.003
                        ],
                        [
                            53.109,
                            16.651
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ZAF",
            properties: {
                name: "South Africa"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            16.345,
                            -28.577
                        ],
                        [
                            19.616,
                            -34.819
                        ],
                        [
                            22.574,
                            -33.864
                        ],
                        [
                            25.781,
                            -33.945
                        ],
                        [
                            28.22,
                            -32.772
                        ],
                        [
                            32.462,
                            -28.301
                        ],
                        [
                            32.83,
                            -26.742
                        ],
                        [
                            32.072,
                            -26.734
                        ],
                        [
                            30.686,
                            -26.744
                        ],
                        [
                            31.044,
                            -25.731
                        ],
                        [
                            31.838,
                            -25.843
                        ],
                        [
                            31.191,
                            -22.252
                        ],
                        [
                            29.432,
                            -22.091
                        ],
                        [
                            25.665,
                            -25.487
                        ],
                        [
                            23.312,
                            -25.269
                        ],
                        [
                            21.606,
                            -26.727
                        ],
                        [
                            19.896,
                            -24.768
                        ],
                        [
                            19.895,
                            -28.461
                        ],
                        [
                            16.345,
                            -28.577
                        ]
                    ],
                    [
                        [
                            28.978,
                            -28.956
                        ],
                        [
                            28.848,
                            -30.07
                        ],
                        [
                            27.749,
                            -30.645
                        ],
                        [
                            26.999,
                            -29.876
                        ],
                        [
                            28.978,
                            -28.956
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ZMB",
            properties: {
                name: "Zambia"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            32.759,
                            -9.231
                        ],
                        [
                            31.158,
                            -8.595
                        ],
                        [
                            30.74,
                            -8.34
                        ],
                        [
                            28.735,
                            -8.527
                        ],
                        [
                            28.155,
                            -12.272
                        ],
                        [
                            23.912,
                            -10.927
                        ],
                        [
                            21.934,
                            -12.898
                        ],
                        [
                            21.888,
                            -16.08
                        ],
                        [
                            23.215,
                            -17.523
                        ],
                        [
                            25.084,
                            -17.662
                        ],
                        [
                            25.264,
                            -17.737
                        ],
                        [
                            27.044,
                            -17.938
                        ],
                        [
                            30.274,
                            -15.508
                        ],
                        [
                            33.214,
                            -13.972
                        ],
                        [
                            33.486,
                            -10.526
                        ],
                        [
                            32.759,
                            -9.231
                        ]
                    ]
                ]
            }
        },
        {
            type: "Feature",
            id: "ZWE",
            properties: {
                name: "Zimbabwe"
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [
                            31.191,
                            -22.252
                        ],
                        [
                            32.773,
                            -19.716
                        ],
                        [
                            32.848,
                            -16.713
                        ],
                        [
                            30.274,
                            -15.508
                        ],
                        [
                            27.044,
                            -17.938
                        ],
                        [
                            25.264,
                            -17.737
                        ],
                        [
                            28.021,
                            -21.486
                        ],
                        [
                            29.432,
                            -22.091
                        ],
                        [
                            31.191,
                            -22.252
                        ]
                    ]
                ]
            }
        }
    ]
};
var z = {
    lat: {
        min: -56,
        max: 71
    },
    lng: {
        min: -179,
        max: 179
    }
}, C = (t, e)=>{
    let o = t * 2003750834e-2 / 180, r = Math.log(Math.tan((90 + e) * Math.PI / 360)) / (Math.PI / 180);
    return r = r * 2003750834e-2 / 180, [
        o,
        r
    ];
}, H = (t)=>{
    if ("type" in t && t.type === "FeatureCollection") {
        let e = t.features.map(H);
        return {
            lat: {
                min: Math.min(...e.map((o)=>o.lat.min)),
                max: Math.max(...e.map((o)=>o.lat.max))
            },
            lng: {
                min: Math.min(...e.map((o)=>o.lng.min)),
                max: Math.max(...e.map((o)=>o.lng.max))
            }
        };
    }
    throw new Error("Unknown or unsupported geojson structure");
}, O = new WeakMap, X = (t = x)=>{
    if (!O.has(t)) {
        let e = t.features.reduce((o, r)=>(o[r.id] = r, o), {});
        O.set(t, e);
    }
    return O.get(t);
}, V = (t)=>{
    let e = t.features.reduce((o, r)=>(r.geometry.type === "Polygon" ? o.push(r.geometry.coordinates) : o.push(...r.geometry.coordinates), o), []);
    return {
        type: "Feature",
        id: "multipolygon",
        properties: {
            name: "Combined Polygons"
        },
        geometry: {
            type: "MultiPolygon",
            coordinates: e
        }
    };
}, U = ({ height: t = 0, width: e = 0, countries: o = [], rows: r, columns: a, region: p, radius: l = .3 })=>{
    let n = x;
    if (o.length > 0) {
        let g = X(n);
        n = {
            type: "FeatureCollection",
            features: o.map((i)=>g[i]).filter((i)=>i !== void 0)
        }, p || (p = H(n));
    } else p || (p = z);
    let y = {
        lat: {
            min: Math.max(p.lat.min, -85),
            max: Math.min(p.lat.max, 85)
        },
        lng: p.lng
    }, u = V(n), [s, M] = C(y.lng.min, y.lat.min), [P, R] = C(y.lng.max, y.lat.max), F = P - s, m = R - M;
    e <= 0 ? e = Math.round(t * F / m) : t <= 0 && (t = Math.round(e * m / F));
    let c = {}, d = l * 1.25, A = e - 2 * d, S = t - 2 * d, G = Math.max(r, Math.ceil(r * 1.5)), N = Math.max(a, Math.ceil(a * 1.5));
    for(let g = 0; g < G; g++)for(let i = 0; i < N; i++){
        let B = d + i / (N - 1) * A, L = d + g / (G - 1) * S, h = [
            B / e * F + s,
            R - L / t * m
        ], b = h[0] * 180 / 2003750834e-2, I = Math.atan(Math.exp(h[1] * Math.PI / 2003750834e-2)) * 360 / Math.PI - 90, f = Math.max(-180, Math.min(180, b)), E = Math.max(-85, Math.min(85, I));
        if (v([
            f,
            E
        ], u)) {
            let Y = Math.round(i / N * (a - 1)), Z = Math.round(g / G * (r - 1)), K = d + Y / (a - 1) * A, J = d + Z / (r - 1) * S, w = `${Math.round(K)};${Math.round(J)}`;
            c[w] = {
                x: K,
                y: J
            };
        }
    }
    return {
        points: c,
        X_MIN: s,
        Y_MAX: R,
        X_RANGE: F,
        Y_RANGE: m,
        height: t,
        width: e
    };
}, k = (t, e)=>{
    let [o, r] = t, a = !1;
    for(let p = 0, l = e.length - 1; p < e.length; l = p++){
        let n = e[p], y = e[l];
        if (!n || !y) continue;
        let [u, s] = n, [M, P] = y;
        s > r != P > r && o < (M - u) * (r - s) / (P - s) + u && (a = !a);
    }
    return a;
}, _ = (t, e)=>{
    let o = e[0];
    if (!o || !k(t, o)) return !1;
    for(let r = 1; r < e.length; r++){
        let a = e[r];
        if (a && k(t, a)) return !1;
    }
    return !0;
}, v = (t, e)=>{
    let { geometry: o } = e;
    return o.coordinates.some((a)=>_(t, a));
};
var r1 = ({ height: t, width: e, countries: o, region: r, radius: a = .3, mapSamples: p = 6e3 })=>{
    let l = e / t, n = Math.round(Math.sqrt(p / l)), y = Math.round(n * l), u = JSON.stringify({
        height: t,
        width: e,
        countries: o,
        region: r,
        rows: n,
        columns: y,
        radius: a
    }), { points: s, X_MIN: M, Y_MAX: P, X_RANGE: R, Y_RANGE: F } = U({
        height: t,
        width: e,
        countries: o,
        region: r,
        rows: n,
        columns: y,
        radius: a
    }), m = T.get(u);
    m || (m = U({
        height: t,
        width: e,
        countries: o,
        region: r,
        rows: n,
        columns: y,
        radius: a
    }), T.set(u, m));
    let c = a * 1.25, d = e - 2 * c, A = t - 2 * c;
    return {
        points: Object.values(s),
        addMarkers: (S)=>S.map((G)=>{
                let { lat: N, lng: D, ...g } = G, [i, B] = C(D, N), L = (i - M) / R, h = (P - B) / F, b = Math.round(L * (y - 1)), I = Math.round(h * (n - 1)), f = c + b / (y - 1) * d, E = c + I / (n - 1) * A;
                return {
                    x: f,
                    y: E,
                    ...g
                };
            })
    };
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", METADATA_0 => \"[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico.mjs { IMAGE => \\\"[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/Desktop/Website_dev/portfolio2.0/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/Desktop/Website_dev/portfolio2.0/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i('[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico.mjs { IMAGE => "[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
;
const __TURBOPACK__layout__$23$1__ = ()=>__turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__not$2d$found__$23$2__ = ()=>__turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__forbidden__$23$3__ = ()=>__turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__unauthorized__$23$4__ = ()=>__turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__global$2d$error__$23$5__ = ()=>__turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__page__$23$6__ = ()=>__turbopack_context__.r("[project]/Desktop/Website_dev/portfolio2.0/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    __TURBOPACK__page__$23$6__,
                    "[project]/Desktop/Website_dev/portfolio2.0/app/page.tsx"
                ]
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["fillMetadataSegment"])("//", await props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            __TURBOPACK__layout__$23$1__,
            "[project]/Desktop/Website_dev/portfolio2.0/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$2__,
            "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$3__,
            "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$4__,
            "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$5__,
            "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next/dev") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    if (routeModule.isDev) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
    }
    const isMinimalMode = Boolean(("TURBOPACK compile-time value", false) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode'));
    let srcPage = "/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns, deploymentId } = prepareResult;
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    // We use the resolvedPathname instead of the parsedUrl.pathname because it
    // is not rewritten as resolvedPathname is. This will ensure that the correct
    // prerender info is used instead of using the original pathname as the
    // source. If however PPR is enabled and cacheComponents is disabled, we
    // treat the pathname as dynamic. Currently, there's a bug in the PPR
    // implementation that incorrectly leaves %%drp placeholders in the output of
    // parallel routes. This is addressed with cacheComponents.
    const prerenderInfo = nextConfig.experimental.ppr && !nextConfig.cacheComponents && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(resolvedPathname) ? null : routeModule.match(resolvedPathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') && couldSupportPPR && req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_RESUME_HEADER"]] === '1' && req.method === 'POST') {
        // Decode the postponed state from the request body, it will come as
        // an array of buffers, so collect them and then concat them to form
        // the string.
        const body = [];
        for await (const chunk of req){
            body.push(chunk);
        }
        const postponed = Buffer.concat(body).toString('utf8');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'postponed', postponed);
    }
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // During a PPR revalidation, the RSC request is not dynamic if we do not have the postponed data.
    // We only attach the postponed data during a resume. If there's no postponed data, then it must be a revalidation.
    // This is to ensure that we don't bypass the cache during a revalidation.
    if (isMinimalMode) {
        isDynamicRSCRequest = isDynamicRSCRequest && !!minimalPostponed;
    }
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    const serveStreamingMetadata = isHtmlBot && isRoutePPREnabled ? false : !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && // If this is a html bot request and PPR is enabled, then we don't want
    // to serve a static response.
    !(isHtmlBot && isRoutePPREnabled));
    // When a page supports cacheComponents, we can support RDC for Navigations
    const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
    // In development, we always want to generate dynamic HTML.
    const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof minimalPostponed === 'string' || // If this handler supports onCacheEntryV2, then we can only support
    // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
    // doesn't support it we must fallback to the default behavior.
    (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
    // which will trigger the `supportsDynamicResponse` to be true.
    isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    const render404 = async ()=>{
        // TODO: should route-module itself handle rendering the 404
        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
            await routerServerContext.render404(req, res, parsedUrl, false);
        } else {
            res.end('This page could not be found');
        }
        return null;
    };
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${srcPage}`);
                }
            });
        };
        const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache');
        const doRender = async ({ span, postponed, fallbackRouteParams, forceStaticRender })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                    sendErrorsToBrowser: routerServerContext == null ? void 0 : routerServerContext.sendErrorsToBrowser,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    images: nextConfig.images,
                    previewProps: prerenderManifest.preview,
                    deploymentId: deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache,
                    cacheLifeProfiles: nextConfig.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    cacheComponents: Boolean(nextConfig.cacheComponents),
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                        clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext, silenceLog)=>routeModule.onRequestError(req, error, errorContext, silenceLog, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                context.renderOpts.nextExport = true;
                context.renderOpts.supportsDynamicResponse = false;
                context.renderOpts.isDebugDynamicAccesses = isDebugDynamicAccesses;
            }
            // When we're revalidating in the background, we should not allow dynamic
            // responses.
            if (forceStaticRender) {
                context.renderOpts.supportsDynamicResponse = false;
            }
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousIncrementalCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    if (nextConfig.experimental.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                // When cacheComponents is enabled, we can use the fallback
                // response if the request is not a dynamic RSC request because the
                // RSC data when this feature flag is enabled does not contain any
                // param references. Without this feature flag enabled, the RSC data
                // contains param references, and therefore we can't use the fallback.
                if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                    const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                    const fallbackRouteParams = // can use the manifest fallback route params.
                    isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    const fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams,
                                forceStaticRender: false
                            }),
                        waitUntil: ctx.waitUntil,
                        isMinimalMode
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // If this is a dynamic RSC request, we should use the postponed data from
            // the static render (if available). This ensures that we can utilize the
            // resume data cache (RDC) from the static render to ensure that the data
            // is consistent between the static and dynamic renders.
            if (supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && isDynamicRSCRequest && // We don't typically trigger an on-demand revalidation for dynamic RSC
            // requests, as we're typically revalidating the page in the background
            // instead. However, if the cache entry is stale, we should trigger a
            // background revalidation on dynamic RSC requests. This prevents us
            // from entering an infinite loop of revalidations.
            !forceStaticRender) {
                const incrementalCacheEntry = await incrementalCache.get(resolvedPathname, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE,
                    isRoutePPREnabled: true,
                    isFallback: false
                });
                // If the cache entry is found, we should use the postponed data from
                // the cache.
                if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    // CRITICAL: we're assigning the postponed data from the cache entry
                    // here as we're using the RDC to resume the render.
                    postponed = incrementalCacheEntry.value.postponed;
                    // If the cache entry is stale, we should trigger a background
                    // revalidation so that subsequent requests will get a fresh response.
                    if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                    // the requested revalidation flow is either foreground or
                    // background.
                    (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                        // We want to schedule this on the next tick to ensure that the
                        // render is not blocked on it.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(async ()=>{
                            const responseCache = routeModule.getResponseCache(req);
                            try {
                                await responseCache.revalidate(resolvedPathname, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                        ...c,
                                        // CRITICAL: we need to set this to true as we're
                                        // revalidating in the background and typically this dynamic
                                        // RSC request is not treated as static.
                                        forceStaticRender: true
                                    }), // previous cache entry here (which is stale) will switch on
                                // isOnDemandRevalidate and break the prerendering.
                                null, hasResolved, ctx.waitUntil);
                            } catch (err) {
                                console.error('Error revalidating the page in the background', err);
                            }
                        });
                    }
                }
            }
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            const fallbackRouteParams = // can use the manifest fallback route params if we need to render the
            // fallback shell.
            isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams,
                forceStaticRender
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil,
                isMinimalMode
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!isMinimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (isDynamicRSCRequest) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options. If we support RDC for Navigations, we
            // prefer the `onCacheEntryV2` callback. Once RDC for Navigations is the
            // default, we can remove the fallback to `onCacheEntry` as
            // `onCacheEntryV2` is now fully supported.
            const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry(cacheEntry, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL') ?? req.url
                });
                if (finished) return null;
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!isMinimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone && !isDynamicRSCRequest) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    // If the response is not an RSC response, then we can't serve it.
                    if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                        if (nextConfig.cacheComponents) {
                            res.statusCode = 404;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                                req,
                                res,
                                generateEtags: nextConfig.generateEtags,
                                poweredByHeader: nextConfig.poweredByHeader,
                                result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                                cacheControl: cacheEntry.cacheControl
                            });
                        } else {
                            // Otherwise this case is not expected.
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`), "__NEXT_ERROR_CODE", {
                                value: "E789",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            const body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || isMinimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null,
                forceStaticRender: false
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${srcPage}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            const silenceLog = false;
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isStaticGeneration: isSSG,
                    isOnDemandRevalidate
                })
            }, silenceLog, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", METADATA_0 => \"[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico.mjs { IMAGE => \\\"[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/Desktop/Website_dev/portfolio2.0/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/Desktop/Website_dev/portfolio2.0/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"],
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"],
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico.mjs { IMAGE => \\"[project]/Desktop/Website_dev/portfolio2.0/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Desktop/Website_dev/portfolio2.0/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Desktop/Website_dev/portfolio2.0/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Website_dev$2f$portfolio2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/Website_dev/portfolio2.0/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=b5c90_4cbcb96e._.js.map