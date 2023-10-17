const axios = require('axios').default;
const qs = require('qs');
import { Buffer } from 'buffer'


var client_id = process.env.REACT_APP_SPOTIFY_API_ID;
var client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
var auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
    try {
        const token_url = 'https://accounts.spotify.com/api/token';
        const data = qs.stringify({ 'grant_type': 'client_credentials' });

        const response = await axios.post(token_url, data, {
            headers: {
                'Authorization': `Basic ${auth_token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        return response.data.access_token;
    }
    catch (e) {
        console.log(e);
    }
}



const getPlaylists = async () => {
    const access_token = await getAuth();
    const api_url = `https://api.spotify.com/v1/users/22svsaleil57qb3gkdcbkktza/playlists`;

    try {
        const response = await axios.get(api_url, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
            }
        })
        console.log("Playlists", response.data);
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}

console.log(getPlaylists());