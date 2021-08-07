import { reducer } from './reducer';
import { initialState } from './state';

describe('reducer', () => {

    it('should change name to `Darth Vader` when action is `Evil`', () => {
        // Arrange
        const state = initialState;
        const action = "EVIL"
        // Act
        const newState = reducer(state, action);
        // Assert
        expect(newState.name).toStrictEqual('Darth Vader');
    });
    // it();
    // it();

});
  