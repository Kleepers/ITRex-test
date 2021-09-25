import React from "react";
import './Human.css'
export default function Human ({human, index, onHumanClick}) {


    return (
        <tr key={index} className='human' onClick={() => onHumanClick(human)}>
            <td className='human__cell'>{human.id}</td>
            <td className='human__cell'>{human.firstName}</td>
            <td className='human__cell'>{human.lastName}</td>
            <td className='human__cell'>{human.email}</td>
            <td className='human__cell'>{human.phone}</td>
            <td className='human__cell'>{human.adress.state}</td>
        </tr>
    )
}