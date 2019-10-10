const db = require("../models");
module.exports = function (app) {
    app.get("/api/articles", (req, res) => {
        db.Article.find({}).exec((err, data) => {
            if (err) throw err;
            res.json(data);
        })
    })
}