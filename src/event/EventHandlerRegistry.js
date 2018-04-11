import EventHandler from './EventHandler';

export class EventHandlerRegistry {

    registry: { [string]: EventHandler } = {};

    addEventHandler(commandType: string, eventHandler: EventHandler) {
        if (registry[commandType]) {
            throw `A handler is already registered for command type ${commandType}`;
        }
        registry.put(commandType, eventHandler);
    }

    getEventHandler(commandType: string): EventHandler {
        const eventHandler: EventHandler = registry[commandType];
        if (eventHandler == null) {
            throw `No handler registered for command type ${commandType}`;
        }
        return eventHandler;
    }

}
