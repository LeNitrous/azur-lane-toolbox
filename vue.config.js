module.exports = {
    publicPath: process.env.NODE_ENV === "production"
        ? '/azur-lane-toolbox/'
        :  '/',
    devServer: {
        proxy: "https://azur-lane-api.glitch.me/"
    }
}