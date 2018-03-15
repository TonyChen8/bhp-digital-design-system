import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import s from "./style.module.scss";
import { GetHtml } from "./html-env.js";
import { GetAngular } from "./angular-env.js";

export default ({ contents, codeType }) => {
  const source =
    codeType == "react" && contents.react
      ? contents.react.source
      : contents[codeType];

  const ReactExample = contents.react ? contents.react.fn : null;

  return (
    <div className={s.exampleContainer}>
      {contents.title && <h4 className="h4-light">{contents.title}</h4>}

      {contents.introduction && <p>{contents.introduction}</p>}

      <div className={s.exampleDisplay}>
        {contents.subTitle && (
          <div className={s.exampleSubTitle}>{contents.subTitle}</div>
        )}

        {codeType === "react" ||  codeType === "css"
          ? ReactExample
              ? <div className={s.exampleHtml}>
                  <style>{contents.css || ""}</style>
                  <ReactExample />
                </div>
              : ""
          : <div
              className={s.exampleHtml}
              dangerouslySetInnerHTML={
                codeType == "html"
                ? {__html: `${GetHtml(contents)}`}
                : codeType == "angular"
                  ? {__html: `${GetAngular(contents)}`}
                  : contents.actualHtml
                    ? {__html: contents.actualHtml}
                    : {__html: contents.html}
              }
            />
        }

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
