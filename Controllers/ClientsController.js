var access_token = "1a0b69d02785a138c0d1d736939e2c29d044d9e5";
var link = `https://api.moloni.pt/v1/customers/getAll/?access_token=${access_token}`;
const request = require('request');
 
function getAll(req, res) {
    request.post({
        url: link,
        form: {
            company_id: '205211',
        }
    }, function (err, httpResponse, body) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        else {
            data = JSON.parse(body);
            res.json(data);
        }
    });
}

module.exports = {
    listClients: getAll
};