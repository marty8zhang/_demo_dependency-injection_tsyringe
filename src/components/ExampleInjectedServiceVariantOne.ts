import ExampleServiceInterface from './ExampleServiceInterface';

export default class ExampleInjectedServiceVariantOne implements ExampleServiceInterface {
  printMessage() {
    console.log('Hello from the DIed service variant ONE.');
  }
}
