// @flow
import { ChangeRestaurantName } from './commands/ChangeRestaurantName';

const { it, expect } = global;
import { CommandHandlerRegistry } from './CommandHandlerRegistry';
import { ChangeRestaurantNameHandler } from './command-handlers/ChangeRestaurantNameHandler';
import { Command } from './commands/Command';
//
// type Command = {
//     commandType: string,
// }
//
// type Command2<T> = {
//     ...T,
// }
//
//
// type RestaurantNameChanged = {
//     name: string,
// } & Command;
//
//
// function handler(command: Command2<RestaurantNameChanged>) {
//     console.log('command = ', command.name);
// }
//
// function add(command: Command) {
//     if (command && command.name) {
//         command.name
//     }
// }
//


//
//
it('test', () => {

    let command: Command = new ChangeRestaurantName({restaurantId: "", name: ""});
    expect(command.commandType)
        .toBe("ChangeRestaurantName");
});
