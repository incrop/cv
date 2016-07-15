block('header')(
    tag()('header'),

    content()((_, json) => [
      json.title && {elem: 'title', content: json.title},
      json.subtitle && {tag: 'p', content: json.subtitle}
    ]),

    elem('title').tag()('h1'),

    elem('subtitle').tag()('p')
);
