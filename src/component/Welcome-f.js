import React, {useState} from 'react'

const WelcomeF = () => {
    const [quantite, setQuantite] = useState(1)
    return (
        <div>
            <button onClick={() => setQuantite((quantite)?quantite - 1:quantite)} className="btn btn-danger"><i class="fas fa-minus-circle"></i></button>
            <input type="number " value={quantite}/>
            <button onClick={() => setQuantite(quantite + 1)} className="btn btn-success"><i class="fas fa-plus-square"></i></button>
            
        </div>
    )
}

export default WelcomeF
