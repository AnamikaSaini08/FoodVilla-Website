import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Intern = () => {
    const [alldata , setAllData] = useState([]);


    const getData = async ()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await data.json();
        setAllData(json);
    }
    
    useEffect(()=>{
        getData();
    } , []);

  return (
    <div>
    {console.log(alldata)}
    {
        alldata.map( (res)=>{
        return (
            <div>
              <table>
                <tr>
                  <th><h1>{res.name}</h1></th>
                  <th><p>{res.description}</p></th>
                </tr>
              </table>
            </div>
        )
     })
    }
     
    </div>
  )
}

export default Intern
