const cheerio = require("cheerio");
const request = require("superagent");

module.exports = async function (url) {
    const response = await request.get(url)
    var $ = cheerio.load(response.body);
    var results = [];

    $("div.thing").each(function (i, element) {
        const title = $(element).find("a.title").text();
        const url = $(element).find("a.title").attr('href');
        const sub = $(element).find("a.subreddit").text();
        const time = $(element).find("time").attr("datetime");
        const upvotes = $(element).find("div.score.unvoted").attr("title");
        const user = $(element).find("a.author").text();

        results.push({
            title,
            url,
            sub,
            time,
            upvotes,
            user
        })
    })
    console.log(results);
    return results;
}