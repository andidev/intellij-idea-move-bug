// @flow
import { CommandHandler } from '../CommandHandler';
import type { CommandType } from '../Command';
import { Command } from '../Command';
import { ChangeRestaurantName } from './ChangeRestaurantName';

export class ChangeRestaurantNameHandler implements CommandHandler {

    getCommandType(): CommandType {
        return ChangeRestaurantName.commandType;
    }

    handle(command: Command) {
        const changeRestaurantName = ((command: any): ChangeRestaurantName);
        console.log('_command = ', changeRestaurantName.name);
    }

}
