const shortid = require('shortid');
const URL = require("../model/url");

module.exports.generateNewShortURL = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }
    const shortID = shortid.generate() ;
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visiteHistory :[]
    });
    return res.json({ id : shortID });
}