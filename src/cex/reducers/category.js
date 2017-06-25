import { UPDATE_CATEGORY } from 'actions/category';

const defaultState = {
    categories: []
};

catUpdate = (category)=>{
    if (inArray(mystate, category) === false) {
        const arr = mystate.slice();
        arr.push(category);
        console.log('a category just got pushed');
        return arr;

    } else {
        const arr = mystate.slice();
        const index = arr.indexOf(category);
        console.log('a category just got removed');
        arr.splice(index, 1);
        return arr;
    }
};

inArray = (arr, obj)=> {
    return (arr.indexOf(obj) !== -1);
};

export const category = (
    state = { ...defaultState },
    action
) => {
    const { type, category } = action;

    switch(type){
    case UPDATE_CATEGORY:
        arr = catUpdate(category);
        return {
            ...state, ...{
              // update category state somehow
                categories: arr
            }
        };

    default:
        return state;
    }
};
