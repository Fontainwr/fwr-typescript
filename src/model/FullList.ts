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

    static instance: FullList = new FullList()

    private constructor(private _list: ListITem[] = []){}

    get List(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return 

        const parsedList: { _id:string, item: string, _checked: boolean }[] = JSON.parse(storedList) 
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addITem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
}   