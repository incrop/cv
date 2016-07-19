"use strict";

block('job').content()((_, json) => [
  {elem: 'header', content: [
    {elem: 'title', content: json.title},
    {elem: 'company', content: json.company},
    {elem: 'dates', content: json.dates},
  ]},
  applyNext()
]);
