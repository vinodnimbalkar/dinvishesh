declare const dinVisheshToday: () => {
    janm: any;
    mrutyu: any;
    ghatana: any;
};
declare const dinVishesh: (cat: string | undefined, month: string, day: string) => any;
declare const dinVisheshByCategoryAndMonth: (cat: string, month: string) => any;
declare const dinVisheshAll: () => any;
declare const dinVisheshByCategory: (cat: string) => any;
export { dinVisheshToday, dinVishesh, dinVisheshByCategoryAndMonth, dinVisheshAll, dinVisheshByCategory, };
