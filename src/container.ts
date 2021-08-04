import { container } from 'tsyringe';
import ExampleInjectedService from './components/ExampleInjectedService';

container.register('ExampleServiceInterface', {
  useClass: ExampleInjectedService,
});

export default container;
