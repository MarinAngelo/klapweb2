

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slice-simulator/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.KAEeZRlR.js","_app/immutable/chunks/scheduler.DvHrZ5B6.js","_app/immutable/chunks/index.BUw82teW.js","_app/immutable/chunks/index.B8-5d_9Q.js"];
export const stylesheets = ["_app/immutable/assets/index.DeuJ7xN2.css"];
export const fonts = [];
