import Human from "../Human/Human";
import { useState, useMemo } from 'react'
import './Table.css'

export default function Table(props) {

    const [currentPage,setCurrentPage] = useState(1);

    const people = props.people;

    const [sortConfig, setSortConfig] = useState({
        direction: null,
        key: null
    })

    const getClassNamesForPeople = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? `table__heading_${sortConfig.direction}` : undefined;
    }

    const handleClick = (event) => {
        setCurrentPage(event.target.id);
    }

    const sortedPeople = useMemo(() => {
        let sortedPeople = [...people];
        if (sortConfig.key !== null) {
            sortedPeople.sort((a,b) => {
                if (sortConfig.key==='state') {
                    if (a.adress.state < b.adress.state) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a.adress.state > b.adress.state) {
                        return sortConfig.direction === 'ascending' ? 1 : -1
                    }
                    return 0;
                }
                else {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1
                    }
                    return 0;
                }
            });
        }
        return sortedPeople;
    }, [people, sortConfig])


    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }
        const indexOfLast = currentPage * 20;
        const indexOfFirst = indexOfLast - 20;
        const currentPeople = sortedPeople.slice(indexOfFirst, indexOfLast);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(sortedPeople.length / 20); i++) {
            pageNumbers.push(i);
        }



    return (
        <div className='table'>
        <table className='table__container'>
            <thead>
            <tr>
                <th className={`table__heading ${getClassNamesForPeople('id')}`}  onClick={() => requestSort('id')}>
                    id
                </th>
                <th className={`table__heading ${getClassNamesForPeople('firstName')}`} onClick={() => requestSort('firstName')}>
                    First name
                </th>
                <th className={`table__heading ${getClassNamesForPeople('lastName')}`} onClick={() => requestSort('lastName')}>
                    Last name
                </th>
                <th className={`table__heading ${getClassNamesForPeople('email')}`} onClick={() => requestSort('email')}>
                    Email
                </th>
                <th className={`table__heading ${getClassNamesForPeople('phone')}`} onClick={() => requestSort('phone')}>
                    Phone
                </th>
                <th className={`table__heading ${getClassNamesForPeople('state')}`} onClick={() => requestSort('state')}>
                    State
                </th>
            </tr>
            </thead>
            <tbody>
            {currentPeople.map((human,index) => {
                return (
                   <Human human={human} index={index} onHumanClick={props.onHumanClick}/>
                )
            })}
            </tbody>
        </table>
            <ul className='table__numbers'>
                {pageNumbers.map(number => {
                    return (
                        <li className={`table__number`}
                            key={number} id={number} onClick={handleClick}>{number}</li>
                    )
                })}
            </ul>
        </div>
    );
}
