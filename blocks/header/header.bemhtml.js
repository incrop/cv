block('header')(
    tag()('header'),

    content()((_, json) => [
      json.title && {elem: 'title', content: json.title},
      json.subtitle && {elem: 'subtitle', content: json.subtitle}
    ]),

    elem('title').tag()('h1'),

    elem('subtitle').tag()('p')
);
