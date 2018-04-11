// @flow
import { CommandHandler } from './command-handlers/CommandHandler';
import type { CommandType } from './commands/Command';

export class CommandHandlerRegistry {

    registry: { [CommandType]: CommandHandler } = {};

    addCommandHandler(commandHandler: CommandHandler) {
        if (this.registry[commandHandler.getCommandType()]) {
            throw `A handler is already registered for command type ${commandHandler.getCommandType()}`;
        }
        this.registry[commandHandler.getCommandType()] = commandHandler;
    }

    getCommandHandler(commandType: CommandType): CommandHandler {
        const commandHandler = this.registry[commandType];
        if (commandHandler == null) {
            throw `No handler registered for command type ${commandType}`;
        }
        return commandHandler;
    }

}
