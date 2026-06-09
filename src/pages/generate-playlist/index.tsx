import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Heart, Loader } from "../../components";
import { generatePlaylist } from "../../utils/data";

const GeneratePlaylistPage = () => {
    const [isFetching, setFetching] = useState(false)
    const navigate = useNavigate()

    async function handleChange() {
        setFetching(true)

        const playlist_id = await generatePlaylist()

        navigate("/view", { state: { playlist_id } });
    }

    return (
        <section className="w-full p-3 flex flex-col">
            <Heart color="#cc6271" />
            <div hidden={!isFetching}>
                <Loader />
            </div>
            <div hidden={isFetching}>
                <Button onClick={handleChange} >Generate Your Playlist</Button>
            </div>
        </section>
    )
}

export default GeneratePlaylistPage