## ReactJS

Install the ReactJS CLI, if you haven't already done so.

```
npm install -g create-react-app
```

Create a new project named react-sample with this CLI
command.

```
create-react-app react-sample <br />
cd react-sample
```

Install `bhp-ui-react`

```
npm install bhp-ui-react
```

Include `index-light.css` and `index-dark.css` to

##### `src/App.css`

```
  {
    @import url('path/to/bhp-ui-react/css/index-light.css');
    @import url('path/to/bhp-ui-react/css/index-dark.css');

    .App {
      text-align: center;
    }

    .App-logo {
      ......
    }
  }
```

Import modules from `bhp-ui-react` in

##### `src/App.js`

```
  {
    import {
      Accordion,
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
  }
```

Go to the project directory and launch the application.

```
 yarn start
```

For the simplest deployment, build for development and copy
the output directory to a web server.

```
yarn build
```

Copy everything within the output folder (build by default) to
a folder on the server.

## AngularJS

Install the Angular CLI, if you haven't already done so.

```
npm install -g "@angular/cli"
```

Create a new project named angular-sample with this CLI
command.

```
ng new angular-sample <br />
cd angular-sample
```

Install `bhp-ui-angular`

```
npm install bhp-ui-angular
```

Include `index-light.css` and/or `index-dark.css` to

##### `src/app/app.component.css`

```
{
@import url('path/to/bhp-ui-react/css/index-light.css');
@import url('path/to/bhp-ui-react/css/index-dark.css');

.App {
 text-align: center;
}

.App-logo {
 ......
}
```

Import modules from `bhp-ui-angular` in

##### `src/app/app.module.ts`

```
{
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
})
}
```

Add components to your template file

##### `src/app/app.component.html`:

```
{
<!-- switch -->
<BHPSwitch [isOn]="false" switchClass="toggle-switch-primary">

<div left>SÍ</div>
<div right>NO</div>
</BHPSwitch>
}
```

Generate routing. (This step is optional)

```
ng generate module app-routing --flat --module=app
```

Go to the project directory and launch the application.

```
ng serve --open
```

For the simplest deployment, build for development and copy
the output directory to a web server.

```
ng build --prod
```

Copy everything within the output folder (dist by default) to
a folder on the server.

## HTML & CSS

Copy the code below to your `index.html` and then put your code between the `<body></body>` tag.

```
{
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

}
```

Copy everything within the project folder to a folder on the server.
