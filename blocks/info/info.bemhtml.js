block('info')(
  tag()('dl'),

  content()((_, json) => Object.keys(json.items).map(key => [
    {elem: 'key', content: key},
    {elem: 'val', content: json.items[key]}
  ])),

  elem('key').tag()('dt'),

  elem('val')(
    tag()('dd'),
    content()(() => {
      let val = applyNext();
      return Array.isArray(val)
        ? {elem: 'link', url: val[1], content: val[0]}
        : val;
    })
  ),

  elem('val-list')(
    tag()('ul'),
    content()((_, json) => json.items.map(item => ({
      elem: 'val-list-item',
      content: item
    })))
  ),

  elem('val-list-item').tag()('li'),

  elem('link')(
    tag()('a'),
    attrs()((_, json) => Object.assign(
      {href: json.url},
      json.url.startsWith('http') ? {target: '_blank', rel: 'noopener'} : {}
    ))
  )
)
