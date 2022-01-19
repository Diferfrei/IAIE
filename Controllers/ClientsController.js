var access_token = "8c0f8bd16ada0ad37334f9c75863543c3096d3a9";
var link = `https://api.moloni.pt/v1/customers/getAll/?access_token=${access_token}`;
const request = require('request');
//const sanitizeHtml = require('sanitize-html');
 
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

function insertCli(req, res) {
    const vat = req.vat;
    const number = req.number;
    const name = req.name;
    const address = req.address;
    const zip_code = req.zip_code;
    const city = req.city;
    const email = req.email;
    const phone = req.phone;
    const notes = req.notes;
    link = `https://api.moloni.pt/v1/customers/insert/?access_token=8c0f8bd16ada0ad37334f9c75863543c3096d3a9`
    request.post({
        url: link,
        form: {
            company_id: '205211',
            vat: vat, //string 
            number: number, //customer number ex: 12345
            name: name, //string
            language_id: '1', //int, 1 para tuga
            address: address, //string 
            zip_code: zip_code, //string ####-###
            city: city, //string 
            country_id: '1', //int, 1 para tuga
            email: email, //string OPTIONAL
            website: '0', //string OPTIONAL
            phone: phone, //string OPTIONAL
            fax: '0', //string OPTIONAL
            contact_name: '0', //string OPTIONAL
            contact_email: '0', //string OPTIONAL
            contact_phone: '0', //string OPTIONAL
            notes: notes, //string OPTIONAL
            salesman_id: '0', //int OPTIONAL
            price_class_id: '0', //int OPTIONAL
            maturity_date_id: '1297341', //int 1297341 
            payment_day: '0', //int OPTIONAL
            discount: '0', //float OPTIONAL
            credit_limit: '0', //float OPTIONAL
            
            copies:{
                document_set_id: '0', //0
                copies: '0', //0
            },
            
            payment_method_id: '1454269', //int 1454269 para transf banc ou 0
            delivery_method_id: '1488477', //int 1488477 OPTIONAL
            field_notes: '0', //string OPTIONAL
        }
    }, function (err, httpResponse, body) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        else {
            const success = "Successfully inserted";
            res.json(success);
        }
    });
}


module.exports = {
    listClients: getAll,
    addClient: insertCli
};