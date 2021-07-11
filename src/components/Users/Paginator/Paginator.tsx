import React, {useState} from 'react'
import styles from './Paginator.module.css'

type PropsType = {
    onPageChange: (currentPage: number) => void
    totalItemsCount: number
    usersCount: number
    currentPage: number | any
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({onPageChange, totalItemsCount, usersCount, portionSize = 10, currentPage}) => {
    let pagesCount = Math.ceil(totalItemsCount / usersCount)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Left</button>}
            {
                pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map((p) => {
                        return (
                            <span onClick={(e) => {
                                onPageChange(p)
                            }} className={currentPage || currentPage === p && styles.currentPage} // хз че с ним ругается на currentPage === p
                                  key={p}>{p} </span>
                        )
                    })
            }
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    )
}

export default Paginator