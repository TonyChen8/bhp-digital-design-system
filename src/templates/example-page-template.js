import classnames from "classnames";
import _ from "lodash";
import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import CodeExample from "../components/code-example";
import s from "./example-page-template.module.scss";

const allCodeTypes = [
  { name: "react", title: "React" },
  { name: "html", title: "HTML" },
  { name: "css", title: "CSS" },
  { name: "angular", title: "Angular" }
];

const CodeTypePicker = ({ codeType, codeTypes, onSelect }) => {
  return (
    <ul className={classnames("nav nav-tabs", s.codeTypePicker)}>
      {codeTypes.map(({ name, title }) => (
        <li key={name} className="nav-item" onClick={() => onSelect(name)}>
          <span
            className={classnames("nav-link", codeType == name && "active")}
          >
            {title}
          </span>
        </li>
      ))}
    </ul>
  );
};

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contents, hideCodeTypePicker } = this.props;
    let { codeType } = this.state;
    const { examples } = contents;
    // Filter only to those codeTypes present in at least one example
    const filteredCodeTypes = allCodeTypes.filter(({ name }) =>
      _.some(examples, example => {
        return !!example[name];
      })
    );
    codeType = codeType || filteredCodeTypes[0].name;
    return (
      <div className={s.examplePageContainer}>
        <div className="container">
          <h3 className={s.pageHeader}>{contents.title}</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: contents.fields.preHtml
            }}
          />

          {!hideCodeTypePicker && (
            <CodeTypePicker
              codeType={codeType}
              codeTypes={filteredCodeTypes}
              onSelect={name => this.setState({ codeType: name })}
            />
          )}

          {examples
            .filter(contents => !!contents[codeType])
            .map((contents, index) => (
              <div key={index} className={s.codeExampleContainer}>
                {(hideCodeTypePicker || index > 0) && <hr />}

                <CodeExample
                  key={index}
                  contents={contents}
                  codeType={codeType}
                />
              </div>
            ))}

          <div
            dangerouslySetInnerHTML={{
              __html: contents.fields.postHtml
            }}
          />
        </div>
      </div>
    );
  }
}

export default ({ contents, reactExamples, hideCodeTypePicker }) => {
  return (
    <div>
      <Breadcrumbs
        category={contents.category}
        slug={contents.fields.slug}
        title={contents.title}
      />

      <Template contents={contents} hideCodeTypePicker={hideCodeTypePicker} />
    </div>
  );
};
