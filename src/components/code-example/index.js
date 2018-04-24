import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import s from "./style.module.scss";

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

        {
        codeType === "react" ||
        codeType === "angular" ||
        codeType === "css"
        ? ReactExample
            ? <div className={s.exampleHtml}>
                <style>{contents.css || ""}</style>
                <ReactExample />
              </div>
            : ""
        : <div
            className={s.exampleHtml}
            dangerouslySetInnerHTML={{
              __html: `<style>${contents.css || ""}</style>${
                contents.actualHtml ? contents.actualHtml : contents.html
              }`
            }}
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
