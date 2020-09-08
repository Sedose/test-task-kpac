<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>K-PAC sets</title>
    <link rel="stylesheet" href="kpacsets/css/main.css">
    <link rel="stylesheet" href="lib/dhtmlgrid/codebase/grid.css">
    <link href="webjars/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">
    Here comes kpac sets
    <div class="row">
        <div class="col-sm">
            Filter form
            <form action="#" id="filter_kpac_sets_grid_form">
                <label>Title
                    <input class="form-control" placeholder="Enter title" id="filter_input_title">
                </label>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" id="filter_container_form_button_submit" value="Filter"/>
                </div>
            </form>
            <div id="grid_container"></div>
        </div>

        <div class="col-sm">
            New kpac set form
            <form action="#" id="create_kpac_set_form">
                <div class="form-group">
                    <label>Title
                        <input class="form-control" placeholder="Enter title" id="input_title" required>
                    </label>
                </div>
                <div class="form-group">
                    <label>Select kpac
                        <select class="form-control" id="select_kpac">
                            <c:forEach var="kpac" items="${kpacs}">
                                <option value="${kpac.id}">
                                    ${kpac.title}
                                </option>
                            </c:forEach>
                        </select>
                    </label>
                </div>
                <input type="submit" class="btn btn-primary" id="create_kpac_set_form_button_submit" value="Submit"/>
            </form>
        </div>

    </div>
</div>
<script type="text/javascript" src="lib/dhtmlgrid/codebase/grid.js"></script>
<script type="text/javascript" src="common/js/index.js"></script>
<script type="text/javascript" src="kpacsets/js/index.js"></script>
</body>
</html>
