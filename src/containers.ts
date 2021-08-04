import { container } from 'tsyringe';
import DefaultExampleInjectedService from './components/DefaultExampleInjectedService';
import ExampleInjectedServiceVariantOne from './components/ExampleInjectedServiceVariantOne';
import ExampleInjectedServiceVariantTwo from './components/ExampleInjectedServiceVariantTwo';

container.register('ExampleServiceInterface', {
  useClass: DefaultExampleInjectedService,
});

const containerVariantOne = container.createChildContainer();
containerVariantOne.register('ExampleServiceInterface', {
  useClass: ExampleInjectedServiceVariantOne,
});

const containerVariantTwo = container.createChildContainer();
containerVariantTwo.register('ExampleServiceInterface', {
  useClass: ExampleInjectedServiceVariantTwo,
});

export default Object.freeze({
  default: container,
  variantOne: containerVariantOne,
  variantTwo: containerVariantTwo,
});
