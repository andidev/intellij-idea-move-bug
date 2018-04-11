// @flow
import { CommandHandler } from './CommandHandler';
import { Command } from '../commands/Command';
import type { CommandType } from '../commands/Command';
import { ChangeRestaurantName } from '../commands/ChangeRestaurantName';

export class ChangeRestaurantNameHandler implements CommandHandler {

    getCommandType(): CommandType {
        return ChangeRestaurantName.commandType;
    }

    handle(command: Command) {
        const changeRestaurantName = ((command: any): ChangeRestaurantName);
        console.log('_command = ', changeRestaurantName.name);
    }

}
