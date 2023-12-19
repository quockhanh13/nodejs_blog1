 class NewsController {
// get /news
    index(rep, res){
        res.render('news');
    }

    show(rep, res){
        res.send('NEW DETAIL!!!!');
    }
 }

 module.exports = new NewsController;
