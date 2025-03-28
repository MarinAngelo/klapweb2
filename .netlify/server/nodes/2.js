import * as server from '../entries/pages/__preview_preview__/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__preview_preview__/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[preview=preview]]/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DRiVlcLt.js","_app/immutable/chunks/scheduler.DvHrZ5B6.js","_app/immutable/chunks/index.BUw82teW.js","_app/immutable/chunks/index.B8-5d_9Q.js"];
export const stylesheets = ["_app/immutable/assets/index.DeuJ7xN2.css"];
export const fonts = [];
