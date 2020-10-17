"use strict";

block('md')(
  tag()('p'),

  content()((ctx, json) => [].concat(applyNext()).map((line, idx) =>
    typeof line !== 'string'
      ? line
      : {html: (idx !== 0 && !line.startsWith(' ') ? ' ' : '') +
          line
          .replace(/\[(.+?)\]\((.+?)\)/g, (_, text, url) => ctx.reapply({
            block: 'link',
            url: url,
            content: text
          }))
          .replace(/__(.+?)__/g, (_, text) => ctx.reapply({
            tag: 'b',
            content: text
          }))
        }
  ))
);
