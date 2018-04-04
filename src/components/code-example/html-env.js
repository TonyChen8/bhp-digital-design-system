const script = [
  "<script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' ></script>",
  "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' ></script>",
  "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' ></script>",
];

const css = [
  "<link rel='stylesheet' href='/index-dark.css'>",
  "<link rel='stylesheet' href='/index-light.css'>",
  "<script defer src='https://use.fontawesome.com/releases/v5.0.9/js/all.js' integrity='sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl' crossorigin='anonymous'></script>"
];

const GetHtml = ( contents ) => {
  let id = "iframe" + Date.now();
  let html = contents.html || "";
  let src =
    `<head>` +
        css.join(" ").toString() +
        `<style>${contents.css || ""}</style>` +
    `</head>` +
    `<body>` +
        script.join(" ").toString() + html +
    `</body>`;

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

export { GetHtml };
