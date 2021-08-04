// Only needed once before where DI, e.g., `container.resolve()`, happens.
import 'reflect-metadata';
import ExampleParentService from './components/ExampleParentService';
import containers from './containers';

const defaultService = containers.default.resolve(ExampleParentService);
defaultService.print();

const serviceVariantOne = containers.variantOne.resolve(ExampleParentService);
serviceVariantOne.print();

const serviceVariantTwo = containers.variantTwo.resolve(ExampleParentService);
serviceVariantTwo.print();
