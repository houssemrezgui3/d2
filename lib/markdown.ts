/**
 * Utility to parse markdown strings into clean HTML and normalize URLs.
 */

export function parseMarkdownToHtml(content: string): string {
  if (!content) return '';

  let processed = content;

  // 1. Strip hardcoded http://localhost:3000 domain prefixes to convert into clean relative URLs
  processed = processed.replace(/http:\/\/localhost:3000/g, '');

  // 2. Convert raw markdown links [text](url) to HTML anchor tags <a href="url">text</a>
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  processed = processed.replace(markdownLinkRegex, (_match, text, url) => {
    let cleanUrl = url.trim().replace(/^http:\/\/localhost:3000/, '');
    if (!cleanUrl) cleanUrl = '/';
    return `<a href="${cleanUrl}">${text}</a>`;
  });

  // 3. Convert basic markdown headings if present
  processed = processed.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  processed = processed.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  processed = processed.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // 4. Convert markdown bold and italic
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // 5. Wrap plain text blocks/paragraphs in <p> tags if no block-level HTML elements are detected
  if (!/<(p|div|h[1-6]|ul|ol|li|blockquote|section|article)\b/i.test(processed)) {
    processed = processed
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph.length > 0)
      .map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br />')}</p>`)
      .join('');
  }

  // Ensure double slashes in href (e.g. href="//services") become single slash href="/services"
  processed = processed.replace(/href="\/\/+/g, 'href="/');

  return processed;
}

export function cleanLocalhostUrls(urlOrContent: string): string {
  if (!urlOrContent) return '';
  return urlOrContent.replace(/http:\/\/localhost:3000/g, '');
}
