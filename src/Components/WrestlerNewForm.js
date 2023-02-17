import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL

const WrestlerNewForm = () => {
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

    const addWrestler = (newWrestler) => {
        axios
        .post(`${API}/wrestlers`, newWrestler)
        .then(
            () => {
                navigate(`/wrestlers`)
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c))
    }

    const handleTextChange = (event) => {
        setWrestler({...wrestler, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addWrestler(wrestler)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="name">Name:</label></td>
                        <input
                        id="name"
                        type="text"
                        value={wrestler.name}
                        onChange={handleTextChange}
                        required
                        />
                    </tr>
                    <tr>
                        <td><label htmlFor="birth_date">Birthday:</label></td>
                        <td><input
                            id="birth_date"
                            type="text"
                            value={wrestler.birth_date}
                            onChange={handleTextChange}
                            /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="debut_date">Debut:</label></td>
                        <td><input
                        id="debut_date"
                        type="text"
                        value={wrestler.debut_date}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="gender">Gender:</label></td>
                        <td><input
                        id="gender"
                        type="text"
                        value={wrestler.gender}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="height">Height (in cms):</label></td>
                        <td><input
                        id="height"
                        type="number"
                        min="0"
                        value={wrestler.height}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="weight">Weight (in kgs):</label></td>
                        <td><input
                        id="weight"
                        type="number"
                        min="0"
                        value={wrestler.weight}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="billed_from">Billed From:</label></td>
                        <td><input
                        id="gender"
                        type="text"
                        value={wrestler.gender}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="cagematch_page">Cagematch Page:</label></td>
                        <td><input
                        id="cagematch_page"
                        type="text"
                        pattern='http[s]*://.+'
                        value={wrestler.cagematch_page}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="recommended_match">Recommended Match:</label></td>
                        <td><input
                        id="recommended_match"
                        type="text"
                        pattern='http[s]*://.+'
                        value={wrestler.recommended_match}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="bio">Bio:</label></td>
                        <td><input
                        id="bio"
                        type="text"
                        value={wrestler.bio}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="image">Image:</label></td>
                        <td><input
                        id="image"
                        type="text"
                        pattern='http[s]*://.+'
                        value={wrestler.image}
                        onChange={handleTextChange}
                        /></td>
                    </tr>
                <button className="submit" type="submit">Submit</button>
                </table>
            </form>
            
            <Link to={`/wrestlers`}>
                <button className="back-button">Back</button>
            </Link>
        </div>
    )
}

export default WrestlerNewForm;