<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <title>K-PAC set</title>
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="lib/dhtmlgrid/codebase/grid.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
              integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid">
            Here comes list of kpac
            <div class="row">
                <div class="col-sm">
                    <div id="grid_container" ></div>
                </div>
                <div class="col-sm">
                    <form id="create_kpac_form">
                        <div class="form-group">
                            <label>Title
                                <input class="form-control" placeholder="Enter title" id="input_title" required>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>Description
                                <input class="form-control" placeholder="Enter description" id="input_description" required>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>Creation date && time
                                <input type='datetime-local' class="form-control" placeholder="Enter creation date && time" id="input_creation_date_time" required>
                            </label>
                        </div>
                        <button class="btn btn-primary" id="create_kpac_form_button_submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="lib/dhtmlgrid/codebase/grid.js"></script>
        <script>
            const KPAC_API = '/api/v1/kpacs/';
            async function retrieveKpacsJson() {
                const kpacsResponse = await fetch(KPAC_API);
                return await kpacsResponse.json();
            }
            (async () => {
                const grid = new dhx.Grid("grid_container", {
                    columns: [
                        { id: "id", header: [{ text: "Id" }], adjust: "header" },
                        { id: "title", header: [{ text: "Title"}, { content: "selectFilter" }], adjust: "data" },
                        { id: "description", header: [{ text: "Description"}, { content: "selectFilter" }], adjust: "data" },
                        { width: 185, id: "creationDateTime", header: [{ text: "Creation date && time"}, { content: "selectFilter" }] },
                        { id: "actionDelete", header: [{text: "Action"}],
                            htmlEnable: true,
                            template: function (text, row) {
                                return '<button name="button_delete" value=' + row.id + ' class="btn btn-danger btn-sm table-button">Delete</button>';
                            },
                        },
                    ],
                    data: await retrieveKpacsJson(),
                });
                console.log(await retrieveKpacsJson());
                const events = Object.entries({
                    'cellClick': event => {
                        fetch(KPAC_API + event.id, {
                            method: 'DELETE',
                        }).then(response => response.status === 204 ?
                            retrieveKpacsJson().then(kpacsJson => grid.data.parse(kpacsJson)) :
                            console.log('Error during delete kpac request. Response: ', response)
                        );
                    },
                });

                events.forEach(([eventName, callback]) => {
                    grid.events.on(eventName, callback);
                });

                const createKpacFormButtonSubmit = document.getElementById("create_kpac_form_button_submit");
                const inputTitle = document.getElementById('input_title');
                const inputDescription = document.getElementById('input_description');
                const inputCreationDateTime = document.getElementById('input_creation_date_time');

                createKpacFormButtonSubmit.onclick = (event) => {
                    event.preventDefault();
                    const createKpacRequestBody = {
                        title: inputTitle.value,
                        description: inputDescription.value,
                        creationDateTime: inputCreationDateTime.value,
                    };
                    fetch(KPAC_API, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(createKpacRequestBody),
                    }).then(response => response.ok ?
                        retrieveKpacsJson().then(kpacsJson => grid.data.parse(kpacsJson)) :
                        console.log('Error during create kpac request. Response: ', response)
                    );
                }
            })();

        </script>

    </body>
</html>
