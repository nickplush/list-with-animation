import { useState, UIEvent} from 'react'
import ListElement from '../ListElement'
import { Human } from '../../utils/interfaces/indesx'
import './style.css'


const AnimatedList = ({elements} : {elements: Human[]}): any => {
    const [count, setCount] = useState<number>(20)
    const [isAdded, setIsAdded] = useState<boolean>(false)
    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const limitedElements: Human[] = elements.slice(0,count)
    
    const openAllElements = (): void => {
        if (isAdded) {
            setCount(item => item + 20)
        }
    }

    const onClickButton = (): void => {
        setIsAdded(true)
    }
    
    const scroll = (e:UIEvent<HTMLDivElement>): void => {
        const st = (e.target as HTMLElement).scrollTop
        setScrollPosition(st)
    }

   
    return(
        <div className='list-wrapper' onScroll={scroll}> 
            {limitedElements.map(item => 
            <ListElement
                key={item.id}
                text={`${item.name} ${item.surname}`}
                position={item.id}
                scrollPosition={scrollPosition}
                lastItemId={count}
                addElements={openAllElements}
            />
            )}
            {!isAdded &&<div className='see-more-button' onClick={onClickButton}>Показать больше</div>}
        </div>
    ) 
} 

export default AnimatedList