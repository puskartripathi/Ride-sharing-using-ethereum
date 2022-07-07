import cookie from 'js-cookie';

// set in cookie

// remove from cookie

// get from cookie such as stored token
// will be useful when we need to make request to server with token

// set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};
// remove from localstorage
export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};
// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setLocalStorage('user', response);
    next();
};
// access user info from localstorage
export const isAuth = () => {
    if (window !== 'undefined') {
        if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        
    }
};

export const signout = next => {
    removeLocalStorage('user');
    next();
};
