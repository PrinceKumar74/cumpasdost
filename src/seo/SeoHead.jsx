import { useSeo } from "./useSeo";

/**
 * Drop-in component to set per-page SEO for SPA routes.
 * Renders nothing; only updates <head>.
 */
export default function SeoHead(props) {
  useSeo(props);
  return null;
}







