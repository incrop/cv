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
      switch (typeof val) {
        case 'string': return val;
        case 'object': return {
          tag: 'a',
          attrs: {href: val[1]},
          content: val[0]
        };
        default: return '';
      }
    })
  )
)
