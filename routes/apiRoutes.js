const db = require("../models");
module.exports = function (app) {
    app.get("/test", (req, res) => {
        res.json({ message: "connected" });
    })
}