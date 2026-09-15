import { parseMarkdownToHtml } from './markdown';

export interface LinkMapping {
  keyword: string;
  url: string;
  source_url?: string;
}

export async function getDynamicKeywordMappings(): Promise<LinkMapping[]> {
  try {
    const { supabase } = await import('@/lib/supabase');
    const { data: dbLinks } = await supabase
      .from('seo_keyword_links')
      .select('keyword, target_url, source_url')
      .eq('is_active', true);

    if (dbLinks && dbLinks.length > 0) {
      return dbLinks.map((item) => ({
        keyword: item.keyword,
        url: item.target_url,
        source_url: item.source_url ?? undefined,
      }));
    }
  } catch {
    // Fallback if table or connection is unavailable
  }
  return [];
}

/**
 * Normalizes a URL path to ensure clean relative comparison (e.g. /services/implants-dentaires)
 */
function normalizePath(urlPath?: string): string {
  if (!urlPath) return '';
  let clean = urlPath.trim().replace(/^http:\/\/localhost:3000/, '');
  if (!clean.startsWith('/') && !clean.startsWith('http://') && !clean.startsWith('https://')) {
    clean = '/' + clean;
  }
  return clean.length > 1 ? clean.replace(/\/$/, '') : clean;
}

export function applyInternalLinks(
  htmlContent: string,
  mappings: LinkMapping[],
  currentPath?: string
): string {
  if (!htmlContent) return '';

  // 1. Pre-process content through markdown parsing and localhost URL normalization
  let processedHtml = parseMarkdownToHtml(htmlContent);

  const cleanCurrentPath = normalizePath(currentPath);

  mappings.forEach(({ keyword, url, source_url }) => {
    const cleanTargetUrl = normalizePath(url);

    // 2. Check source_url page-scoped restriction if configured
    if (source_url) {
      const cleanSourceUrl = normalizePath(source_url);
      if (!cleanCurrentPath || cleanCurrentPath !== cleanSourceUrl) {
        return;
      }
    }

    // 3. Prevent self-referencing links
    if (cleanCurrentPath && cleanTargetUrl === cleanCurrentPath) {
      return;
    }

    const escapedKeyword = keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    const regex = new RegExp(`(?<![a-zA-Z0-9\\u00C0-\\u024F-])(${escapedKeyword})(?![a-zA-Z0-9\\u00C0-\\u024F-])`, 'gi');

    let replaced = false;

    processedHtml = processedHtml.replace(regex, (match, _p1, offset, fullString) => {
      if (replaced) return match;

      const precedingText = fullString.substring(0, offset);

      // Ensure match is not inside an HTML tag definition (e.g. <a href="..." title="...">)
      if (precedingText.lastIndexOf('<') > precedingText.lastIndexOf('>')) {
        return match;
      }

      // Ensure match is not nested inside an existing <a>...</a> anchor tag
      const openAnchorCount = (precedingText.match(/<a\b[^>]*>/gi) || []).length;
      const closeAnchorCount = (precedingText.match(/<\/a>/gi) || []).length;

      if (openAnchorCount > closeAnchorCount) {
        return match;
      }

      replaced = true;
      return `<a href="${cleanTargetUrl}" class="seo-internal-link" title="${match}">${match}</a>`;
    });
  });

  return processedHtml;
}
