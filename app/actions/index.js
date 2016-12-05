import axios from 'axios';

const API_KEY = 'D69FF7B970C0076A93C7CCDCB51192BE';
const STEAM_ID = '76561198032244041';

const ROOT_URL = ``;
const PLAYER_SUMMARY = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${STEAM_ID}`;
const RECENT_GAMES_URL = ` http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${API_KEY}&steamid=${STEAM_ID}`;
const OWNED_GAMES_URL = ` http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${STEAM_ID}`;

const GAME_SCHEMA = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${API_KEY}&appid=`

const STEAM_ID_URL = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${API_KEY}&vanityurl=userVanityUrlName`;

export const FETCH_PROFILE = 'FETCH_PROFILE';

export function fetchProfile() {
    const request = axios.get(PLAYER_SUMMARY);

    return {type: FETCH_PROFILE, payload: request};
}
