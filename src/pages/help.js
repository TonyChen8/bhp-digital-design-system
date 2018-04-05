import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemBody
} from "bhp-ui-react";
import s from "./help.module.scss";

export default class HelpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionOpen: -1
    };
  }

  toggleSection(section) {
    this.setState(prevState => ({
      sectionOpen: prevState.sectionOpen == section ? -1 : section
    }));
  }

  render() {
    const { sectionOpen } = this.state;

    return (
      <div className="container">
        <h3 className={s.pageHeader}>How to use these libraries</h3>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeader
              onClick={() => this.toggleSection(0)}
              isOpen={sectionOpen == 0}
              withArrow
            >
              ReactJS
            </AccordionItemHeader>

            <AccordionItemBody isOpen={sectionOpen == 0}>
              <ul>
                <li>
                  Install the ReactJS CLI, if you haven't already done so.
                  <kbd>npm install -g create-react-app</kbd>
                </li>
                <li>
                  Create a new project named react-sample with this CLI
                  command.
                  <kbd>
                    create-react-app react-sample <br />
                    cd react-sample
                  </kbd>
                </li>
                <li>
                  Install "bhp-ui-react"
                  <kbd> npm install bhp-ui-react </kbd>
                </li>
                <li>Include "index-light.css" and/or "index-dark.css" to "src/App.css"
                  <pre>
                    {`
                      @import url('path/to/bhp-ui-react/css/index-light.css');
                      @import url('path/to/bhp-ui-react/css/index-dark.css');

                      .App {
                        text-align: center;
                      }

                      .App-logo {
                        ......
                    `}
                  </pre>
                </li>
                <li>{`add class "theme-light" or "theme-dark" to your <html> tag, like <html class="theme-dark">`}</li>
                <li>
                  Import modules from "bhp-ui-react" in
                  "src/App.js"
                  <pre>
                    {`
                      import {
                        Accordion,
                        AccordionItem,
                        AccordionItemHeader,
                        AccordionItemBody
                      } from "bhp-ui-react";
                      class App extends Component {
                        render() {

                          return (
                            <Accordion>
                              ......
                            </Accordion>
                          );
                        }
                      }

                      export default App;
                    `}
                  </pre>
                </li>

                <li>
                  Go to the project directory and launch the application.
                  <kbd> yarn start </kbd>
                </li>

                <li>
                  For the simplest deployment, build for development and copy
                  the output directory to a web server.
                  <kbd>yarn build</kbd>
                </li>
                <li>
                  Copy everything within the output folder (build by default) to
                  a folder on the server.
                </li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeader
              onClick={() => this.toggleSection(1)}
              isOpen={sectionOpen == 1}
              withArrow
            >
              AngularJS
            </AccordionItemHeader>

            <AccordionItemBody isOpen={sectionOpen == 1}>
              <ul>
                <li>
                  Install the Angular CLI, if you haven't already done so.
                  <kbd>npm install -g "@angular/cli"</kbd>
                </li>
                <li>
                  Create a new project named angular-sample with this CLI
                  command.
                  <kbd>
                    ng new angular-sample <br />
                    cd angular-sample
                  </kbd>
                </li>
                <li>
                  Install "bhp-ui-angular"
                  <kbd> npm install bhp-ui-angular </kbd>
                </li>
                <li>Include "index-light.css" and/or "index-dark.css" to "src/app/app.component.css"
                  <pre>
                    {`
                      @import url('path/to/bhp-ui-react/css/index-light.css');
                      @import url('path/to/bhp-ui-react/css/index-dark.css');

                      .App {
                        text-align: center;
                      }

                      .App-logo {
                        ......
                    `}
                  </pre>
                </li>
                <li>{`add class "theme-light" or "theme-dark" to your <html> tag, like <html class="theme-dark">`}</li>

                <li>
                  Import modules from "bhp-ui-angular" in
                  "src/app/app.module.ts"
                  <pre>
                    {`
                    import {
                      BHPDropdownModule,
                      BHPSwitchModule,
                      BHPSpinnerModule,
                    } from "bhp-ui-angular";

                    @NgModule({
                      declarations: [AppComponent],
                      imports: [
                        BHPDropdownModule.forRoot(),
                        BHPSwitchModule.forRoot(),
                        BHPSpinnerModule.forRoot(),
                      ],
                      bootstrap: [AppComponent]
                    })`}
                  </pre>
                </li>
                <li>
                  Add components to your template file
                  "src/app/app.component.html":
                  <pre>
                    {`
                    <!-- switch -->
                    <BHPSwitch [isOn]="false" switchClass="toggle-switch-primary">
                      <div left>SÍ</div>
                      <div right>NO</div>
                    </BHPSwitch>
                    `}
                  </pre>
                </li>
                <li>
                  Generate routing. This step is optional.
                  <kbd>ng generate module app-routing --flat --module=app</kbd>
                </li>
                <li>
                  Go to the project directory and launch the application.
                  <kbd>ng serve --open</kbd>
                </li>

                <li>
                  For the simplest deployment, build for development and copy
                  the output directory to a web server.
                  <kbd>ng build --prod</kbd>
                </li>
                <li>
                  Copy everything within the output folder (dist by default) to
                  a folder on the server.
                </li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeader
              onClick={() => this.toggleSection(2)}
              isOpen={sectionOpen == 2}
              withArrow
            >
              HTML & CSS
            </AccordionItemHeader>

            <AccordionItemBody isOpen={sectionOpen == 2}>
              <ul>

                <li>
                  {`Copy the code below to your "index.html" and then put your code between the <body></body> tag.`}
                  <pre>
                    {`
                      <!DOCTYPE html>
                      <html class="light-theme">
                      <head>
                        <link rel="stylesheet" href="css/index-dark.css">
                        <link rel="stylesheet" href="css/index-light.css">
                        <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
                          integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
                          crossorigin="anonymous">
                        </script>
                      </head>
                      <body>
                        <p>
                          put your code here
                        </p>
                        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                        <body>
                      </html>
                    `}
                  </pre>
                </li>

                <li>
                  Copy everything within the project folder to a folder on the server.
                </li>
              </ul>

            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
