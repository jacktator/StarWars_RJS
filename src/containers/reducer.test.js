import { reducer } from './reducer';

describe('reducer', () => {

    it('should change name to `Darth Vader` when action is `Evil`', () => {
        // Arrange
        const state = {
            name: ''
        }
        const action = "EVIL"
        // Act
        const newState = reducer(state, action);
        // Assert
        expect(newState.name).toStrictEqual('Darth Vader');
    });
    // it();
    // it();

});
  