import React, {useState} from 'react'

const Santama = () => {
    const [Fullname] = useState('Santama')
    const [Bio] = useState('Biography')
    const [Image] = useState('https://i.redd.it/qzb9rcz934221.jpg')
    const [Profession] = useState('Hero')
    const [Shows, setShows] = useState(true)

    return (
        <div>
           <div className="d-flex m-5">
                <img  
                width="200"
                className={Shows? "rounded-circle border me-2" : "invisible"}
                src={Image} alt=""/>
                <div className="m-5">
                <h1>Fullname:  {Fullname}</h1>
                <h1>Bio:  {Bio}</h1>
                         
                <h1>Profession:  {Profession}</h1>
                <button className={Shows?"btn btn-danger":"btn btn-success"} 
                onClick={()=>setShows(!Shows)}>
                    {Shows?"cacher":"afficher"}
                    </button>
                </div>
                </div> 
        </div>
    )
}

export default Santama
