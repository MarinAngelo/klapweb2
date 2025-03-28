import { c as create_ssr_component, b as add_attribute, d as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { getToolbarSrc } from "@prismicio/client";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { r as repositoryName } from "../../chunks/prismicio.js";
const PrismicPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toolbarSrc;
  let { repositoryName: repositoryName2 } = $$props;
  let { routePrefix = "preview" } = $$props;
  let { routePrefixName = routePrefix } = $$props;
  if ($$props.repositoryName === void 0 && $$bindings.repositoryName && repositoryName2 !== void 0) $$bindings.repositoryName(repositoryName2);
  if ($$props.routePrefix === void 0 && $$bindings.routePrefix && routePrefix !== void 0) $$bindings.routePrefix(routePrefix);
  if ($$props.routePrefixName === void 0 && $$bindings.routePrefixName && routePrefixName !== void 0) $$bindings.routePrefixName(routePrefixName);
  toolbarSrc = getToolbarSrc(repositoryName2);
  return `${$$result.head += `<!-- HEAD_svelte-92dhp6_START --><script defer${add_attribute("src", toolbarSrc, 0)}><\/script><!-- HEAD_svelte-92dhp6_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1veofet_START -->${$$result.title = `<title>${escape($page.data.title)}</title>`, ""}${$page.data.meta_description ? `<meta name="description"${add_attribute("content", $page.data.meta_description, 0)}>` : ``}${$page.data.meta_title ? `<meta name="og:title"${add_attribute("content", $page.data.meta_title, 0)}>` : ``}${$page.data.meta_image ? `<meta name="og:image"${add_attribute("content", $page.data.meta_image, 0)}> <meta name="twitter:card" content="summary_large_image">` : ``}<!-- HEAD_svelte-1veofet_END -->`, ""} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(PrismicPreview, "PrismicPreview").$$render($$result, { repositoryName }, {}, {})}`;
});
export {
  Layout as default
};
