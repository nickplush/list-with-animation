export interface Human {
    id: number,
    name: string,
    surname: string
}

export interface ListElementProps {
    text: string,
    position: number,
    scrollPosition : number,
    lastItemId : number, 
    addElements: ()=> void
}