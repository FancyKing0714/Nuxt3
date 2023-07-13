import translation from "./translation.json";
import {useStore} from 'vuex';
export const tran = (str:string, lang:string) => {
    return translation[lang][str];
    // return "sdfds";
}