import ExampleServiceInterface from './ExampleServiceInterface';

export default class ExampleInjectedServiceVariantTwo implements ExampleServiceInterface {
  printMessage() {
    console.log('Hello from the DIed service variant TWO.');
  }
}
