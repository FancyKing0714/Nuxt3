import Cookies from 'js-cookie'

export const linkTo = (str: string) => {
    if(Cookies.get('click_id')){
        str = str + '?click_id=' + Cookies.get('click_id');
    }
    if(Cookies.get('promo')){
        if(Cookies.get('click_id'))
            str = str + '&promo=' + Cookies.get('promo');
        else
            str = str + '?promo=' + Cookies.get('promo');
    }
    return str;
}  
export const tabToLink = (str: string) => {
    return str.split(" ").join("-").toLowerCase();
}
export const linkToTab = (str: string) => {
    return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
