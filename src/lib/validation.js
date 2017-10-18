export const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z-!$%^&*()_+|~=`{}\[\]:/;<>?,.@# ]{8,}$/.test(values.password))
        errors.password = 'Invalid password, must contain at least: 8 characters, one uppercase, one lowercase and, one number';

    if (!values.confirmPassword){
        errors.confirmPassword = 'Required';
    }else if(values.password != values.confirmPassword){
        errors.confirmPassword = 'The passwords entered do not match.';
    }

    if(!values.firstname){  //TODO modify... --Robbi
        errors.firstname = 'Required';
    }else if (values.firstname.length > 35) {
        errors.firstname = 'Name is too long';
    }

    if(!values.lastname){   //TODO modify... character validity --Robbi
        errors.lastname = 'Required';
    }else if (values.lastname.length > 35) {
        errors.lastname = 'Name is too long';
    }

    return errors;
};