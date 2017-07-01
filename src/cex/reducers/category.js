import { UPDATE_CATEGORY } from 'actions/category';

const defaultState = {
    categories: []
};


export const category = (
    state = { ...defaultState },
    action
) => {
    const { type, category } = action;

    switch(type){
    case UPDATE_CATEGORY:
        console.log('in UPDATE_CATEGORY');
        return {
            ...state, ...{
                categories: category
            }
        };

    default:
        return state;
    }
};
