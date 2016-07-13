block('page')(
    wrap()((_, json) => [
        '<!DOCTYPE html>',
        {
            tag: 'html',
            content: [
                {
                    elem: 'head',
                    content: [
                        {tag: 'meta', attrs: {charset: 'utf-8'}},
                        {tag: 'meta',attrs: {
                            'http-equiv': 'X-UA-Compatible',
                            content: 'IE=edge'
                        }},
                        {tag: 'title', content: json.title},
                        json.head,
                        json.styles,
                        json.favicon && {elem: 'favicon', url: json.favicon }
                    ]
                },
                json
            ]
        }
    ]),

    tag()('body'),

    content()((_, json) => [
        applyNext(),
        json.scripts
    ]),

    elem('head')(
        bem()(false),
        tag()('head')
    ),

    elem('meta')(
        bem()(false),
        tag()('meta')
    ),

    elem('link')(
        bem()(false),
        tag()('link')
    ),

    elem('favicon')(
        bem()(false),
        tag()('link'),
        attrs()((_, json) => ({rel: 'shortcut icon', href: json.url}))
    ),

    elem('css')(
        bem()(false),
        tag()('style'),
        match((_, json) => json.url)(
            tag()('link'),
            attrs()((_, json) => ({rel: 'stylesheet', href: json.url}))
        )
    ),

    elem('js')(
        bem()(false),
        tag()('script'),
        attrs()((_, json) => ({src: json.url}))
    )
);
