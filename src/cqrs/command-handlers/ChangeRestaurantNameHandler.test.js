// @flow
const { it, expect } = global;
import { ChangeRestaurantNameHandler } from './ChangeRestaurantNameHandler';
import { ChangeRestaurantName } from '../commands/ChangeRestaurantName';

it('test', () => {

    // Given
    const handler = new ChangeRestaurantNameHandler();

    // When
    handler.handle(new ChangeRestaurantName({restaurantId: "123", name: "Bra Hak"}));

    // Then
    expect(true)
        .toBe(true);
});
