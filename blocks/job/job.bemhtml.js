"use strict";

block('job').content()((ctx, json) => [
  {elem: 'header', content: [
    ctx.mods.pic && {block: 'link', mix: {block: 'job', elem: 'pic'}, url: json.url},
    {elem: 'title', content: json.title},
    {block: 'link', mix: {block: 'job', elem: 'company'}, url: json.url, content: json.company},
    {elem: 'dates', content: json.dates},
  ]},
  applyNext()
]);
