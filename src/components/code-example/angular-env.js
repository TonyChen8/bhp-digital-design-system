import MainBundle from "../../../static/angular-env/main.bundle.js";

const script = [
  "<script type='text/javascript' src='/angular-env/inline.bundle.js'></script>",
  "<script type='text/javascript' src='/angular-env/polyfills.bundle.js'></script>",
  "<script type='text/javascript' src='/angular-env/vendor.bundle.js'></script>",
];

const css = [
  "<link rel='stylesheet' href='/index-dark.css'>",
  "<link rel='stylesheet' href='/index-light.css'>",
  "<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>",
];


// use prebuilded Angular SPA as template to run Angularjs in Reactjs
const GetAngular = ( contents ) => {
  let id = "iframe" + Date.now();
  let code = contents.angular || "";
  let mainScript = MainBundle.replace(/@code@/g, code.split("\n").join(""))

  // this function will be set to component's controller in template
  let componentConstructor = `function(){ }`
  if (contents.component && contents.component.length>0) {
    window.eval( `var f = `+ contents.component)
    if (typeof(f) === "function") {
      componentConstructor = contents.component;
    }else{
      console.error("Component constructor must be a function.")
    }
  }

  let src =
    `<head>` +
        css.join(" ").toString() +
        `<style>${contents.css || ""}</style>` +
    `</head>
      <body>
        <script>
          window.AppComponent =` + componentConstructor +
        `</script>
        <app-root></app-root>` +
        script.join(" ").toString() + mainScript +
    `</body>`;

  // escape ' " '
  src = src.replace(/"/g, "&quot;");

  return (
    `<iframe style= "width: 100%" id="` + id +
    `" frameBorder="0" onLoad="
      let iframe = document.getElementById('` + id + `');
      try {
        iframe.contentWindow.document.getElementsByTagName('html')[0].className ='light-theme';
        let bHeight = iframe.contentWindow.document.body.scrollHeight;
        let dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        let height = Math.min(bHeight, dHeight);
        iframe.height = height;
      } catch (ex) {console.error(ex)}"
      srcdoc="` + src + `" />`
  );
  return "";
};

export { GetAngular };
