block('section')(
  tag()('section'),

  content()((_, json) => [
    {elem: 'title', content: json.title},
    applyNext()
  ]),

  elem('title').tag()('h2')
)
