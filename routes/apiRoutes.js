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
    app.post("/api/articles", (req, res) => {
        console.log(req.body);
        db.Comment.create(req.body)
            .then(function (dbComment) {
                return db.Article.findOneAndUpdate({ _id: req.body.id }, { $push: { comments: dbComment._id } }, { new: true });
            })
            .then(function (dbArticle) {
                res.json(dbArticle)
            })
            .catch(err => res.send(err))
    })
}