// @flow
import CommandHandler from './CommandHandler';

export class CommandHandlerRegistry {

    registry: { [string]: typeof CommandHandler } = {};

    addCommandHandler(commandType: string, commandHandler: typeof CommandHandler) {
        if (this.registry[commandType]) {
            throw `A handler is already registered for command type ${commandType}`;
        }
        this.registry.put(commandType, commandHandler);
    }

    getCommandHandler(commandType: string): typeof CommandHandler {
        const commandHandler: typeof CommandHandler = this.registry[commandType];
        if (commandHandler == null) {
            throw `No handler registered for command type ${commandType}`;
        }
        return commandHandler;
    }

}
