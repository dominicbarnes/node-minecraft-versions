var request = require("request"),
    baseUrl = "https://s3.amazonaws.com/Minecraft.Download/versions/",
    queryUrl = baseUrl + "versions.json";

function query(callback) {
    return request(url, callback);
}

function url(version) {
    return baseUrl + version + '/minecraft_server.' + version + '.jar';
}

function download(version, options) {
    if (!options) {
        options = {};
    }

    options.url = url(version);

    return request(options);
}

exports.url = queryUrl;
exports.query = query;
exports.download = download;
exports.downloadUrl = url;
