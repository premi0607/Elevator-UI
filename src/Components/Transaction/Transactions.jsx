import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Transactions.css";

const Transactions = () => {

    const[transaction, setTransaction] = useState([]);

    useEffect(()=>{
        axios.get('https://team3-logesh.azurewebsites.net/api/Transaction').then((response) => {
            setTransaction(response.data);
            console.log(response.data);
      });

    },[])

  return (
    <table className='customers'>
        <tr>
            <th>Entry</th>
            <th>Current Floor</th>
            <th>Destination Floor</th>
            <th>Person Count</th>
            <th>Person Weight</th>
            <th>Date</th>
            <th>Time</th>
        </tr>
        {
            transaction.map((trs)=> {
                return(
                    <tr key={trs.id}>
                        <td>{trs.id}</td>
                        <td>{trs.currentFloor}</td>
                        <td>{trs.destinationFloor}</td>
                        <td>{trs.personCount}</td>
                        <td>{trs.personWeight}</td>
                        <td>{trs.transactionDateOnly}</td>
                        <td>{trs.transactionTimeOnly}</td>
                    </tr>
                )
            })
        }
        
     </table>
  )
}

export default Transactions
