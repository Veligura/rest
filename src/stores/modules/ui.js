const initialState = {
    roomInfoDrawerState: 'close',
    sectionsState: {
        Favorites: false,
        Unread: false,
        Channels: false,
        Organizations: false
    }
}

export default function ui(state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}