// @flow
import { Command, type CommandType } from '../Command';

export class ChangeRestaurantName extends Command {
    static commandType: CommandType = 'ChangeRestaurantName';

    commandType: CommandType = ChangeRestaurantName.commandType;

    restaurantId: string;

    name: string;

    constructor(command: { restaurantId: string, name: string }) {
        super();
        this.restaurantId = command.restaurantId;
        this.name = command.name;
    }
}
