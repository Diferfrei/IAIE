function isPTZipCode(str) 
{
  return /^\d{4}(-\d{3})?$/.test(str);
}

function createClient() {
  let name1 = document.getElementById("nome");
  let name = name1.value;
  let vat1 = document.getElementById("nif");
  let vat = vat1.value;
  let number1 = document.getElementById("cod");
  let number = number1.value;
  let address1 = document.getElementById("morada");
  let address = address1.value;
  let city1 = document.getElementById("localidade");
  let city = city1.value;
  let email1 = document.getElementById("mail");
  let email = email1.value;
  let phone1 = document.getElementById("tele");
  let phone = phone1.value;
  let zip_code1 = document.getElementById("zip");
  let zip_code = zip_code1.value;
  let notes1 = document.getElementById("desc");
  let notes = notes1.value;

  if (vat.length != 9) {
    Swal.fire("Insira um número de contribuinte válido", "", "warning").then(
      (result) => {
        vat1.focus();
      }
    );
  } else {
    if (number.length != 6) {
      Swal.fire(
        "Insira um número de cliente válido (6 dígitos)",
        "",
        "warning"
      ).then((result) => {
        number1.focus();
      });
    } else {
      if (!(isPTZipCode(zip_code))) {
        Swal.fire(
          "Insira um código postal válido (exemplo: ####-###)",
          "",
          "warning"
        ).then((result) => {
          zip_code1.focus();
        });
      } else {
        const SERVER_URL = `https://iaie.herokuapp.com/clients/addClient/${vat}&${number}&${name}&${address}&${zip_code}&${city}&${email}&${phone}&${notes}`;
        console.log(SERVER_URL);
        opts = {
          method: "POST",
        };

        fetch(SERVER_URL, opts)
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
              Swal.fire("Cliente criado com sucesso.", "", "success").then(
                (result) => {
                  document.location.href = "lista_clientes.html";
                }
              );
            }

            return response;
          })
          .catch(
            function (err) {
              Swal.fire(
                "Oops!",
                `Erro:${err}. Cliente não criado. Tente novamente.`,
                "error"
              );
            }
            /*Swal.fire("Cliente atualizado com sucesso.", "", "success").then(
          (result) => {
            document.location.href = "lista_clientes.html";
          }*/
          );
      }
    }
  }
}
