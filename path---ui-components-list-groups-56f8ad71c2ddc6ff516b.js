webpackJsonp([74021216528242],{929:function(t,s){t.exports={data:{uiComponentsYaml:{title:"List groups",category:"UI components",examples:[{title:"Usage",introduction:null,subTitle:"Example",react:"import React from 'react';\nimport { ListGroup, ListGroupItem } from 'reactstrap';\n\nconst Example = () => {\n  return (\n    <ListGroup>\n      <ListGroupItem>Task list key</ListGroupItem>\n      <ListGroupItem>Task list key</ListGroupItem>\n      <ListGroupItem active>Task list key</ListGroupItem>\n      <ListGroupItem>Task list key</ListGroupItem>\n      <ListGroupItem>Task list key</ListGroupItem>\n    </ListGroup>\n  );\n};\n\nexport default Example;\n",angular:'<ListGroup [sources]=sources (userSelected)="select=$event"></ListGroup>\n<p>selected: {{select.key}}</p>\n<p>value: {{select.value}}</p>\n<p>index: {{select.index}}</p>\n',component:'this.sources = [\n  { key: "Tom", value: 1 },\n  { key: "John", value: 2 },\n  { key: "Jim", value: 3 }\n];\nthis.select={ key: "", value: "", index:"" };\n',css:null,html:'<ul class="list-group">\n  <li class="list-group-item">Task list key</li>\n  <li class="list-group-item">Task list key</li>\n  <li class="list-group-item active">Task list key</li>\n  <li class="list-group-item">Task list key</li>\n  <li class="list-group-item">Task list key</li>\n</ul>\n',actualHtml:null}],fields:{slug:"/ui-components/list-groups/",preHtml:"\n",postHtml:"\n"}}},pathContext:{slug:"/ui-components/list-groups/"}}}});
//# sourceMappingURL=path---ui-components-list-groups-56f8ad71c2ddc6ff516b.js.map