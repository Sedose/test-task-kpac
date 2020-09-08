const filterKpacsGridForm = document.getElementById('filter_kpacs_grid_form');
const filterInputTitle = document.getElementById('filter_input_title');
const filterInputDescription = document.getElementById('filter_input_description');
const filterInputCreationDateFrom = document.getElementById('filter_input_creation_date_from');
const filterInputCreationDateTo = document.getElementById('filter_input_creation_date_to');

const createKpacForm = document.getElementById("create_kpac_form");
const inputTitle = document.getElementById('input_title');
const inputDescription = document.getElementById('input_description');
const inputCreationDate = document.getElementById('input_creation_date');

const kpacSetId = window.location.pathname.split('/').pop();

( async () => {

    /**
     * Code for managing grid of kpacs.
     */
    const grid = new dhx.Grid("grid_container", {
        columns: [
            {id: "id", header: [{text: "Id"}], adjust: "header"},
            {id: "title", header: [{text: "Title"}], adjust: "data"},
            {id: "description", header: [{text: "Description"}], adjust: "data"},
            {width: 185, id: "creationDate", header: [{text: "Creation date"}]},
            {
                id: "actionDelete", header: [{text: "Action"}],
                htmlEnable: true,
                template: function (text, row) {
                    return '<button name="button_delete" value=' + row.id + ' class="btn btn-danger btn-sm table-button">Delete</button>';
                },
            },
        ],
        data: await retrieveJsonResponse(`${getContextPath(window.location.pathname)}/${KPAC_SET_API}/${kpacSetId}/kpacs`),
        resizable: true,
    });

    document.addEventListener('click', listener => {
        if (listener.target && listener.target.name === 'button_delete') {
            fetch(`${getContextPath(window.location.pathname)}/${KPAC_SET_API}/${kpacSetId}/kpacs/${listener.target.value}`, {
                method: 'DELETE',
            }).then(response => response.status === 204 ?
                retrieveJsonResponse(`${getContextPath(window.location.pathname)}/${KPAC_SET_API}/${kpacSetId}/kpacs`)
                    .then(kpacsJson => grid.data.parse(kpacsJson)) :
                console.log('Error during delete kpac request. Response: ', response)
            );
        }
    });

    const events = Object.entries({
        'sort': () => {
            const { dir, by } = grid.getSortingState();
            const requestParams = {
                title: filterInputTitle.value,
                description: filterInputDescription.value,
                creationDateFrom: filterInputCreationDateFrom.value,
                creationDateTo: filterInputCreationDateTo.value,
                sortDirection: dir,
                sortProperty: by,
            };
            const queryParams = toQueryParams(requestParams);
            fetch(`${getContextPath(window.location.pathname)}/${KPAC_SET_API}/${kpacSetId}/kpacs?${queryParams}`)
                .then(response => response.ok ?
                    response.json().then(json => { grid.data.parse(json); console.log(json) }) :
                    console.log('Error during sort with filters request. Response: ', response)
                )
        },
    });

    events.forEach(([eventName, callback]) => {
        grid.events.on(eventName, callback);
    });

    /**
     * Code for managing filter kpacs grid form.
     */
    filterKpacsGridForm.onsubmit = () => {
        const requestParams = {
            title: filterInputTitle.value,
            description: filterInputDescription.value,
            creationDateFrom: filterInputCreationDateFrom.value,
            creationDateTo: filterInputCreationDateTo.value,
        };
        const queryParams = toQueryParams(requestParams);
        fetch(`${getContextPath(window.location.pathname)}/${KPAC_SET_API}/${kpacSetId}/kpacs?${queryParams}`)
            .then(response => response.ok ?
                response.json().then(json => grid.data.parse(json)) :
                console.log('Error during filter kpacs request. Response: ', response)
            )
    }

    /**
     * Code for managing create new kpac form.
     */
    createKpacForm.onsubmit = (event) => {
        event.preventDefault();
        const createKpacRequestBody = {
            title: inputTitle.value,
            description: inputDescription.value,
            creationDate: inputCreationDate.value,
            kpacSetId: kpacSetId,
        };
        fetch(`${getContextPath(window.location.pathname)}/${KPAC_API}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createKpacRequestBody),
        }).then(response => response.ok ?
            retrieveJsonResponse(`${getContextPath(window.location.pathname)}/${KPAC_SET_API}/${kpacSetId}/kpacs`)
                .then(kpacsJson => grid.data.parse(kpacsJson)) :
            console.log('Error during create kpac request. Response: ', response)
        );
    }
})();
