<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>

</head>

<body>
    <c:choose>

        <c:when test="${perform.size()>0}">

            <form:form action="/reports" modelAttribute="reportParametr"  method="post" onsubmit="return validate();" >
                <div id="tabl">
                    <table>
                        <tr>
                            <th>Instructions</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>StartDate:</td>
                            <td><form:input type="text" id="from" name="from"  path="startDate" /> </td>
                        </tr>

                        <tr>
                            <td>EndDate:</td>
                            <td><form:input type="text" id="to" path="endDate"/></td>
                        </tr>

                        <tr>
                            <td>Perforem:</td>
                            <td><form:select path="performer">

                                <form:option value="0">All Performers</form:option>

                                    <c:forEach var="performList" items="${perform}">
                                        <form:option value="${performList.id}">${performList.performer}</form:option>
                                     </c:forEach>

                                </form:select></td>
                        </tr>

                        <tr>
                            <td>Time Period:</td>
                            <td><select  id="sel" onchange="getPeriod();">
                            <option value=""></option>
                            <option value="last_qtr">Last Qtr</option>
                            <option value="last_month">Last Month</option>
                            <option value="last_calendar_year">Last Calendar Year</option>
                            <option value="current_year_to_date">Current Year to Date</option>
                            <option value="current_qtr_to_date">Current Qtr to Date</option>
                            <option value="current_month_to_date">Current Month to Date</option>
                            </select></td>
                         </tr>

                        <td></td>
                        <td><button>send</button></td>

                    </table>
                </div>
            </form:form>
    </c:when>

        <c:when test="${reportsArrayList!=null}">
            <div id="tabl">
                <table>
                    <tr>
                        <th>StartDate</th>
                        <th>EndDate</th>
                        <th>Performer</th>
                        <th>Activety</th>
                     </tr>

                    <c:forEach var="reportsList" items="${reportsArrayList}">
                        <tr>
                            <td>${reportsList.startdate}</td>
                            <td>${reportsList.enddate}</td>
                            <td>${reportsList.performer}</td>
                            <td>${reportsList.activity}</td>
                        </tr>
                    </c:forEach>
                </table>
            </div>
            <a href="/reports">Вернуться обратно</a>
        </c:when>
    </c:choose>

${messageError}<br>

</body>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>



<script type="text/javascript" src="accept/js/beetwin.js"></script>
<script type="text/javascript" src="accept/js/script.js"></script>
<link rel="stylesheet" type="text/css" href="accept/css/style.css">

</html>