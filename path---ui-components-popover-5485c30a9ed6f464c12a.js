webpackJsonp([9065877062878],{906:function(e,n){e.exports={data:{uiComponentsYaml:{title:"Popover",category:"UI components",examples:[{title:"Usage",introduction:"The state of the popover is controlled using `isOpen`.\n",subTitle:"Example",react:'import React from \'react\';\nimport { Button, Popover, PopoverHeader, PopoverBody } from \'reactstrap\';\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      popoverOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Button id="Popover1" onClick={this.toggle}>\n          Popover on right\n        </Button>\n        <Popover\n          placement="right"\n          isOpen={this.state.popoverOpen}\n          target="Popover1"\n          toggle={this.toggle}\n        >\n          <PopoverHeader>Popover Title</PopoverHeader>\n          <PopoverBody>\n            Lorem ipsum dolor sit amet, conse ctetur adipisicing elit,\n            sed do eiusmod tempor incididunt ut laborerem ipsum dolor sit\n            amet, conse ctetur adipisicing elit, sed do eiusmod tempor\n            incididunt ut labore.\n          </PopoverBody>\n        </Popover>\n      </div>\n    );\n  }\n}\n',css:null,html:null,actualHtml:null},{title:"Positioning",introduction:"The position of the popover can be controlled with the `placement`\nproperty.\n",subTitle:"Example",react:"import React from 'react';\nimport { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';\n\nclass PopoverExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      popoverOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    });\n  }\n\n  render() {\n    const { buttonText, placement, id, withTitle } = this.props;\n    return (\n      <div>\n        <Button id={id} onClick={this.toggle}>\n          {buttonText}\n        </Button>\n        <Popover\n          placement={placement}\n          isOpen={this.state.popoverOpen}\n          target={id}\n          toggle={this.toggle}\n        >\n          {withTitle &&\n            <PopoverHeader>Popover Title</PopoverHeader>\n          }\n          <PopoverBody>\n            Lorem ipsum dolor sit amet, conse ctetur adipisicing elit,\n            sed do eiusmod tempor incididunt ut laborerem ipsum dolor sit\n            amet, conse ctetur adipisicing elit, sed do eiusmod tempor\n            incididunt ut labore.\n          </PopoverBody>\n        </Popover>\n      </div>\n    );\n  }\n}\n\nexport default () => {\n  return (\n    <div>\n      <PopoverExample\n        id='PopoverLeft'\n        buttonText='Popover on left with title'\n        placement='left'\n        withTitle\n      /><br/>\n\n      <PopoverExample\n        id='PopoverLeftNoTitle'\n        buttonText='Popover on left without title'\n        placement='left'\n      /><br />\n\n      <PopoverExample\n        id='PopoverTop'\n        buttonText='Popover on top'\n        placement='top'\n      /><br />\n\n      <PopoverExample\n        id='PopoverBottom'\n        buttonText='Popover below'\n        placement='bottom'\n      />\n    </div>\n  );\n}\n",css:null,html:null,actualHtml:null}],fields:{slug:"/ui-components/popover/",preHtml:'<p>Popovers are designed to give secondary content about a particular element to\na page or contain further options/actions for the user in a container. The\npopover interaction is more efficient for small interactions because it keeps\nthe user in the context of the action.</p>\n<p>When and how to use this component:</p>\n<ul>\n<li>When you have more information you need to present to the user as a\nsecondary.</li>\n<li>When you have too much information to fit in a Tooltip*.</li>\n<li>Only one popover can be open at any one time.</li>\n<li>Popovers can be fired from any clickable object within an interface\nincluding buttons, clickable icons, and links.</li>\n<li>Clicking anywhere on the screen should dismiss the popover.</li>\n<li>If a screen is resized, the popover should open witn the viewport at all\ntimes.</li>\n</ul>\n<div class="alert alert-info">\n  <i class="material-icons md-18 align-top">info</i>\n  If you require more detailed secondary information, consider using a modal dialog instead.\n</div>\n',postHtml:"\n"}}},pathContext:{slug:"/ui-components/popover/"}}}});
//# sourceMappingURL=path---ui-components-popover-5485c30a9ed6f464c12a.js.map