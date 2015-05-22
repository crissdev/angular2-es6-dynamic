import {bootstrap, ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2';


@Component({selector: 'my-app'})
@View({template: `<h1>{{message}}</h1>`})
class App {
  constructor() {
    this.message = 'Hello';
  }
}

bootstrap(App);
