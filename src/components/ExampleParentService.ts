import { inject, Lifecycle, scoped } from 'tsyringe';
import ExampleServiceInterface from './ExampleServiceInterface';

// `@injectable()` will also work for our demo, and it depends on the actual needs.
@scoped(Lifecycle.ContainerScoped)
export default class ExampleParentService {
  constructor(
    @inject('ExampleServiceInterface')
    private injectedService: ExampleServiceInterface,
  ) {}

  print() {
    this.injectedService.printMessage();
  }
}
