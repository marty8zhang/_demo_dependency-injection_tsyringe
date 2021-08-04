import ExampleServiceInterface from './ExampleServiceInterface';

export default class ExampleInjectedService implements ExampleServiceInterface {
  printMessage() {
    console.log('Hello from the DIed service.');
  }
}
