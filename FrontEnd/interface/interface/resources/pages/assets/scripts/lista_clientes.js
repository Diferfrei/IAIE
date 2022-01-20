window.onload = function () {
    const SERVER_URL = "https://iaie.herokuapp.com/clients/all";
    $(document).ready(function () {
        fetch(SERVER_URL)
            .then((response) => response.json())
            .then(clients => {
                console.log(clients);
                var $table = $("#tabelaClients").DataTable({
                    data: clients,
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
                            render: function (value, cell, clients) {
                                var action = `<a href="dados_cliente.html">
                                                            <button type="button" class="mb-2 mr-2 border-0 btn-lg btn-outline-light">
                                                                <i class="pe-7s-look"> </i>
                                                            </button>
                                                        </a>
                                                        `;
                                return action;
                            }
                        }
                    ]
                });
            })
    });
};