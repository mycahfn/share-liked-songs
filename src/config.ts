export const scope = "user-read-private user-read-email user-library-read playlist-modify-public playlist-modify-private";

export const client_id = "1869f0a2fda24e64977799a8b3a12c16";
export const redirect_uri = !import.meta.env.VITE_PRODUCTION_MODE ? "https://mycahfn.github.io/share-liked-songs/" : "http://127.0.0.1:5173/share-liked-songs/"

export const endpoints = {
    authorize: "https://accounts.spotify.com/authorize",
    access_token: "https://accounts.spotify.com/api/token",
    user_data: "https://api.spotify.com/v1/me",
    getCurrentSavedTracks: "https://api.spotify.com/v1/me/tracks?limit=50",
    createPlaylist: (user_id:string) => `https://api.spotify.com/v1/users/${user_id}/playlists`,
    addTrackPlaylist: (playlist_id:string) => `https://api.spotify.com/v1/playlists/${playlist_id}/items`,
    playlistCover: (playlist_id:string) => `https://api.spotify.com/v1/playlists/${playlist_id}/images`
};

export default { scope, client_id, redirect_uri, endpoints }

