import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUnknownElement,
    clear(): void,
    render(fullList: FullList ): void, 

}

export default class ListTempate implements DOMList {
    ul: HTMLUListElement;

    constructor(ul: HTMLUListElement) {
        this.ul =ul; 
    }
}