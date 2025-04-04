import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.D2sxCrOg.js","_app/immutable/chunks/scheduler.DvHrZ5B6.js","_app/immutable/chunks/index.BUw82teW.js","_app/immutable/chunks/entry.Ft6RTSuW.js","_app/immutable/chunks/stores.BgLm5ObC.js"];
export const stylesheets = [];
export const fonts = [];
