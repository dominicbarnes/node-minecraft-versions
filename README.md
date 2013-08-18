node-minecraft-versions
=======================

Queries the Official Minecraft Versions JSON API provided by Mojang.

    $ npm install minecraft-versions

````javascript
var mcversions = require("minecraft-versions");

mcversions.query(function (err, data) {
    /**
     * data => {
     *   versions: [
     *     {
     *       id: "1.6.2",
     *       time: "2013-08-06T13:00:00+02:00",
     *       releaseTime: "2013-07-05T15:09:02+02:00",
     *       type: "release"
     *     },
     *     // ...
     *   ],
     *   latest: {
     *     snapshot: "1.6.2",
     *     release: "1.6.2"
     *   }
     * }
     */
});
````
In actuality, this is a simple wrapper for downloading a
[static file](https://s3.amazonaws.com/Minecraft.Download/versions/versions.json)
hosted on S3 by Mojang. As they add more versions to their launcher, this will
become more complete.


API
---

### mcversions.version

This property is just a `String` containing the URL for the `versions.json` file.

### mcversions.query(callback)

This function just downloads the version listing and returns it via callback.

### mcversions.downloadUrl(version)

This function simply returns a URL pointing to the `minecraft_server.jar`
file corresponding to the supplied version number.

### mcversions.download(version)

This function initiates a download of the corresponding `minecraft_server.jar`
and returns a `Stream` (via the [request](https://github.com/mikeal/request)
module) for you to pipe wherever you see fit.



**Upcoming Features:**

 * Conversion of `time` / `releaseTime` into `Date` objects
 * Grouping of versions by type
 * A "download latest of type" function
 * A "download to file" function
