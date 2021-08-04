// Only needed once before where DI, e.g., `container.resolve()`, happens.
import 'reflect-metadata';
import ExampleParentService from './components/ExampleParentService';
import container from './container';

const parentService = container.resolve(ExampleParentService);
parentService.print();
