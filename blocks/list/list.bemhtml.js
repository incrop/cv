"use strict";

block('list')(
  wrap()((_, json) => [
    json.title && {elem: 'title', content: json.title},
    json
  ]),

  tag()('ul'),

  content()((_, json) => json.items.map(item => ({
    elem: 'item',
    content: item
  }))),

  elem('item').tag()('li')
);
