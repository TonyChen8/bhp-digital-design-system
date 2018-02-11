webpackJsonp([0x885ab75c7388],{904:function(n,a){n.exports={data:{uiComponentsYaml:{title:"Navbar",category:"UI components",examples:[{title:"Usage",introduction:null,subTitle:"Example",react:'import React from \'react\';\nimport {\n  Collapse,\n  Navbar,\n  NavbarToggler,\n  NavbarBrand,\n  Nav,\n  NavItem,\n  NavLink,\n  UncontrolledDropdown,\n  DropdownToggle,\n  DropdownMenu,\n  DropdownItem\n} from \'reactstrap\';\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      isOpen: false\n    };\n  }\n  toggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    });\n  }\n  render() {\n    return (\n      <div>\n        <Navbar light expand="lg">\n          <NavbarBrand href="/">Navbar</NavbarBrand>\n          <NavbarToggler onClick={this.toggle} />\n          <Collapse isOpen={this.state.isOpen} navbar>\n            <Nav navbar>\n              <NavItem active>\n                <NavLink href="/components/">Home</NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="https://www.bhp.com">Link</NavLink>\n              </NavItem>\n              <UncontrolledDropdown nav inNavbar>\n                <DropdownToggle nav caret>\n                  Dropdown\n                </DropdownToggle>\n                <DropdownMenu >\n                  <DropdownItem>Action</DropdownItem>\n                  <DropdownItem>Another action</DropdownItem>\n                  <DropdownItem divider />\n                  <DropdownItem>Something else here</DropdownItem>\n                </DropdownMenu>\n              </UncontrolledDropdown>\n              <NavItem>\n                <NavLink disabled href="https://www.bhp.com">Disabled</NavLink>\n              </NavItem>\n            </Nav>\n            <Nav className="ml-auto" navbar>\n              <NavItem>\n                <NavLink href="https://www.bhp.com">Help</NavLink>\n              </NavItem>\n            </Nav>\n          </Collapse>\n        </Navbar>\n      </div>\n    );\n  }\n}\n',css:null,html:'<nav class="navbar navbar-expand-lg navbar-light">\n  <a class="navbar-brand" href="#">Navbar</a>\n  <button\n    class="navbar-toggler"\n    type="button"\n    data-toggle="collapse"\n    data-target="#navbarSupportedContent"\n    aria-controls="navbarSupportedContent"\n    aria-expanded="false"\n    aria-label="Toggle navigation"\n  >\n    <span class="navbar-toggler-icon"></span>\n  </button>\n\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav">\n      <li class="nav-item active">\n        <a class="nav-link" href="#">\n          Home <span class="sr-only">(current)</span>\n        </a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n      </li>\n      <li class="nav-item dropdown">\n        <a\n          class="nav-link dropdown-toggle"\n          href="#" id="navbarDropdown"\n          role="button"\n          data-toggle="dropdown"\n          aria-haspopup="true"\n          aria-expanded="false"\n        >\n          Dropdown\n        </a>\n        <div class="dropdown-menu" aria-labelledby="navbarDropdown">\n          <a class="dropdown-item" href="#">Action</a>\n          <a class="dropdown-item" href="#">Another action</a>\n          <div class="dropdown-divider"></div>\n          <a class="dropdown-item" href="#">Something else here</a>\n        </div>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link disabled" href="#">Disabled</a>\n      </li>\n    </ul>\n    <ul class="navbar-nav ml-auto">\n      <li class="nav-item">\n        <a class="nav-link" href="#">Help</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n',actualHtml:null}],fields:{slug:"/ui-components/navbar/",preHtml:"<p>The navbar is a wrapper that positions branding, navigation, and other elements in a concise header. It's easily extensible and, thanks to the Collapse plugin, can easily integrate responsive behaviors.</p>\n",postHtml:"\n"}}},pathContext:{slug:"/ui-components/navbar/"}}}});
//# sourceMappingURL=path---ui-components-navbar-96eb762ffa5c1ddebdfa.js.map