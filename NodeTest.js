var access_token = "353288c2dc088f14f2515b215e2ec7982db1a34a";
var link = `https://api.moloni.pt/v1/customers/getAll/?access_token=${access_token}`;


request.post({
    url: link,
    form: {
        company_id: '205211',
    }
}, function (err, httpResponse, body) {
    data = JSON.parse(body);
    console.log(data);
    return data;
})