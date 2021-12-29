var access_token = "664d8e9dfd5ec024241ab5ba8a5a40227ac6a113";
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