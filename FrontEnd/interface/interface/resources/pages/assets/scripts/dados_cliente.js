window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search);
  const customer_id = urlParams.get("id");

  let name = document.getElementById("nome");
  let vat = document.getElementById("nif");
  let client_id = document.getElementById("cod");
  let address = document.getElementById("morada");
  let city = document.getElementById("localidade");
  let email = document.getElementById("mail");
  let phone = document.getElementById("tele");
  let zip_code = document.getElementById("zip");
  let notes = document.getElementById("desc");

  let name1 = document.getElementById("nome1");
  let vat1 = document.getElementById("nif1");
  let client_id1 = document.getElementById("cod1");
  let address1 = document.getElementById("morada1");
  let city1 = document.getElementById("localidade1");
  let email1 = document.getElementById("mail1");
  let phone1 = document.getElementById("tele1");
  let zip_code1 = document.getElementById("zip1");
  let notes1 = document.getElementById("desc1");

  const SERVER_URL = `https://iaie.herokuapp.com/clients/client/${customer_id}`;
  $(document).ready(function () {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((client) => {
        name.value = client.name;
        client_id.value = client.customer_id;
        vat.value = client.vat;
        address.value = client.address;
        city.value = client.city;
        email.value = client.email;
        phone.value = client.phone;
        zip_code.value = client.zip_code;
        notes.value = client.notes;

        name1.value = client.name;
        client_id1.value = client.customer_id;
        vat1.value = client.vat;
        address1.value = client.address;
        city1.value = client.city;
        email1.value = client.email;
        phone1.value = client.phone;
        zip_code1.value = client.zip_code;
        notes1.value = client.notes;
      });
  });
};


function updateClient() {
  let name = document.getElementById("nome1").value;
  let vat = document.getElementById("nif1").value;
  let number = document.getElementById("cod1").value;
  let address = document.getElementById("morada1").value;
  let city = document.getElementById("localidade1").value;
  let email = document.getElementById("mail1").value;
  let phone = document.getElementById("tele1").value;
  let zip_code = document.getElementById("zip1").value;
  let notes = document.getElementById("desc1").value;
  return fetch(
    `https://iaie.herokuapp.com/clients/client/clients/addClient/${vat}&${number}&${name}&${address}&${zip_code}&${city}&${email}&${phone}&${notes}`
  )
    .then(function (response) {
      if (!response.ok) {
        if (response.status === 409) {
          Swal.fire(
            "Dados duplicados.",
            "Reintroduza corretamente os dados",
            "warning"
          );
        } else {
          throw Error(response.statusText);
        }
      } else {
        Swal.fire("Cliente atualizado com sucesso.", "", "success").then(
          (result) => {
            document.location.href = "lista_clientes.html";
          }
        );
      }

      return response;
    })
    .catch(function (err) {
      Swal.fire(
        "Oops!",
        `Erro:${err}. Pedido de alteração não submetido. Erro na alteração. Tente novamente.`,
        "error"
      );
    });
}
