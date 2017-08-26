export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

export const updateCategory = (category) => {
    console.log('updateCategory method called', category);
    return{
        type: UPDATE_CATEGORY,
        category
    };
};
