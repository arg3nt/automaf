export default class Player {
    constructor(id, name, character, state) {
        this.id = id;
        this.name = name;
        this.character = character;
        this.initialState = state;
    }

    getInitialState() {
        return this.initialState;
    }
}
