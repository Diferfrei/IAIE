window.onload = function () {
  if (localStorage.getItem("deletedClients") == null) {
    let nullArray = [];
    localStorage.setItem("deletedClients", JSON.stringify(nullArray));
  }
  let delClis = localStorage.getItem("deletedClients");
  let delCli = JSON.parse(delClis);

  const SERVER_URL = "https://iaie.herokuapp.com/clients/all";
  $(document).ready(function () {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((clients) => {
        //Filter de delete lógico
        clients2 = JSON.stringify(clients);
        clients3 = JSON.parse(clients2);
        clients4 = [];
        let customer_id;
        for (var i = 0; i < delCli.length; i++) {
          for (var c = 0; c < clients3.length; c++) {
            customer_id = clients3[c].customer_id;
            if (customer_id == delCli[i]) {
              clients4.push(clients3[c]);
            }
          }
        }
        clients3 = clients3.filter(function (el) {
          return clients4.indexOf(el) < 0;
        });

        /*
        for (var i = 0; i < clients.length; i++) {
          for (var c = 0; c < delCli.length; c++) {
            z = 0;
            if (clients[z].customer_id == delCli[c]) {
              delete clients[z];
            }
            z++;
          }
        }*/
        var $table = $("#tabelaClients").DataTable({
          data: clients3,
          columns: [
            { title: "#ID", data: "customer_id" },
            {
              title: "Nome",
              data: "name",
            },
            {
              title: "NIF",
              data: "vat",
            },
            {
              title: "Morada",
              data: "address",
            },
            {
              title: "Ações",
              data: null,
              render: function (value, cell, clients3) {
                var action = `<a href="dados_cliente.html?id=${clients3.customer_id}">
                                                            <button type="button" class="mb-2 mr-2 border-0 btn-lg btn-outline-light">
                                                                <i class="pe-7s-look"> </i>
                                                            </button>
                                                        </a>
                                                        <button type="button"
                                                        class="mb-2 mr-2 border-0  btn-lg btn-outline-light delete-action"
                                                        data-toggle="modal"> <i
                                                            class="pe-7s-trash"> </i>
                                                    </button>`;
                return action;
              },
            },
          ],
        });
        //delete Client action
        $table.on("click", "button.delete-action", function () {
          //dados da instituição de determinada linha: linha onde foi acionado o botao de delete
          var closestRow = $(this).closest("tr");
          var data = $table.row(closestRow).data();
          console.log(data);
          Swal.fire({
            title: `Tem certeza que quer apagar o cliente ${data.name} ?`,
            showDenyButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
              //Logical delete
              delCli.push(data.customer_id);
              console.log(delCli);
              localStorage.setItem("deletedClients", JSON.stringify(delCli));

              //Actual delete
              fetch(
                `https://iaie.herokuapp.com/clients/deleteClient/${data.customer_id}`
              )
                .then((response) => response.json())
                .then((responseData) => {
                  console.log(responseData);
                });
              Swal.fire("Apagado com sucesso!", "", "success").then(
                (result) => {
                  window.location = "lista_clientes.html";
                }
              );
            } else {
              if (result.isDenied) {
                window.close();
              }
            }
          });
        });
      });
  });
};
