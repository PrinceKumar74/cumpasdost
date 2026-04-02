import { useEffect } from "react";
import {
  BRAND_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_URL,
} from "./siteConfig";

function ensureLeadingSlash(pathname) {
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function upsertMeta({ keyAttr, keyValue, valueAttr = "content", value }) {
  if (typeof document === "undefined") return;
  const head = document.head;
  if (!head) return;

  let el = head.querySelector(`meta[${keyAttr}="${CSS.escape(keyValue)}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(keyAttr, keyValue);
    head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
}

function upsertLink({ rel, href }) {
  if (typeof document === "undefined") return;
  const head = document.head;
  if (!head) return;

  let el = head.querySelector(`link[rel="${CSS.escape(rel)}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight SEO updater for SPA routes (no external dependencies).
 * Updates: title, description, canonical, robots, OG + Twitter tags.
 */
export function useSeo({
  title,
  description,
  canonicalPath,
  imageUrl,
  robots = "index,follow",
} = {}) {
  useEffect(() => {
    const finalTitle = title
      ? `${title} | ${BRAND_NAME}`
      : DEFAULT_TITLE;

    const finalDescription = description || DEFAULT_DESCRIPTION;
    const finalCanonicalUrl = `${SITE_URL}${ensureLeadingSlash(
      canonicalPath || window.location.pathname
    )}`;
    const finalImage = imageUrl || DEFAULT_OG_IMAGE;

    document.title = finalTitle;

    upsertMeta({ keyAttr: "name", keyValue: "description", value: finalDescription });
    upsertMeta({ keyAttr: "name", keyValue: "robots", value: robots });

    upsertLink({ rel: "canonical", href: finalCanonicalUrl });

    // Open Graph
    upsertMeta({ keyAttr: "property", keyValue: "og:type", value: "website" });
    upsertMeta({ keyAttr: "property", keyValue: "og:title", value: finalTitle });
    upsertMeta({ keyAttr: "property", keyValue: "og:description", value: finalDescription });
    upsertMeta({ keyAttr: "property", keyValue: "og:url", value: finalCanonicalUrl });
    upsertMeta({ keyAttr: "property", keyValue: "og:image", value: finalImage });

    // Twitter
    upsertMeta({ keyAttr: "name", keyValue: "twitter:card", value: "summary_large_image" });
    upsertMeta({ keyAttr: "name", keyValue: "twitter:title", value: finalTitle });
    upsertMeta({ keyAttr: "name", keyValue: "twitter:description", value: finalDescription });
    upsertMeta({ keyAttr: "name", keyValue: "twitter:image", value: finalImage });
  }, [title, description, canonicalPath, imageUrl, robots]);
}







