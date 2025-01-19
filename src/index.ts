import { demoFactory } from './creationalPatterns/factory/demo';
import { demoSingleton } from './creationalPatterns/singleton/demo';
import { demoPrototype } from './creationalPatterns/prototype/demo';
import { demoAbstractFactory } from './creationalPatterns/abstractFactory/demo';
import { demoBuilder } from './creationalPatterns/builder/demo';

// structural
import { demoAdapter } from './structuralPatterns/adapter/demo';
import { demoBridge } from './structuralPatterns/bridge/demo';
import { demoComposite } from './structuralPatterns/composite/demo';
import { demoFacade } from './structuralPatterns/facade/demo';
import { demoDecorator } from './structuralPatterns/decorator/demo';

// behavioural
import { demoVisitor } from './behavioralPatterns/visitor/demo';
import { demoTemplateMethod } from './behavioralPatterns/templateMethod/demo';
import { demoStrategy } from './behavioralPatterns/strategy/demo';
import { demoState } from './behavioralPatterns/state/demo';
import { demoObserver } from './behavioralPatterns/observer/demo';
import { demoMomento } from './behavioralPatterns/momento/demo';
import { demoMediator } from './behavioralPatterns/mediator/demo';
import { demoIterator } from './behavioralPatterns/iterator/demo';
import { demoFlyweight } from './structuralPatterns/flyweight/demo';
import { demoProxy } from './structuralPatterns/proxy/demo';
import { demoChainOfResponsibility } from './behavioralPatterns/chainOfResponsibility/demo';
import { demoCommand } from './behavioralPatterns/command/demo';

/**
 * Demos of Creational Design Patterns
 */
// console.log('----- Singleton -----');
// demoSingleton();
// console.log('----- Prototype -----');
// demoPrototype();
// console.log('----- Factory -----');
// demoFactory('WEB');
// demoFactory('SERVER');
// console.log('----- Abstract Factory -----');
// demoAbstractFactory('Mac');
// demoAbstractFactory('Windows');
// console.log('----- Builder -----');
// demoBuilder();

/**
 * Demos of Structural Design Patterns
 */
// console.log('----- Adapter -----');
// demoAdapter();
// console.log('----- Bridge -----');
// demoBridge();
// console.log('----- Composite -----');
// demoComposite();
// console.log('\n----- Decorator -----');
// demoDecorator({ encryption: true, compression: true });
// console.log('\n----- Facade -----');
// demoFacade();
// console.log('\n----- Flywieght -----');
// demoFlyweight();
// console.log('\n----- Proxy -----');
// demoProxy();
/**
 * Demos of Behavioural Design Patterns
 */
// console.log('\n----- Chain Of Responsibility -----');
// demoChainOfResponsibility();
console.log('\n----- Command -----');
demoCommand();
// console.log('\n----- Visitor -----');
// demoVisitor();
// console.log('----- Template Method -----');
// demoTemplateMethod();
// console.log('----- Strategy -----');
// demoStrategy();
// console.log('----- State -----');
// demoState();
// console.log('----- Observer -----');
// demoObserver();
// console.log('----- Momento -----');
// demoMomento();
// console.log('----- Mediator -----');
// demoMediator();
// console.log('----- Iterator -----');
// demoIterator();
