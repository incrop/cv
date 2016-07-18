block('md')(
  tag()('p'),

  content()((ctx, json) => [].concat(applyNext()).map((line, idx) =>
    typeof line !== 'string'
      ? line
      : (idx !== 0 && !line.startsWith(' ') ? ' ' : '') +
          line.replace(/\[(.+?)\]\((.+?)\)/g, (_, text, url) => ctx.reapply({
            block: 'link',
            url: url,
            content: text
          }))
  ))
)
