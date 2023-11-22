import ListItem from "./ListItem";

interface List {
    List: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addITem(itemObj: ListItem): void,
    removeItem(id: string): void,

}

export default class FullList implements List {
    
}