import {bootstrap, Component, View} from 'angular2';


@Component({selector: 'my-app'})
@View({template: `<h1>Hello</h1>`})
class App {
  constructor() {
  }
}


bootstrap(App);
