"use strict";

block('link')(
  tag()('a'),

  attrs()((_, json) => Object.assign(
    {href: json.url},
    json.url.startsWith('http') ? {target: '_blank', rel: 'noopener'} : {},
    applyNext() || {}
  ))
)
