import { useState, useEffect } from "react";
import axios from "axios"
import Wrestler from "./Wrestler"

const API = process.env.REACT_APP_BASE_URL

function Wrestlers() {
    const [wrestlers, setWrestlers] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/wrestlers`)
        .then((res) => {
            console.log(res.data)
            setWrestlers(res.data)
        }
        )
        .catch((c) => console.warn('catch', c))
    }, [])

    return (
        <div className="Wrestlers">
            {wrestlers.map((wrestler) => {
                return <Wrestler key={wrestler.id} wrestler={wrestler} />
            })}
        </div>
    )
}

export default Wrestlers;