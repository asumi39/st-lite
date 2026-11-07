// st-lite fork · 子路径部署支持
// 服务端在入口 HTML 注入 window.ST_BASE_PATH（config.yaml 的 basePath，如 '/play'）后，
// 本文件包装 fetch/XHR：根绝对路径调用自动补部署前缀；相对路径与已带前缀的调用原样放行。
// basePath 留空时服务端不注入，本文件逻辑整体跳过 —— 原版根路径行为不受影响。
(function () {
    const BASE = window.ST_BASE_PATH || '';
    if (!BASE) return;

    const patchUrl = function (url) {
        if (typeof url === 'string' && url.charAt(0) === '/' && !url.startsWith(`${BASE}/`)) {
            return BASE + url;
        }
        return url;
    };

    const origFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
        if (typeof input === 'string') {
            input = patchUrl(input);
        } else if (input && typeof input.url === 'string') {
            input = new Request(patchUrl(input.url), input);
        }
        return origFetch(input, init);
    };

    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
        const rest = Array.prototype.slice.call(arguments, 2);
        return origOpen.apply(this, [method, patchUrl(String(url))].concat(rest));
    };
})();
