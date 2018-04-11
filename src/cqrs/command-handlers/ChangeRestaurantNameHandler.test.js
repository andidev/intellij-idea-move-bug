// @flow
const { it, expect } = global;
import { ChangeRestaurantNameHandler } from './ChangeRestaurantNameHandler';
import { ChangeRestaurantName } from '../commands/ChangeRestaurantName';

it('handle should handle command', () => {

    // Given
    const handler = new ChangeRestaurantNameHandler();
    const command = new ChangeRestaurantName({
        restaurantId: "123",
        name: "Bra Hak"
    });

    // When
    handler.handle(command);

    // Then
    expect(true)
        .toBe(true);
});
