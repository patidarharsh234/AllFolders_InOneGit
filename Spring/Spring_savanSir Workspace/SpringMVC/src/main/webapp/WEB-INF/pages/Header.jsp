<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.rays.dto.UserDTO"%>
<%@ page isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="sf"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="s"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
	integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
	crossorigin="anonymous">
</head>
<body>


	<jsp:useBean id="dto" class="com.rays.dto.UserDTO" scope="request"></jsp:useBean>
	<br>
	<%
		dto = (UserDTO) session.getAttribute("user");

		boolean userLoggedin = dto != null;

		String welcomeMsg = "Hi,  ";

		if (userLoggedin) {
			welcomeMsg += dto.getFirstName();
		} else {
			welcomeMsg += "Gest";
		}
	%>


	<%=welcomeMsg%>


	<%
		if (userLoggedin) {
	%>


	<h3>
		<div align="right">
			<a href='<c:url value="/Login?logout=logout"/>'>Logout</a>
		</div>
		<a href="<c:url value="/ctl/User/search"/>">UserList</a>| <a
			href='<c:url value="/ctl/User"/>'>Add</a>
	</h3>

	<%
		} else {
	%>
	<h3>
		<div align="right">
			<a href='<c:url value="/Login"/>'>Login</a>| <a
				href='<c:url value="/UserRegistration"/>'>UserRegistration</a>
		</div>
	</h3>
	<%
		}
	%>
	<hr>

</body>
</html>