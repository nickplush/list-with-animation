import { useEffect, useRef, useState } from 'react'
import { ListElementProps } from '../../utils/interfaces/indesx'
import './style.css'

const ListElement = ({
    text,
    position,
    scrollPosition,
    lastItemId, 
    addElements
} : ListElementProps) => {
    const [isInView, setIsInView] = useState(false)
    const ref: any = useRef(null)
    const className =isInView ? 'list-element animated-item' : 'list-element'

    const showElemetInView = () => {
        setIsInView(true)
        if (position === lastItemId - 1) {
            addElements()
        }
    }

    useEffect(()=>{
        const {offsetTop} = ref.current
        const bottomScrollPosition = scrollPosition + window.innerHeight
        if(offsetTop < bottomScrollPosition){
            showElemetInView()
        }
    },[scrollPosition])
 
    return <div ref={ref} className={className}>{text}</div>
} 

export default ListElement