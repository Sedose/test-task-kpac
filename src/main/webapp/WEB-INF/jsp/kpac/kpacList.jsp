<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <title>K-PAC set</title>
        <link rel="stylesheet" href="lib/dhtmlgrid/codebase/grid.css">
    </head>
    <body>
        Here comes list of kpac
        <table>
            <tr>
                <td>ID</td>
                <td>TITLE</td>
                <td>DESCRIPTION</td>
                <td>CREATION DATE && TIME</td>
                <td>DELETE</td>
            </tr>
            <c:forEach var = "kpac" items="${kpacs}">
                <tr>
                    <td>${kpac.id}</td>
                    <td>${kpac.title}</td>
                    <td>${kpac.description}</td>
                    <td>${kpac.creationDateTime}</td>
                    <td>Delete</td>
                </tr>
            </c:forEach>
        </table>
        <script type="text/javascript" src="lib/dhtmlgrid/codebase/grid.js"></script>
    </body>
</html>
