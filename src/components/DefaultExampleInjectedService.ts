import ExampleServiceInterface from './ExampleServiceInterface';

export default class DefaultExampleInjectedService implements ExampleServiceInterface {
  printMessage() {
    console.log('Hello from the default DIed service.');
  }
}
