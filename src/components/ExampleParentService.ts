import { injectable, inject } from 'tsyringe';
import ExampleServiceInterface from './ExampleServiceInterface';

@injectable()
export default class ExampleParentService {
  constructor(
    @inject('ExampleServiceInterface')
    private injectedService: ExampleServiceInterface,
  ) {}

  print() {
    this.injectedService.printMessage();
  }
}
