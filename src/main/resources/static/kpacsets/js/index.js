const filterKpacSetsGridForm = document.getElementById('filter_kpac_sets_grid_form');
const filterInputTitle = document.getElementById('filter_input_title');

const createKpacSetForm = document.getElementById("create_kpac_set_form");
const inputTitle = document.getElementById('input_title');
const selectKpac = document.getElementById('select_kpac');

( async () => {

    /**
     * Code for managing grid of kpacs.
     */
    const grid = new dhx.Grid("grid_container", {
        columns: [
            {id: "id", header: [{text: "Id"}], adjust: "header"},
            {id: "title", header: [{text: "Title"}], adjust: "data"},
            {
                id: "actionDelete", header: [{text: "Action"}],
                htmlEnable: true,
                template: function (text, row) {
                    return '<button name="button_delete" value=' + row.id + ' class="btn btn-danger btn-sm table-button">Delete</button>';
                },
            },
        ],
        data: await retrieveJsonResponse(KPAC_SET_API),
        resizable: true,
    });

    document.addEventListener('click', listener => {
        if (listener.target && listener.target.name === 'button_delete') {
            fetch(KPAC_SET_API + listener.target.value, {
                method: 'DELETE',
            }).then(response => response.status === 204 ?
                retrieveJsonResponse(KPAC_SET_API).then(kpacSetsJson => grid.data.parse(kpacSetsJson)) :
                console.log('Error during delete kpac set request. Response: ', response)
            );
        }
    });

    const events = Object.entries({
        sort: () => {
            const { dir, by } = grid.getSortingState();
            const requestParams = {
                title: filterInputTitle.value,
                sortDirection: dir,
                sortProperty: by,
            };
            const queryParams = toQueryParams(requestParams);
            fetch(`${KPAC_SET_API}?${queryParams}`)
                .then(response => response.ok ?
                    response.json().then(json => grid.data.parse(json) ) :
                    console.log('Error during sort with filters request. Response: ', response)
                )
        },
        cellDblClick: (event) => {
            console.log(event);
            window.open(`set/${event.id}`);
        }
    });

    events.forEach(([eventName, callback]) => {
        grid.events.on(eventName, callback);
    });

    /**
     * Code for managing filter kpacs grid form.
     */
    filterKpacSetsGridForm.onsubmit = (event) => {
        event.preventDefault();
        const requestParams = {
            title: filterInputTitle.value,
        };
        const queryParams = toQueryParams(requestParams);
        fetch(`${KPAC_SET_API}?${queryParams}`)
            .then(response => response.ok ?
                response.json().then(json => grid.data.parse(json)) :
                console.log('Error during filter kpac sets request. Response: ', response)
            )
    }

    /**
     * Code for managing create new kpac form.
     */
    createKpacSetForm.onsubmit = (event) => {
        event.preventDefault();
        const createKpacSetRequestBody = {
            title: inputTitle.value,
            kpacId: selectKpac.value
        };
        fetch(KPAC_SET_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createKpacSetRequestBody),
        }).then(response => response.ok ?
            retrieveJsonResponse(KPAC_SET_API).then(kpacsJson => grid.data.parse(kpacsJson)) :
            console.log('Error during create kpac set request. Response: ', response)
        );
    }
})();
