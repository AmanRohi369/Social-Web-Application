module.exports.home = function(req,res){
    return res.render('main',{
        title:'Home Page',
        genre:'headFoot'
    });
}