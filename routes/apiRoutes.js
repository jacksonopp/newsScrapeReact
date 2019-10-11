const db = require("../models");
const scrape = require("../functions/scrape");

module.exports = function (app) {
	app.get("/api/articles", (req, res) => {
		db.Article.find({ upvotes: { $gte: 100 } })
			.sort({ time: -1 })
			.limit(20)
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
	app.get("/api/scrape", async function (req, res) {
		const url = "https://old.reddit.com/r/news"
		const data = await scrape(url);
		data.forEach(post => {
			db.Article.findOneAndUpdate({
				title: post.title,
			}, {
				title: post.title,
				url: post.url,
				sub: post.sub,
				time: post.time,
				upvotes: post.upvotes,
				user: post.user
			}, {
				new: true,
				upsert: true
			}, (err) => {
				if (err) throw err;
			})
		})
		res.send("done");
	})
}