import {bootstrap, Component, View} from 'angular2';


@Component({selector: 'my-app'})
@View({
  template: `<h1>{{message}}</h1>`
})
class App {
  message: string;

  constructor() {
    this.message = 'Hello';

    // Wanna see rtts_assert in action? Uncomment the next line
    //this.message = undefined;
  }
}

bootstrap(App);
