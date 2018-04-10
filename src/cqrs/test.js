// // @flow
// const { it, expect } = global;
// import { CommandHandlerRegistry } from './CommandHandlerRegistry';
// import { ChangeRestaurantNameHandler } from './command-handlers/ChangeRestaurantNameHandler';
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
//
//
// it('test', () => {
//
//     handler({commandType: "123", name: "asd"});
//
//     expect(true)
//         .toBe(true);
// });
