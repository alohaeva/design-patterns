import {demoFactory} from "./creationalPatterns/factory/demo";
import {demoSingleton} from "./creationalPatterns/singleton/demo";
import {demoPrototype} from "./creationalPatterns/prototype/demo";
import {demoAbstractFactory} from "./creationalPatterns/abstractFactory/demo";
import { demoBuilder } from "./creationalPatterns/builder/demo";

// structural
import {demoAdapter} from "./structuralPatterns/adapter/demo";
import { demoBridge } from "./structuralPatterns/bridge/demo";
import { demoComposite } from "./structuralPatterns/composite/demo";

// behavioural
import {demoVisitor} from "./behavioralPatterns/visitor/demo";
import {demoTemplateMethod} from "./behavioralPatterns/templateMethod/demo";
import {demoStrategy} from "./behavioralPatterns/strategy/demo";
import {demoState} from "./behavioralPatterns/state/demo";
import {demoObserver} from "./behavioralPatterns/observer/demo";
import {demoMomento} from "./behavioralPatterns/momento/demo";
import {demoMediator} from "./behavioralPatterns/mediator/demo";
import {demoIterator} from "./behavioralPatterns/iterator/demo";
import {demoDecorator} from "./structuralPatterns/decorator/demo";

/**
 * Demos of Creational Design Patterns
 */
// demoSingleton();
// demoPrototype();
// demoFactory("WEB");
// demoFactory("SERVER");
// demoAbstractFactory('Mac');
// demoAbstractFactory('Windows');
// demoBuilder();

/**
 * Demos of Structural Design Patterns
 */
// demoAdapter()
// demoBridge()
// demoComposite();
demoDecorator({ encryption: true, compression: true })
/**
 * Demos of Behavioural Design Patterns
 */
// demoVisitor();
// demoTemplateMethod();
// demoStrategy();
// demoState();
// demoObserver()
// demoMomento()
// demoMediator();
// demoIterator()
