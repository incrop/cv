"use strict";

block('list')(
  tag()('ul'),

  content()((_, json) => json.items.map(item => ({
    elem: 'item',
    content: item
  }))),

  elem('item').tag()('li')
);
