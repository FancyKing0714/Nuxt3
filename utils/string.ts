export const seperate = (str:string) => {
    const strlist = str.split(' ');
    interface stritem{
        string: boolean,
        content: string,
    };
    let result: stritem[] = [];
    strlist.map(item=>{
        const urlPattern = /[a-zA-Z]+/;
        result = [...result , {string: urlPattern.test(item), content: item}];
    });
    return result;
};
export const changeTitle = (str:string) => {
    return str.replace(/([A-Z])/g, " $1").trim().replace(/^\w/, c => c.toUpperCase());
}