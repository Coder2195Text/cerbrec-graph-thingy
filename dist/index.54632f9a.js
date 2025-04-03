// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"c2lOS":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6f8beed154632f9a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gg0zR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "organize", ()=>organize);
var _jeffyJs = require("./jeffy.js");
var _example = require("./example");
/**
* THIS ALGORITHM WILL NOT WORK FOR CYCLIC GRAPHS!!!
  */ const GAP_SIZE = 325;
function interleave(arr, thing) {
    return [].concat(...arr.map((n)=>[
            n,
            thing
        ])).slice(0, -1);
}
function organize(composite) {
    const nodes = {
        "global_input": {
            id: "global_input",
            children: [],
            parents: [],
            op: {
                position: {
                    x: 0,
                    y: 0
                },
                name: "global_input",
                inputs: composite.inputs,
                outputs: composite.inputs,
                type: "PRIMITIVE_OPERATION"
            }
        },
        global_output: {
            id: "global_output",
            children: [],
            parents: [],
            op: {
                position: {
                    x: 0,
                    y: 0
                },
                name: "global_output",
                inputs: composite.outputs,
                outputs: composite.outputs,
                type: "PRIMITIVE_OPERATION"
            }
        }
    };
    function height(op) {
        return (Math.max(op.inputs.length, op.outputs.length) + 1) * 50;
    }
    let visited = {};
    // first pass add nodes
    for (const op of composite.operations || []){
        let operation = op;
        operation.position = {
            x: 0,
            y: 0
        };
        nodes[operation.name] = {
            id: operation.name,
            children: [],
            parents: [],
            op: operation
        };
    }
    // second pass, link together
    for (const link of composite.links || []){
        const parent = nodes[link.source.operation == "this" ? "global_input" : link.source.operation];
        const child = nodes[link.sink.operation == "this" ? "global_output" : link.sink.operation];
        if (!parent.children.includes(child)) parent.children.push(child);
        if (!child.parents.includes(parent)) child.parents.push(parent);
    }
    const node_array = Object.values(nodes);
    const roots = node_array.filter((node)=>node.parents.length == 0);
    const COLUMNS = Math.max(...roots.map((root)=>{
        visited = {};
        return depth(root);
    })) + 1;
    function depth(node) {
        if (visited[node.id]) return 0;
        else visited[node.id] = true;
        if (node.children.length === 0) return 0;
        return Math.max(...node.children.map(depth)) + 1;
    }
    const grid = new Array(COLUMNS);
    for(let i = 0; i < COLUMNS; i++)grid[i] = [];
    // start with the ends
    let root_nodes = roots;
    let column = 0;
    visited = {};
    let column_lookup = {};
    while(root_nodes.length){
        let current_y = 0;
        let new_roots = [];
        for(let i = 0; i < root_nodes.length; i++){
            const n = root_nodes[i];
            visited[n.id] = true;
            grid[column][i] = n;
            column_lookup[n.id] = column;
            if (n.op) {
                n.op.position.x = GAP_SIZE * (2 * column + 1);
                n.op.position.y = current_y;
                current_y += height(n.op) + GAP_SIZE;
            }
            new_roots.push(...n.children.filter((child)=>child.parents.every((parent)=>visited[parent.id])));
        }
        root_nodes = new_roots;
        // console.log(new_roots, "new roots", column);
        column++;
    }
    grid[0] = grid[0].filter((n)=>n.id != "global_input");
    // TODO: arange the node links nicely;
    //
    //
    const gaps = grid.map((column, i)=>{
        const gaps = [];
        for(let j = 0; j < column.length; j++){
            const node = column[j];
            const next_node = column[j + 1];
            if (!node.op) continue;
            gaps.push([
                node.op.position.y + height(node.op) + GAP_SIZE / 2,
                next_node?.op ? next_node.op.position.y : 1000000
            ]);
        }
        return gaps;
    });
    function calculate_y(op, current_input) {
        return calcuate_y_raw(op.position.y, current_input);
    }
    function calcuate_y_raw(y, current_input) {
        return y + current_input * 50 + 75;
    }
    column_lookup["global_input"] = -1;
    delete column_lookup["global_output"];
    for(let i = 0; i < grid[0].length; i++){
        const op = grid[0][i].op;
        if (!op || op.name == "global_input" || op.name == "global_output" || op.name == "this") {
            console.log("hit global");
            continue;
        }
        op.position.y -= GAP_SIZE;
    }
    for (const linkRaw of composite.links || []){
        let source_op_name = linkRaw.source.operation == "this" ? "global_input" : linkRaw.source.operation;
        let sink_op_name = linkRaw.sink.operation == "this" ? "global_output" : linkRaw.sink.operation;
        const link = linkRaw;
        let col_from = column_lookup[source_op_name];
        let col_to = column_lookup[sink_op_name];
        // if (Math.abs(col_to - col_from) <= 1) continue;
        link.control_points = [];
        let from_op = nodes[source_op_name].op;
        // get index of the beginning of the wire
        let outIndex = -1;
        for(let i = 0; i < from_op.outputs.length; i++)if (from_op.outputs[i].name == link.source.data) {
            outIndex = i;
            break;
        }
        if (outIndex == -1) console.log("error", from_op.outputs, link.source.data);
        let current_y = calculate_y(from_op, outIndex);
        let to_op = nodes[sink_op_name].op;
        //get index of end of the wire
        let inIndex = -1;
        for(let i = 0; i < to_op.inputs.length; i++)if (to_op.inputs[i].name == link.sink.data) {
            inIndex = i;
            break;
        }
        console.assert(outIndex !== -1, outIndex, link);
        // console.log(linkRaw)
        linkRaw.control_points = [
            {
                x: from_op.position.x + 1.5 * GAP_SIZE,
                y: current_y
            },
            {
                x: from_op.position.x + 1.5 * GAP_SIZE,
                y: to_op.name == "global_output" ? calcuate_y_raw(0, inIndex) : calculate_y(to_op, inIndex)
            }
        ];
    }
    console.log(nodes["global_input"]);
    // console.log(nodes);
    //
    console.log(nodes);
    console.log(gaps);
    console.log(composite);
    return composite;
}
organize((0, _example.example));

},{"./jeffy.js":"eBQxv","./example":"dPYp5","@parcel/transformer-js/src/esmodule-helpers.js":"fVrvZ"}],"eBQxv":[function(require,module,exports,__globalThis) {
var _scriptTs = require("./script.ts");
const body = document.querySelector("body");
let tables = document.querySelectorAll(".draggable-table");
let tablePositions = [];
let isDraggingBackground = false;
let isDraggingTable = null;
let startX, startY;
let bgPosX = 0;
let bgPosY = 0;
let inputGraph;
let operations = [];
let xPosRandIncrement = 400;
let yPosRandIncrement = 400;
let active = true;
let checkBoxes = [];
let checkBoxesPositions = [];
const svgCanvas = document.getElementById("connectionSVG");
//press, xPos and yPos of bg at start
body.addEventListener("mousedown", (e)=>{
    if (!e.target.classList.contains("draggable-table")) {
        isDraggingBackground = true;
        startX = e.clientX;
        startY = e.clientY;
    }
});
//mouse movement
document.addEventListener("mousemove", (e)=>{
    if (isDraggingTable) {
        const newLeft = e.clientX - startX;
        const newTop = e.clientY - startY;
        isDraggingTable.style.left = `${newLeft}px`;
        isDraggingTable.style.top = `${newTop}px`;
    } else if (isDraggingBackground) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        bgPosX += deltaX;
        bgPosY += deltaY;
        body.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
        tablePositions.forEach(({ element, relativeLeft, relativeTop })=>{
            element.style.left = `${relativeLeft + bgPosX}px`;
            element.style.top = `${relativeTop + bgPosY}px`;
        });
        startX = e.clientX;
        startY = e.clientY;
    }
    if (active) refresh();
});
//release
document.addEventListener("mouseup", ()=>{
    isDraggingBackground = false;
    if (isDraggingTable) isDraggingTable = null;
});
//Obtain object from last inputted json inputted json
document.getElementById("inputFile").addEventListener("change", function(event) {
    const file = event.target.files[event.target.files.length - 1];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            try {
                inputGraph = JSON.parse(fileContent);
                createDivs();
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        };
        reader.readAsText(file); //reads file and adds to assigns to inputGraph
    } else console.log("No file was selected.");
});
let createInput = ()=>{
    const inputValues = inputGraph.inputs;
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inputTable");
    inputValues.forEach((i)=>{
        const input = document.createElement("label");
        const temp = document.createElement("input");
        const name = document.createElement("div");
        input.setAttribute("id", i.name);
        temp.setAttribute("type", "checkbox");
        temp.classList.add("input-box");
        name.innerText = i.name;
        input.append(name);
        input.append(temp);
        inputDiv.append(input);
    });
    body.append(inputDiv);
};
let createOutput = ()=>{
    let maxLeft = 0;
    tablePositions.forEach((table)=>{
        if (table.relativeLeft > maxLeft) maxLeft = table.relativeLeft;
    });
    const outputValues = inputGraph.outputs;
    const outputDiv = document.createElement("div");
    outputDiv.classList.add("outputTable");
    outputDiv.style.left = `${maxLeft + 500}px`;
    outputValues.forEach((i)=>{
        const output = document.createElement("label");
        const temp = document.createElement("input");
        const name = document.createElement("div");
        output.setAttribute("id", i.name);
        temp.setAttribute("type", "checkbox");
        temp.classList.add("output-box");
        name.innerText = i.name;
        output.append(name);
        output.append(temp);
        outputDiv.classList.add("draggable-table");
        outputDiv.append(output);
    });
    body.append(outputDiv);
};
//sending operations from obj into div
let createDivs = ()=>{
    operations = Array.from(inputGraph.operations);
    //appends normal operations
    operations.forEach((o)=>{
        const mainOperation = document.createElement("div");
        const name = document.createElement("div");
        const inputOutputContainer = document.createElement("div"); // Fixed from createAttribute
        const inputs = document.createElement("div");
        const outputs = document.createElement("div");
        let numInputs = o.inputs.length;
        let numOutputs = o.outputs.length;
        // Assign temporary x and y values for random graph visuals
        if (!o?.position?.x && !o?.position?.y) {
            o.position = {};
            o.position.x = xPosRandIncrement;
            o.position.y = yPosRandIncrement;
            xPosRandIncrement += 300;
            if (xPosRandIncrement > 1600) {
                xPosRandIncrement = 400;
                yPosRandIncrement += 300;
            }
        }
        tablePositions.push({
            element: mainOperation,
            relativeLeft: parseInt(o.position.x),
            relativeTop: parseInt(o.position.y)
        });
        // Creates the required input elements
        for(let i = 0; i < numInputs; i++){
            // Fixed loop condition
            const input = document.createElement("label");
            const name = document.createElement("div");
            const temp = document.createElement("input");
            name.innerText = o.inputs[i].name;
            temp.setAttribute("type", "checkbox");
            temp.setAttribute("data-id", `input${i + 1}`);
            temp.classList.add("input-box");
            input.append(temp);
            input.append(name);
            inputs.append(input);
        }
        for(let i = 0; i < numOutputs; i++){
            // Fixed loop condition
            const output = document.createElement("label");
            const name = document.createElement("div");
            const temp = document.createElement("input");
            name.innerText = o.outputs[i].name;
            temp.setAttribute("type", "checkbox");
            temp.setAttribute("data-id", `input${i + 1}`);
            temp.classList.add("output-box");
            output.append(name);
            output.append(temp);
            outputs.append(output);
        }
        mainOperation.classList.add("draggable-table");
        name.classList.add("name");
        name.textContent = o.name;
        inputOutputContainer.classList.add("inputOutputContainer");
        inputs.classList.add("inputs");
        outputs.classList.add("outputs");
        //initial x and y positions before mouse click
        mainOperation.style.left = `${o.position.x}px`;
        mainOperation.style.top = `${o.position.y}px`;
        inputOutputContainer.append(inputs);
        inputOutputContainer.append(outputs);
        mainOperation.append(name);
        mainOperation.append(inputOutputContainer);
        body.append(mainOperation);
    });
    createInput();
    createOutput();
    initializeOperations();
    parseCheckBoxes();
    addConnections();
};
//adds events to new operations
let initializeOperations = ()=>{
    active = true;
    tables = document.querySelectorAll(".draggable-table");
    tables.forEach((table, index)=>{
        table.addEventListener("mousedown", (e)=>{
            isDraggingTable = table;
            startX = e.clientX - parseInt(window.getComputedStyle(table).left);
            startY = e.clientY - parseInt(window.getComputedStyle(table).top);
            e.stopPropagation(); //idk, doesn't work without this
        });
        //tables into objects and assigns starting relativeX and relativeY
        table.addEventListener("mouseup", ()=>{
            if (isDraggingTable) {
                const currentLeft = parseInt(window.getComputedStyle(table).left);
                const currentTop = parseInt(window.getComputedStyle(table).top);
                tablePositions[index].relativeLeft = currentLeft - bgPosX;
                tablePositions[index].relativeTop = currentTop - bgPosY;
                isDraggingTable = null;
            }
        });
    });
};
let parseCheckBoxes = ()=>{
    checkBoxes = document.querySelectorAll("input[type='checkbox'], output[type='checkbox']");
    //parses position of each parsed input/output of operations excluding input and output
    checkBoxes.forEach((checkbox)=>{
        const rect = checkbox.getBoundingClientRect();
        if (checkbox.parentElement?.parentElement?.parentElement?.classList.contains("inputOutputContainer")) checkBoxesPositions.push({
            x: rect.x,
            y: rect.y,
            data: checkbox.nextElementSibling ? checkbox.nextElementSibling.innerText : checkbox.previousElementSibling.innerText,
            operation: checkbox.parentElement?.parentElement?.parentElement?.parentElement?.querySelector("div")?.textContent.trim()
        });
        else checkBoxesPositions.push({
            x: rect.x,
            y: rect.y,
            data: checkbox.previousElementSibling.innerText,
            operation: "this"
        });
    });
};
//basic function to draw a line between two coordiantes
let drawLine = (x1, y1, x2, y2)=>{
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#5555");
    line.setAttribute("stroke-width", "2");
    svgCanvas.appendChild(line);
};
//draws all lines based on checkBoxesPositions and link arrays
let addConnections = ()=>{
    const links = inputGraph.links;
    let posOne = [];
    let posTwo = [];
    //grabs rels of links from original array and coords of new array
    links.forEach((l)=>{
        let controlPoints = l.control_points;
        let temp = Array.from(controlPoints);
        checkBoxesPositions.forEach((box)=>{
            if (box.data === l.sink.data && box.operation === l.sink.operation) posTwo = [
                box.x,
                box.y
            ];
            if (box.data === l.source.data && box.operation === l.source.operation) posOne = [
                box.x,
                box.y
            ];
        });
        if (temp.length === 0) drawLine(posOne[0] + 5, posOne[1] + 7, posTwo[0] + 5, posTwo[1] + 7);
        else {
            temp.forEach((point, index)=>{
                drawLine(posOne[0] + 5, posOne[1] + 7, point.x + 5, point.y + 7);
                posOne = [
                    point.x,
                    point.y
                ];
            });
            drawLine(posOne[0] + 5, posOne[1] + 7, posTwo[0] + 5, posTwo[1] + 7);
        }
    });
};
//refreshs lines
let refresh = ()=>{
    svgCanvas.innerHTML = "";
    parseCheckBoxes();
    addConnections();
};
let resetFunction = ()=>{
    document.querySelectorAll(".draggable-table").forEach((e)=>e.remove());
    document.querySelector(".inputTable").remove();
    bgPosX = 0;
    bgPosY = 0;
    startX = 0;
    startY = 0;
    xPosRandIncrement = 400;
    yPosRandIncrement = 400;
    svgCanvas.innerHTML = "";
    checkBoxes = [];
    checkBoxesPositions = [];
    active = false;
};
document.getElementById("reset").addEventListener("click", resetFunction);
document.getElementById("organize").addEventListener("click", ()=>{
    resetFunction();
    inputGraph = (0, _scriptTs.organize)(inputGraph);
    createDivs();
    refresh();
});

},{"./script.ts":"gg0zR"}],"dPYp5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "example", ()=>example);
const example = {
    "name": "Composite_8311840b",
    "type": "COMPOSITE_OPERATION",
    "inputs": [
        {
            "name": "input_0",
            "primitive_name": "input_0"
        },
        {
            "name": "input_1",
            "primitive_name": "input_1"
        },
        {
            "name": "input_2",
            "primitive_name": "input_2"
        },
        {
            "name": "input_3",
            "primitive_name": "input_3"
        }
    ],
    "outputs": [
        {
            "name": "output_0",
            "primitive_name": "output_0"
        },
        {
            "name": "output_1",
            "primitive_name": "output_1"
        }
    ],
    "operations": [
        {
            "name": "Op_618bd732",
            "primitive_name": "argument_minimum",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": true,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "TEXT",
                    "shape": [],
                    "data": "hello",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 71.56,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "argument",
                    "primitive_name": "argument"
                }
            ]
        },
        {
            "name": "Op_fe7dd017",
            "primitive_name": "count_occurrences",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "target",
                    "primitive_name": "target"
                },
                {
                    "name": "count_against",
                    "primitive_name": "count_against",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 9,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "occurrences",
                    "primitive_name": "occurrences"
                }
            ]
        },
        {
            "name": "Op_724d7ff8",
            "primitive_name": "mean",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension",
                    "type": "TEXT",
                    "shape": [],
                    "data": "sample_text",
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "mean_result",
                    "primitive_name": "mean_result"
                }
            ]
        },
        {
            "name": "Op_16d7b924",
            "primitive_name": "generate_combinations_batch",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "number_of_samples",
                    "primitive_name": "number_of_samples"
                },
                {
                    "name": "batch_size",
                    "primitive_name": "batch_size"
                },
                {
                    "name": "start_index",
                    "primitive_name": "start_index"
                }
            ],
            "outputs": [
                {
                    "name": "samples",
                    "primitive_name": "samples"
                }
            ]
        },
        {
            "name": "Op_bfcf1ed8",
            "primitive_name": "swap_elements",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array",
                    "type": "TEXT",
                    "shape": [],
                    "data": "hello",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "index_1",
                    "primitive_name": "index_1",
                    "type": "TEXT",
                    "shape": [],
                    "data": "random_text",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "index_2",
                    "primitive_name": "index_2"
                }
            ],
            "outputs": [
                {
                    "name": "swapped_array",
                    "primitive_name": "swapped_array"
                }
            ]
        },
        {
            "name": "Op_8194e8d0",
            "primitive_name": "get_sub_arrays",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "selected_indices",
                    "primitive_name": "selected_indices"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "primitive_name": "output"
                }
            ]
        },
        {
            "name": "Op_7b9a524c",
            "primitive_name": "filter",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "condition",
                    "primitive_name": "condition",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 69,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "filtered_array",
                    "primitive_name": "filtered_array"
                }
            ]
        },
        {
            "name": "Op_c3ed2407",
            "primitive_name": "sample_by_step",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 62.22,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "step_value",
                    "primitive_name": "step_value",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": true,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "sampled_array",
                    "primitive_name": "sampled_array"
                }
            ]
        },
        {
            "name": "Op_039b6fb2",
            "primitive_name": "element_wise_multiply",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "left_array",
                    "primitive_name": "left_array"
                },
                {
                    "name": "right_array",
                    "primitive_name": "right_array"
                }
            ],
            "outputs": [
                {
                    "name": "multiplied_array",
                    "primitive_name": "multiplied_array"
                }
            ]
        },
        {
            "name": "Op_a616a600",
            "primitive_name": "scatter_add",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "index_array",
                    "primitive_name": "index_array",
                    "type": "TEXT",
                    "shape": [],
                    "data": "test_string",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "source_array",
                    "primitive_name": "source_array",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": -7.36,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "scatter_array",
                    "primitive_name": "scatter_array"
                }
            ]
        },
        {
            "name": "Op_9e9ac71a",
            "primitive_name": "identity",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "primitive_name": "output"
                }
            ]
        },
        {
            "name": "Op_3a392c0b",
            "primitive_name": "scatter_add",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": false,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "index_array",
                    "primitive_name": "index_array"
                },
                {
                    "name": "source_array",
                    "primitive_name": "source_array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "scatter_array",
                    "primitive_name": "scatter_array"
                }
            ]
        },
        {
            "name": "Op_e4b5cd2f",
            "primitive_name": "multiply",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "left_operand",
                    "primitive_name": "left_operand"
                },
                {
                    "name": "right_operand",
                    "primitive_name": "right_operand"
                }
            ],
            "outputs": [
                {
                    "name": "multiplied_result",
                    "primitive_name": "multiplied_result"
                }
            ]
        },
        {
            "name": "Op_7964436c",
            "primitive_name": "sample_by_step",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array",
                    "type": "TEXT",
                    "shape": [],
                    "data": "sample_text",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "step_value",
                    "primitive_name": "step_value",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": true,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "sampled_array",
                    "primitive_name": "sampled_array"
                }
            ]
        },
        {
            "name": "Op_2cbdd554",
            "primitive_name": "scatter_add",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 9.87,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "index_array",
                    "primitive_name": "index_array"
                },
                {
                    "name": "source_array",
                    "primitive_name": "source_array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "scatter_array",
                    "primitive_name": "scatter_array"
                }
            ]
        },
        {
            "name": "Op_8315812f",
            "primitive_name": "shuffle",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "shuffled_array",
                    "primitive_name": "shuffled_array"
                }
            ]
        },
        {
            "name": "Op_008b08f1",
            "primitive_name": "conv2d_transpose",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "kernel",
                    "primitive_name": "kernel"
                },
                {
                    "name": "stride",
                    "primitive_name": "stride"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "primitive_name": "output"
                }
            ]
        },
        {
            "name": "Op_22533679",
            "primitive_name": "sum",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 35.71,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension"
                }
            ],
            "outputs": [
                {
                    "name": "sum_result",
                    "primitive_name": "sum_result"
                }
            ]
        },
        {
            "name": "Op_ee2ee4ab",
            "primitive_name": "sum",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension"
                }
            ],
            "outputs": [
                {
                    "name": "sum_result",
                    "primitive_name": "sum_result"
                }
            ]
        },
        {
            "name": "Op_7f2568c8",
            "primitive_name": "diagonal",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "value",
                    "primitive_name": "value"
                }
            ],
            "outputs": [
                {
                    "name": "diagonal_array",
                    "primitive_name": "diagonal_array"
                }
            ]
        },
        {
            "name": "Op_9bca2dfb",
            "primitive_name": "product",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 92,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension"
                }
            ],
            "outputs": [
                {
                    "name": "prod_result",
                    "primitive_name": "prod_result"
                }
            ]
        },
        {
            "name": "Op_c880782f",
            "primitive_name": "generate_uniform_random_number",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "shape",
                    "primitive_name": "shape"
                },
                {
                    "name": "random_seed",
                    "primitive_name": "random_seed",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 83,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "left_limit",
                    "primitive_name": "left_limit"
                },
                {
                    "name": "right_limit",
                    "primitive_name": "right_limit"
                }
            ],
            "outputs": [
                {
                    "name": "random_number",
                    "primitive_name": "random_number"
                }
            ]
        },
        {
            "name": "Op_942c3af0",
            "primitive_name": "lower_upper_case_text",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "text",
                    "primitive_name": "text"
                },
                {
                    "name": "is_lower_case",
                    "primitive_name": "is_lower_case"
                }
            ],
            "outputs": [
                {
                    "name": "processed_text",
                    "primitive_name": "processed_text"
                }
            ]
        },
        {
            "name": "Op_d85ded7b",
            "primitive_name": "insert_text",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "text",
                    "primitive_name": "text",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 62,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "search_regex",
                    "primitive_name": "search_regex"
                },
                {
                    "name": "inserted_text",
                    "primitive_name": "inserted_text"
                }
            ],
            "outputs": [
                {
                    "name": "processed_text",
                    "primitive_name": "processed_text"
                }
            ]
        },
        {
            "name": "Op_87027858",
            "primitive_name": "filter",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "condition",
                    "primitive_name": "condition"
                }
            ],
            "outputs": [
                {
                    "name": "filtered_array",
                    "primitive_name": "filtered_array"
                }
            ]
        }
    ],
    "links": [
        {
            "source": {
                "operation": "this",
                "data": "input_0"
            },
            "sink": {
                "operation": "Op_fe7dd017",
                "data": "target"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_724d7ff8",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_1"
            },
            "sink": {
                "operation": "Op_724d7ff8",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_3"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "number_of_samples"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "batch_size"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "start_index"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_bfcf1ed8",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_bfcf1ed8",
                "data": "index_2"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_8194e8d0",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_2"
            },
            "sink": {
                "operation": "Op_8194e8d0",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_bfcf1ed8",
                "data": "swapped_array"
            },
            "sink": {
                "operation": "Op_8194e8d0",
                "data": "selected_indices"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_7b9a524c",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_3"
            },
            "sink": {
                "operation": "Op_7b9a524c",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_bfcf1ed8",
                "data": "swapped_array"
            },
            "sink": {
                "operation": "Op_c3ed2407",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "Op_039b6fb2",
                "data": "left_array"
            }
        },
        {
            "source": {
                "operation": "Op_c3ed2407",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_039b6fb2",
                "data": "right_array"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_a616a600",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_a616a600",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_a616a600",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_9e9ac71a",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_3a392c0b",
                "data": "index_array"
            }
        },
        {
            "source": {
                "operation": "Op_c3ed2407",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_3a392c0b",
                "data": "source_array"
            }
        },
        {
            "source": {
                "operation": "Op_7b9a524c",
                "data": "filtered_array"
            },
            "sink": {
                "operation": "Op_3a392c0b",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_3a392c0b",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_e4b5cd2f",
                "data": "left_operand"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "Op_e4b5cd2f",
                "data": "right_operand"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_7964436c",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_2cbdd554",
                "data": "index_array"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_2cbdd554",
                "data": "source_array"
            }
        },
        {
            "source": {
                "operation": "Op_3a392c0b",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_2cbdd554",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_8315812f",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_bfcf1ed8",
                "data": "swapped_array"
            },
            "sink": {
                "operation": "Op_8315812f",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_008b08f1",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_9e9ac71a",
                "data": "output"
            },
            "sink": {
                "operation": "Op_008b08f1",
                "data": "kernel"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_008b08f1",
                "data": "stride"
            }
        },
        {
            "source": {
                "operation": "Op_008b08f1",
                "data": "output"
            },
            "sink": {
                "operation": "Op_22533679",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_e4b5cd2f",
                "data": "multiplied_result"
            },
            "sink": {
                "operation": "Op_22533679",
                "data": "keep_dimension"
            }
        },
        {
            "source": {
                "operation": "Op_7964436c",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_ee2ee4ab",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_ee2ee4ab",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_a616a600",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_ee2ee4ab",
                "data": "keep_dimension"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_7f2568c8",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_22533679",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_7f2568c8",
                "data": "value"
            }
        },
        {
            "source": {
                "operation": "Op_e4b5cd2f",
                "data": "multiplied_result"
            },
            "sink": {
                "operation": "Op_9bca2dfb",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_ee2ee4ab",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_9bca2dfb",
                "data": "keep_dimension"
            }
        },
        {
            "source": {
                "operation": "Op_a616a600",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_c880782f",
                "data": "shape"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_c880782f",
                "data": "left_limit"
            }
        },
        {
            "source": {
                "operation": "Op_039b6fb2",
                "data": "multiplied_array"
            },
            "sink": {
                "operation": "Op_c880782f",
                "data": "right_limit"
            }
        },
        {
            "source": {
                "operation": "Op_c3ed2407",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_942c3af0",
                "data": "text"
            }
        },
        {
            "source": {
                "operation": "Op_ee2ee4ab",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_942c3af0",
                "data": "is_lower_case"
            }
        },
        {
            "source": {
                "operation": "Op_8315812f",
                "data": "shuffled_array"
            },
            "sink": {
                "operation": "Op_d85ded7b",
                "data": "search_regex"
            }
        },
        {
            "source": {
                "operation": "Op_7b9a524c",
                "data": "filtered_array"
            },
            "sink": {
                "operation": "Op_d85ded7b",
                "data": "inserted_text"
            }
        },
        {
            "source": {
                "operation": "Op_22533679",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_87027858",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_87027858",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_9bca2dfb",
                "data": "prod_result"
            },
            "sink": {
                "operation": "Op_87027858",
                "data": "condition"
            }
        },
        {
            "source": {
                "operation": "Op_e4b5cd2f",
                "data": "multiplied_result"
            },
            "sink": {
                "operation": "this",
                "data": "output_0"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "this",
                "data": "output_1"
            }
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fVrvZ"}],"fVrvZ":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["c2lOS","gg0zR"], "gg0zR", "parcelRequire94c2")

//# sourceMappingURL=index.54632f9a.js.map
