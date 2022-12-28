import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FavList = () => {

    const [factList, setFactList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/facts')
            .then(res => {
                const facts = res.data
                setFactList(facts)
            })
            .catch((err) => console.log(err))
    })

    const DeleteJoke = (id) => {
        axios.delete('http://localhost:8000/api/delete/' + id)
            .then(res => console.log(res))
            .catch((err) => console.log(err))
            setFactList(factList.filter(fact => fact._id !== id))  
    } 

    return (
        <div className='container'>
            <div className='w-50 mx-auto bg-secondary p-4 m-1 border border-dark rounded-5'>
                {factList.map((fact, i) =>
                <div key={i} className='d-flex align-items-center justify-content-between'>
                    <div className='text-start m-2 bg-warning border border-dark rounded-4 p-2'>
                        {fact.fact}
                    </div>
                    <button className='rounded-3 border no-border shadow-lg text-danger' onClick={() => {DeleteJoke(fact._id)}}>Remove</button>
                </div>
                )}
            </div>
        </div>
    )
}

export default FavList