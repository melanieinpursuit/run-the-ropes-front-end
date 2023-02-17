import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import Comments from './Comments'
import '../CSS/Show.css'
import backbutton from '../images/backbutton.png'
import editbutton from '../images/editbutton.png'
import deletebutton from '../images/deletebutton.png'
const API = process.env.REACT_APP_BASE_URL

function WrestlerDetails () {
    const [wrestler, setWrestler] = useState({})
    const { id } = useParams()
    let navigate = useNavigate()

    const deleteWrestler = () => {
        axios
        .delete(`${API}/wrestlers/${id}`)
        .then(
            () => {
                navigate(`/wrestlers`)
            }
        )
        .catch((c) => console.warn('catch', c))
    }

    useEffect(() => {
        axios
        .get(`${API}/wrestlers/${id}`)
        .then((response) => {
            console.log(response.data)
            setWrestler(response.data)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }, [id])

    return (
        <article>
            <div className="wrestler-details">
                <img src={wrestler.image} alt='wrestler' />
                <h1>{wrestler.name}</h1> 
               <table className="wrestler-info">
                <tr>
                    <td className="table-title">
                        <h3>Birthday:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.birth_date}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Debut:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.debut_date}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Gender</h3>
                    </td>
                    <td>
                        <h3>{wrestler.gender}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Height (in cm):</h3>
                    </td>
                    <td>
                        <h3>{wrestler.height}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Weight (in kg):</h3>
                    </td>
                    <td>
                        <h3>{wrestler.weight}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Billed From:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.billed_from}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Cagematch Page:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.cagematch_page}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Recommended Match:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.recommended_match}</h3>
                    </td>
                </tr>
                <tr>
                    <td className="table-title">
                        <h3>Short Bio:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.bio}</h3>
                    </td>
                </tr>
               </table>
               <div className="buttons">
                    <div className='back-button'>
                        <Link to={`/wrestlers`}>
                        <img src={backbutton} alt='backbutton' />
                        </Link>
                    </div>
                    <div className='edit-button'>
                        <Link to={`/wrestlers/${id}/edit`}>
                        <img src={editbutton} alt='editbutton' />
                        </Link>
                    </div>
                    <div className='delete-button'>
                        <div>
                            <button className='delete-button' onClick={deleteWrestler}>
                            <img src={deletebutton} alt='deletebutton' />
                            </button>
                        </div>
                        <br />
            <Comments />
                    </div>
               </div>
            </div>
        </article>
    )
}

export default WrestlerDetails;