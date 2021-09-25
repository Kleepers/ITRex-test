import React, { useState, useEffect } from 'react';
import './SearchBar.css';

export default function SearchBar({ data, updateData }) {

    const [searchName, setSearchName] = useState('');
    const [searchState, setSearchState] = useState('-');

    const handleSearchName = (e) => {
        setSearchName(e.target.value);
    }
    const handleSearchState = (e) => {
        setSearchState(e.target.value);
    }

    useEffect(() => {
        let filteredPeople = [...data];

        if (searchName !== '') {
            filteredPeople = data.filter(
                el => el.firstName.toLowerCase().includes(searchName.toLowerCase()) || el.lastName.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (searchState !== '-') {
            filteredPeople = filteredPeople.filter(el => el.adress.state === searchState)
            updateData(filteredPeople);
        } else {
            updateData(filteredPeople);
        }
    }, [searchName,searchState])

    return (
        <div className="searchBar">
            <input type='text' placeholder='Search by name:' onChange={handleSearchName}/>
            <select className='searchBar__select' name="state" id="state" onChange={handleSearchState}>
                <option disabled selected>Choose by State:</option>
                <option value="-">-</option>
                <option value="AK">AK</option>
                <option value="AL">AL</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VA">VA</option>
                <option value="VT">VT</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
            </select>
        </div>
    );
}
