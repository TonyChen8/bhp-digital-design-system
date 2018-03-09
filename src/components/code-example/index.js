import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import s from "./style.module.scss";

const htmlEnvironment = [
  "<link rel='stylesheet' href='/index-dark.css'>",
  "<link rel='stylesheet' href='/index-light.css'>",
  "<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>",
  "<script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' ></script>",
  "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' ></script>",
  "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' ></script>",
];

export default ({ contents, codeType }) => {
  const source =
    codeType == "react" && contents.react
      ? contents.react.source
      : contents[codeType];

  const ReactExample = contents.react ? contents.react.fn : null;

  //create a new environment to run plain javascript and AngularJs
  const runEnvironment = (() => {
    if (codeType === "html" || codeType === "angular") {
      let code = codeType === "html" ? contents.html : contents.angular;

      let src = htmlEnvironment.join(" ").toString() + code;
      src = src.replace(/"/g,"&quot;");
      let id = "iframe"+ Date.now();
      return (
        `<iframe style= "width: 100%" id="` + id + `" frameBorder="0" onLoad="
                let iframe = document.getElementById('` + id + `');
                console.log(iframe);
                  try {
                        iframe.contentWindow.document.getElementsByTagName('html')[0].className ='light-theme';
                        let bHeight = iframe.contentWindow.document.body.scrollHeight;
                        let dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
                        let height = Math.max(bHeight, dHeight);
                        iframe.height = height;
                  } catch (ex) {console.error(ex)}"
        srcdoc="` + src + `" />`
      );
    } else {
      return contents.actualHtml ? contents.actualHtml : contents.html;
    }
  })();

  return (
    <div className={s.exampleContainer}>
      {contents.title && <h4 className="h4-light">{contents.title}</h4>}

      {contents.introduction && <p>{contents.introduction}</p>}

      <div className={s.exampleDisplay}>
        {contents.subTitle && (
          <div className={s.exampleSubTitle}>{contents.subTitle}</div>
        )}

        {codeType == "react" ? (
          ReactExample ? (
            <div className={s.exampleHtml}>
              <ReactExample />
            </div>
          ) : (
            ""
          )
        ) : (
          <div
            className={s.exampleHtml}
            dangerouslySetInnerHTML={{
              __html: `<style>${contents.css || ""}</style>${runEnvironment}`
            }}
          />
        )}

        <div className={s.exampleCode}>
          <pre>
            <code>{source}</code>
          </pre>

          <div className={s.copyButton}>
            <CopyToClipboard text={source}>
              <button className="btn btn-outline-secondary">Copy</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};
