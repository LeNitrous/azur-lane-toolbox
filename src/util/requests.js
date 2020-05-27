export async function request(endpoint, keys = [], filters = {}, region = "en", options = {}) {
    // check if we're running in development mode
    // due to CORs, we're required to proxy our requests when testing in localhost
    const base = window.webpackHotUpdate
        ? "/api"
        : "https://azur-lane-api.glitch.me/api";

    if (["en", "jp", "cn", "kr", "tw"].indexOf(region) === -1)
        throw new SyntaxError("Cannot obtain data from unknown region.");

    if (keys.length < 1 && Object.keys(filters).length)
        console.warn("Making a request with no keys or filters will cause slowdowns!");

    const query = [
        `region=${region}`,
        Object.entries(filters).map(([k, v]) => `${k}=${v}`),
        `keys=${keys.join(",")}`
    ].flat().join("&");

    const defaultOptions = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "User-Agent": "azur-lane-toolbox"
        }
    };

    console.log(`Fetching: ${base}${endpoint}?${query}`);
    const response = await fetch(`${base}${endpoint}?${query}`, Object.assign(defaultOptions, options));

    if (response.status !== 200) {
        const { error } = await response.json();
        throw new Error(`An error has been received from the response (${response.status})\n\tError: ${error}`);
    } else
        return (await response.json()).entries;
}