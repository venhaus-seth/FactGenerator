import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const QuoteGenerator = () => {

    const [fact, setFact] = useState('')
    const navigate = useNavigate()

    const GetFact = () => {
        axios({
            method: 'get',
            url: 'https://api.api-ninjas.com/v1/facts',
            headers: {
                'X-Api-Key': 'OcXEY4Mo8wIayius5yvFtQ==Qh79G4xtIfh04KGl'
            }
        }) 
            .then(res => {
                console.log(res.data[0].fact)
                setFact(res.data[0].fact)
            })
            .catch((err) => console.log(err))
            
    }

    const SaveFact = () => {
        axios.post('http://localhost:8000/api/create', {
            fact
        })
            .then(res => {
                console.log("saved:", res)
                navigate('/favs')
            })
            .catch((err) =>console.log(err)
            )
        }


    return (
        <div className='container'>
            <div className='w-50 mx-auto bg-secondary p-4 m-1 border border-dark rounded-5'>
                <button className='rounded-3 border no-border' onClick={() => {GetFact()}}> Get Fact</button>
                {fact ? <div className='bg-warning border border-dark rounded-4 p-2 m-2'>{fact}</div> : null}
                    {fact ? <button className='rounded-3 border no-border' onClick={() => {SaveFact()}}>💗</button> : null}
            </div>
        </div>
    )
}

export default QuoteGenerator