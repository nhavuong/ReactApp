import React, {useState} from "react";

export default function SearchAudio() {
    //states - input artist name, show albums
    const [query, setQuery] = useState('');
    
    //states - audio, update state appropriate
    const[albums, setAlbums] = useState([]);

    const searchAudio = async (e) => {
        e.preventDefault();
      
        const url = `https://www.theaudiodb.com/api/v1/json/1/discography.php?s=${query}`;
        
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            
            setAlbums(data.album);
        } catch(err) {
            console.error(err);
        }

    }
    return (
        <>
            <form className="form" onSubmit={searchAudio}>
                <label className="label" htmlFor="query">Artist Name: </label>
                <input className="input" type="text" name="query" placeholder="i.e. Selena Gomez"
                value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>

            <div className="card-list">
                {albums.map(album => (
                    <div className="card">
                        <div className="card--content">
                            <h2 className="card--title">{album.strAlbum}</h2>
                            <p><small>Release Year: {album.intYearReleased}</small></p>
                        </div>
                    </div>
                        
                ))}
            </div>
        </>
    )
}