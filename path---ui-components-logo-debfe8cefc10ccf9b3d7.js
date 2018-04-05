webpackJsonp([0x79f403d4383d],{902:function(o,n){o.exports={data:{uiComponentsYaml:{title:"BHP Logo",category:"UI components",examples:[{title:"Primary logo",introduction:"The primary logo is the first option when choosing and applying a logo.\nOur logo must be sized large enough to be easily read on every\napplication.\n",subTitle:"Example",react:"import React from 'react';\nimport { BHPLogo } from 'bhp-ui-react';\n\n\nexport default () => {\n  return (\n    <div>\n      <BHPLogo className='mr-4' width={100} />\n      <BHPLogo />\n    </div>\n  );\n};\n",css:null,html:null,actualHtml:null},{title:"Colour variants",introduction:"The first preference is to use the orange logo, however sometimes to\nensure legibility the black or white options will work better.\n",subTitle:"Example",react:"import React from 'react';\nimport { lightTheme } from 'bhp-ui-react';\nimport { BHPLogo } from 'bhp-ui-react';\n\nexport default () => {\n  return (\n    <div className='d-flex'>\n      <BHPLogo className='m-2' />\n      <BHPLogo className='m-2' color='black' />\n      <BHPLogo className='m-2' color={lightTheme.grays['500']} />\n      <div className='p-2 bg-primary'>\n        <BHPLogo className='align-middle' color='white' />\n      </div>\n    </div>\n  );\n};\n",css:null,html:null,actualHtml:null}],fields:{slug:"/ui-components/logo/",preHtml:'<p>An SVG logo component that supports the BHP logo, with BHP’s primary brand\ncolour, and its black and white logo versions.</p>\n<p>The single most identifiable element of our identity is our logo. Consistent\nuse of our logo is key to retaining brand strength through immediate\nrecognition of who we are and what we stand for as a Company.</p>\n<p><img src="/logo-usage.png" /><br/></p>\n',postHtml:'<hr />\n<h4 class="h4-light">Application</h4>\n<div class="row">\n<div class="col-4">\n<img src="/logo-usage-bad.png" width="50%" />\n</div>\n<div class="offset-2 col-4">\n<img src="/logo-usage-correct.png" />\n</div>\n</div>\n<div class="row">\n<div class="col-4 text-danger">\n<hr />\n<p><i class="material-icons md-18 align-top">clear</i> WRONG<br /></p>\n<p>Any changes to our logo diminish its integrity and the equity of our brand.\nThe examples shown here are some specific "do nots" for our logo.</p>\n</div>\n<div class="offset-2 col-4 text-success">\n<hr />\n<p><i class="material-icons md-18 align-top">done</i> CORRECT<br /></p>\n<p>While minimum sizes are specified, it is preferred that the logo appears\nlarger than the minimum size when possible.</p>\n<p>MINIMUM SIZE: height: 24 pixels</p>\n</div>\n</div>\n'}}},pathContext:{slug:"/ui-components/logo/"}}}});
//# sourceMappingURL=path---ui-components-logo-debfe8cefc10ccf9b3d7.js.map