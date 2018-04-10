// @flow
import { Command } from './Command';

export class ChangeRestaurantName extends Command {
    restaurantId: string;
    name: string;

    constructor(command: {restaurantId: string, name: string}) {
        super();
        this.restaurantId = command.restaurantId;
        this.name = command.name;
    }
}
