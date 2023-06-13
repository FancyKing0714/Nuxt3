import Cookies from 'js-cookie';
export default defineNuxtRouteMiddleware((to, from) => {

    const click_id = from.query.click_id;
    const promo = from.query.promo;
    if(click_id)
        Cookies.set('click_id', click_id.toString());
    else
        Cookies.remove('click_id');
    if(promo)
        Cookies.set('promo', promo.toString());  
    else
        Cookies.remove('promo');   
});
