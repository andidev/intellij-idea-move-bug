// @flow
import CommandHandler from './CommandHandler';

export class CommandHandlerRegistry {

    registry: { [string]: CommandHandler } = {};

    addCommandHandler(commandType: string, commandHandler: CommandHandler) {
        if (registry[commandType]) {
            throw `A handler is already registered for command type ${commandType}`;
        }
        registry.put(commandType, commandHandler);
    }

    getCommandHandler(commandType: string): CommandHandler {
        const commandHandler: CommandHandler = registry[commandType];
        if (commandHandler == null) {
            throw `No handler registered for command type ${commandType}`;
        }
        return commandHandler;
    }

}
