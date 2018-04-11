// @flow
const { it, expect } = global;
import { CommandHandlerRegistry } from './CommandHandlerRegistry';
import { ChangeRestaurantNameHandler } from './command-handlers/ChangeRestaurantNameHandler';

it('addCommandHandler should add command handler to registry', () => {
    // Given
    const registry = new CommandHandlerRegistry();
    const commandHandler = new ChangeRestaurantNameHandler();

    // When
    registry.addCommandHandler(commandHandler);

    // Then
    expect(registry.registry['ChangeRestaurantName'])
        .toBe(commandHandler);
});

it('getCommandHandler should get command handler from registry', () => {
    // Given
    const registry = new CommandHandlerRegistry();
    const commandHandler = new ChangeRestaurantNameHandler();
    registry.registry['ChangeRestaurantName'] = commandHandler;

    // When
    const commandHandlerInRegistry = registry.getCommandHandler("ChangeRestaurantName");

    // Then
    expect(commandHandlerInRegistry)
        .toBe(commandHandler);
});
