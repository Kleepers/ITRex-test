
import './App.css';
import Table from "../Table/Table";
import React, { useState,useEffect } from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

function App() {

    const [data,setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedHuman, setSelectedHuman] = useState({});
    const [isProfileInfoVisible,setIsProfileInfoVisible] = useState(false);


    function handleHumanClick (human) {
        setSelectedHuman(human);
        if (isProfileInfoVisible === false) {
            setIsProfileInfoVisible(true);
        }
    }

    function handleUpdateData (data) {
        setFilteredData(data);
    }

    function getData () {
        return fetch('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
            .then(res => res.json())
            .then(res => {
                setData(res)
                setFilteredData(res);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    },[])


  return (
    <div className="App">
        <SearchBar updateData={handleUpdateData} data={data}/>
        <Table people={filteredData} onHumanClick={handleHumanClick}/>
        <ProfileInfo human={selectedHuman} isVisible={isProfileInfoVisible}/>
    </div>
  );
}

export default App;
