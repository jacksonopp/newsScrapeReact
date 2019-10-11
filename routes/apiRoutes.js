const db = require("../models");
module.exports = function (app) {
    app.get("/api/articles", (req, res) => {
        db.Article.find({})
            .limit(5)
            .exec((err, data) => {
                if (err) throw err;
                res.json(data);
            })
    })
    app.get("/api/articles/:id", (req, res) => {
        const id = req.params.id
        db.Article.findById(id)
            .populate("comments")
            .exec((err, data) => {
                if (err) throw err;
                res.json(data);
            })
    })
}