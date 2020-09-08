<%@ page contentType="text/html;charset=UTF-8" %>

<html>
<head>
    <title>K-PAC list</title>
    <link rel="stylesheet" href="/kpacset/css/main.css">
    <link rel="stylesheet" href="/lib/dhtmlgrid/codebase/grid.css">
    <link href="/webjars/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">
    Here comes kpac set <br>
    Kpac set id: ${kpacSet.id}, title: ${kpacSet.title}
    <div class="row">
        <div class="col-sm">
            Filter form
            <form action="#" id="filter_kpacs_grid_form">
                <label>Title
                    <input class="form-control" placeholder="Enter title" id="filter_input_title">
                </label>
                <label>Description
                    <input class="form-control" placeholder="Enter description" id="filter_input_description">
                </label>
                <label>Creation date from
                    <input type='date' class="form-control" placeholder="Enter creation date from"
                           id="filter_input_creation_date_from">
                </label>
                <label>Creation date to
                    <input type='date' class="form-control" placeholder="Enter creation date to"
                           id="filter_input_creation_date_to">
                </label>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" id="filter_container_form_button_submit" value="Filter"/>
                </div>
            </form>
            <div id="grid_container"></div>
        </div>
        <div class="col-sm">
            New kpac form
            <form action="#" id="create_kpac_form">
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
                    <label>Creation date
                        <input type='date' class="form-control" placeholder="Enter creation date"
                               id="input_creation_date" required>
                    </label>
                </div>
                <input type="submit" class="btn btn-primary" id="create_kpac_form_button_submit" value="Submit"/>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript" src="/lib/dhtmlgrid/codebase/grid.js"></script>
<script type="text/javascript" src="/common/js/index.js"></script>
<script type="text/javascript" src="/kpacset/js/index.js"></script>
</body>
</html>
