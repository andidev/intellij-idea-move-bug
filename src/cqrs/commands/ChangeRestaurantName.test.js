// @flow
import { ChangeRestaurantName } from './ChangeRestaurantName';

const { it, expect } = global;

it('static commandType should be set on command', () => {
    // Given When Then
    expect(ChangeRestaurantName.commandType)
        .toBe('ChangeRestaurantName');
});

it('fieldcommandType should be set on command', () => {
    // Given
    const command = new ChangeRestaurantName({ restaurantId: "", name: "" });

    // When Then
    expect(command.commandType)
        .toBe('ChangeRestaurantName');
});
