// One time use non updatable data, yet moving it to redux
// will make it easier for testing
const INITIAL_STATE = {
    sections: [
        {
            title: 'Shoes',
            imageUrl:
                'https://images.pexels.com/photos/2759785/pexels-photo-2759785.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            linkUrl: 'shoes',
        },
        {
            title: 'Jackets',
            imageUrl:
                'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            linkUrl: 'jackets',
        },
        {
            title: 'Hats',
            imageUrl:
                'https://images.pexels.com/photos/2766848/pexels-photo-2766848.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            linkUrl: 'hats',
        },
        {
            title: 'Women Fashion',
            imageUrl:
                'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            linkUrl: 'women',
        },
        {
            title: 'Men Fashion',
            imageUrl:
                'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            linkUrl: 'men',
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
