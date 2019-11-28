module.exports = function (data) {
    return {
        homePage(req, res) {
            let options = { successMessage: 'success', errorMessage:'error' };
            res.render("home-page", { options });
        }       
    };
};