import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_BASE_URL


const WrestlerEditForm = () => {
    let { id } = useParams()
    let navigate = useNavigate()

    const [wrestler, setWrestler] = useState({
        name: "",
        birth_date: "",
        debut_date: "",
        gender: "",
        height: 0,
        weight: 0,
        billed_from: "",
        cagematch_page: "",
        recommended_match: "",
        bio: "",
        image: ""
    })

    const updateWrestler = (updatedWrestler) => {
        axios
        .put(`${API}/wrestlers/${id}`, updatedWrestler)
        .then(
            () => {
                navigate(`/wrestlers/${id}`)
            },
            (error) =>  console.error(error)
        )
        .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setWrestler({ ...wrestler, [event.target.id]: event.target.value})
    }

    useEffect(() => {
        axios.get(`${API}/wrestlers/${id}`)
        .then(
            (response) => setWrestler(response.data),
            (error) => navigate(`/not-found`)
        )
    }, [id, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()
        updateWrestler(wrestler)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                value={wrestler.name}
                onChange={handleTextChange}
                required
                />

                <label htmlFor="birth_date">Birthday:</label>
                <input
                id="birth_date"
                type="text"
                value={wrestler.birth_date}
                onChange={handleTextChange}
                />

                <label htmlFor="debut_date">Debut:</label>
                <input
                id="debut_date"
                type="text"
                value={wrestler.debut_date}
                onChange={handleTextChange}
                />

                <label htmlFor="gender">Gender:</label>
                <input
                id="gender"
                type="text"
                value={wrestler.gender}
                onChange={handleTextChange}
                />

                <label htmlFor="height">Height (in cms):</label>
                <input
                id="height"
                type="number"
                min="0"
                value={wrestler.height}
                onChange={handleTextChange}
                />

                <label htmlFor="weight">Weight (in kgs):</label>
                <input
                id="weight"
                type="number"
                min="0"
                value={wrestler.weight}
                onChange={handleTextChange}
                />

                <label htmlFor="billed_from">Billed From:</label>
                <input
                id="gender"
                type="text"
                value={wrestler.gender}
                onChange={handleTextChange}
                />

                <label htmlFor="cagematch_page">Cagematch Page:</label>
                <input
                id="cagematch_page"
                type="text"
                pattern='http[s]*://.+'
                value={wrestler.cagematch_page}
                onChange={handleTextChange}
                />

                <label htmlFor="recommended_match">Recommended Match:</label>
                <input
                id="recommended_match"
                type="text"
                pattern='http[s]*://.+'
                value={wrestler.recommended_match}
                onChange={handleTextChange}
                />

                <label htmlFor="bio">Billed From:</label>
                <input
                id="bio"
                type="text"
                value={wrestler.bio}
                onChange={handleTextChange}
                />

                <label htmlFor="image">Image:</label>
                <input
                id="image"
                type="text"
                pattern='http[s]*://.+'
                value={wrestler.image}
                onChange={handleTextChange}
                />

                <button className="submit" type="submit">Submit</button>
            </form>
            
            <Link to={`/wrestlers/${id}`}>
                <button className="back-button">Back</button>
            </Link>
        </div>
    )
}

export default WrestlerEditForm;