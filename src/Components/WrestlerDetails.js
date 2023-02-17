import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import Comments from './Comments'
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
            <div>
                <img src={wrestler.image} alt='wrestler' />
                <h1>{wrestler.name}</h1> 
               <table>
                <th>
                    <p>Wrestler Details</p>
                </th>
                <tr>
                    <td>
                        <h3>Birthday:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.birth_date}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Debut:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.debut_date}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Gender</h3>
                    </td>
                    <td>
                        <h3>{wrestler.gender}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Height (in cm):</h3>
                    </td>
                    <td>
                        <h3>{wrestler.height}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Weight (in kg):</h3>
                    </td>
                    <td>
                        <h3>{wrestler.weight}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Billed From:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.billed_from}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Cagematch Page:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.cagematch_page}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Recommended Match:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.recommended_match}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Short Bio:</h3>
                    </td>
                    <td>
                        <h3>{wrestler.bio}</h3>
                    </td>
                </tr>
               </table>
               <div>
                    <div>
                        <Link to={`/wrestlers`}>
                            <button>Back</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/wrestlers/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <button onClick={deleteWrestler}>
                                Delete
                            </button>
            <Comments />
                        </div>
                    </div>
               </div>
            </div>
        </article>
    )
}

export default WrestlerDetails;