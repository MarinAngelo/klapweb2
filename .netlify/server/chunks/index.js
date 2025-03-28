import { c as create_ssr_component, b as add_attribute, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, e as escape, v as validate_component, k as each, m as missing_component } from "./ssr.js";
import { asTree } from "@prismicio/richtext";
import { isFilled, asImageWidthSrcSet, asImagePixelDensitySrcSet, asLinkAttrs } from "@prismicio/client";
const PrismicEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  return ` ${isFilled.embed(field) ? `<div${add_attribute("data-oembed", field.embed_url, 0)}${add_attribute("data-oembed-type", field.type, 0)}${add_attribute("data-oembed-provider", field.provider_name, 0)}> <!-- HTML_TAG_START -->${field.html}<!-- HTML_TAG_END --></div>` : ``}`;
});
const PrismicImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "field",
    "imgixParams",
    "alt",
    "fallbackAlt",
    "width",
    "height",
    "widths",
    "pixelDensities"
  ]);
  let { field } = $$props;
  let { imgixParams = {} } = $$props;
  let { alt = void 0 } = $$props;
  let { fallbackAlt = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { widths = void 0 } = $$props;
  let { pixelDensities = void 0 } = $$props;
  let src = void 0;
  let srcset = void 0;
  let resolvedWidth = void 0;
  let resolvedHeight = void 0;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.imgixParams === void 0 && $$bindings.imgixParams && imgixParams !== void 0) $$bindings.imgixParams(imgixParams);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.fallbackAlt === void 0 && $$bindings.fallbackAlt && fallbackAlt !== void 0) $$bindings.fallbackAlt(fallbackAlt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0) $$bindings.widths(widths);
  if ($$props.pixelDensities === void 0 && $$bindings.pixelDensities && pixelDensities !== void 0) $$bindings.pixelDensities(pixelDensities);
  {
    {
      if (isFilled.imageThumbnail(field)) {
        const castInt = (input) => {
          if (typeof input === "number" || typeof input === "undefined" || input === null) {
            return input;
          } else {
            const parsed = Number.parseInt(input);
            if (Number.isNaN(parsed)) {
              return void 0;
            } else {
              return parsed;
            }
          }
        };
        const ar = field.dimensions.width / field.dimensions.height;
        const castedWidth = castInt(width);
        const castedHeight = castInt(height);
        resolvedWidth = castedWidth ?? field.dimensions.width;
        resolvedHeight = castedHeight ?? field.dimensions.height;
        if (castedWidth != null && castedHeight == null) {
          resolvedHeight = castedWidth / ar;
        } else if (castedWidth == null && castedHeight != null) {
          resolvedWidth = castedHeight * ar;
        }
        if (widths || !pixelDensities) {
          const res = asImageWidthSrcSet(field, {
            ...imgixParams,
            widths: widths === "defaults" ? void 0 : widths
          });
          src = res.src;
          srcset = res.srcset;
        } else if (pixelDensities) {
          const res = asImagePixelDensitySrcSet(field, {
            ...imgixParams,
            pixelDensities: pixelDensities === "defaults" ? void 0 : pixelDensities
          });
          src = res.src;
          srcset = res.srcset;
        }
      }
    }
  }
  return ` ${isFilled.imageThumbnail(field) ? `<img${spread(
    [
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      {
        alt: escape_attribute_value(alt ?? (field.alt || fallbackAlt))
      },
      {
        width: escape_attribute_value(resolvedWidth)
      },
      {
        height: escape_attribute_value(resolvedHeight)
      },
      escape_object($$restProps)
    ],
    {}
  )}>` : ``}`;
});
const PrismicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkAttrs;
  let resolvedRel;
  let $$restProps = compute_rest_props($$props, ["field", "document", "rel"]);
  let { field = void 0 } = $$props;
  let { document = void 0 } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.document === void 0 && $$bindings.document && document !== void 0) $$bindings.document(document);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0) $$bindings.rel(rel);
  linkAttrs = asLinkAttrs(field ?? document, {
    rel: typeof rel === "function" ? rel : void 0
  });
  resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
  return ` <a${spread(
    [
      escape_object(linkAttrs),
      { rel: escape_attribute_value(resolvedRel) },
      {
        href: escape_attribute_value(linkAttrs.href)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : `${escape(field?.text)}`}</a>`;
});
const DefaultComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dir;
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  dir = "direction" in node && node.direction === "rtl" ? "rtl" : void 0;
  return `${node.type === "heading1" ? `<h1${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${node.type === "heading2" ? `<h2${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${node.type === "heading3" ? `<h3${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${node.type === "heading4" ? `<h4${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${node.type === "heading5" ? `<h5${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${node.type === "heading6" ? `<h6${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${node.type === "paragraph" ? `<p${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</p>` : `${node.type === "preformatted" ? `<pre>${slots.default ? slots.default({}) : ``}</pre>` : `${node.type === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${node.type === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${node.type === "list-item" ? `<li${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "o-list-item" ? `<li${add_attribute("dir", dir, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "group-list-item" ? `<ul>${slots.default ? slots.default({}) : ``}</ul>` : `${node.type === "group-o-list-item" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `${node.type === "image" ? `<p class="block-img">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: node }, {}, {})}</p>` : `${node.type === "embed" ? `${validate_component(PrismicEmbed, "PrismicEmbed").$$render($$result, { field: node.oembed }, {}, {})}` : `${node.type === "hyperlink" ? `${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: node.data }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${node.type === "label" ? `<span${add_attribute("class", node.data.label, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${each(node.text.split("\n"), (line, index) => {
    return `${index > 0 ? `<br>` : ``}${escape(line)}`;
  })}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
const Serialize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components: components2 = {} } = $$props;
  let { children } = $$props;
  const CHILD_TYPE_RENAMES = {
    "list-item": "listItem",
    "o-list-item": "oListItem",
    "group-list-item": "list",
    "group-o-list-item": "oList"
  };
  function getComponent(child) {
    return components2[CHILD_TYPE_RENAMES[child.type] || child.type] || DefaultComponent;
  }
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0) $$bindings.children(children);
  return `${each(children, (child) => {
    return `${validate_component(getComponent(child) || missing_component, "svelte:component").$$render($$result, { node: child.node }, {}, {
      default: () => {
        return ` ${child.children.length > 0 ? `${validate_component(Serialize, "svelte:self").$$render($$result, { children: child.children, components: components2 }, {}, {})}` : ``}`;
      }
    })}`;
  })}`;
});
const PrismicRichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let children;
  let { field } = $$props;
  let { components: components2 = {} } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  children = asTree(field).children;
  return ` ${validate_component(Serialize, "Serialize").$$render($$result, { children, components: components2 }, {}, {})}`;
});
const TodoComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  "slice_type" in slice ? slice.slice_type : slice.type;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  return `${``}`;
});
const SliceZone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slices = [] } = $$props;
  let { components: components2 = {} } = $$props;
  let { context = {} } = $$props;
  let { defaultComponent = void 0 } = $$props;
  if ($$props.slices === void 0 && $$bindings.slices && slices !== void 0) $$bindings.slices(slices);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0) $$bindings.context(context);
  if ($$props.defaultComponent === void 0 && $$bindings.defaultComponent && defaultComponent !== void 0) $$bindings.defaultComponent(defaultComponent);
  return ` ${each(slices, (slice, index) => {
    let type = "slice_type" in slice ? slice.slice_type : slice.type, Component = components2[type] || defaultComponent;
    return `  ${Component ? `${slice.__mapped ? (() => {
      let { __mapped, ...mappedProps } = slice;
      return ` ${validate_component(Component || missing_component, "svelte:component").$$render($$result, Object.assign({}, mappedProps), {}, {})}`;
    })() : `${validate_component(Component || missing_component, "svelte:component").$$render($$result, { slice, slices, context, index }, {}, {})}`}` : `${validate_component(TodoComponent, "TodoComponent").$$render($$result, { slice }, {}, {})}`}`;
  })}`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  return `${node.data.label === "codespan" ? `<code>${slots.default ? slots.default({}) : ``}</code>` : `<span${add_attribute("class", node.data.label, 0)}>${slots.default ? slots.default({}) : ``}</span>`}`;
});
const css = {
  code: ".container.svelte-wkodna{max-width:600px;margin:6em auto;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { PrismicRichText } from \\"@prismicio/svelte\\";\\nimport Label from \\"./Label.svelte\\";\\nexport let slice;\\n<\/script>\\n\\n<section class=\\"container\\">\\n\\t<PrismicRichText\\n\\t\\tfield={slice.primary.content}\\n\\t\\tcomponents={{\\n\\t\\t\\tlabel: Label\\n\\t\\t}}\\n\\t/>\\n</section>\\n\\n<style>\\n\\t.container {\\n\\t\\tmax-width: 600px;\\n\\t\\tmargin: 6em auto;\\n\\t\\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\\n\\t\\t\\t'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAeC,wBAAW,CACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CAAC;AACnG,GAAG,mBAAmB,CAAC,CAAC,gBAAgB,CAAC,CAAC,iBACzC"}`
};
const RichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0) $$bindings.slice(slice);
  $$result.css.add(css);
  return `<section class="container svelte-wkodna">${validate_component(PrismicRichText, "PrismicRichText").$$render(
    $$result,
    {
      field: slice.primary.content,
      components: { label: Label }
    },
    {},
    {}
  )} </section>`;
});
const components = {
  rich_text: RichText
};
export {
  SliceZone as S,
  components as c
};
