"use strict";

block('info')(
  tag()('dl'),

  content()((_, json) => Object.keys(json.items).map(key => [
    {elem: 'key', content: key + ':'},
    {elem: 'val', content: json.items[key]},
    {tag: 'br'}
  ])),

  elem('key').tag()('dt'),

  elem('val')(
    tag()('dd'),
    content()(() => {
      let val = applyNext();
      return Array.isArray(val)
        ? {block: 'link', url: val[1], content: val[0]}
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

  elem('val-list-item').tag()('li')
)
