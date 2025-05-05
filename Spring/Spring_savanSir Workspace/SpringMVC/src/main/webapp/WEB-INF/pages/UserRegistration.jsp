<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page isELIgnored="false"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="sf"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	
	<sf:form modelAttribute="form">
		<div align="center">

			<h1>
				<font size="10px" color="BlueViolet">UserRegistration</font>
			</h1>
			<table>

				<tr>
					<th>First Name :</th>
					<td><sf:input path="firstName" style="font-size: 17px" /></td>
					<td><font color="red" size="3x"><sf:errors path="firstName"/></font>
				</tr>
				<tr>
					<th>Last Name :</th>
					<td><sf:input path="lastName" style="font-size: 17px" /></td>
					<td><font color="red" size="3x"><sf:errors path="lastName" /></font>
				</tr>
				<tr>
					<th>LogIn :</th>
					<td><sf:input path="login" style="font-size: 17px" /></td>
					<td><font color="red" size="3x"><sf:errors path="login"/></font>
				</tr>
				<tr>
					<th>Password :</th>
					<td><sf:input path="password" style="font-size: 17px" /></td>
					<td><font color="red" size="3x"><sf:errors path="password"/></font>
				</tr>
				<tr>
					<th>DOB :</th>
					<td><sf:input path="dob" style="font-size: 17px" /></td>
					<td><font color="red" size="3x"><sf:errors path="dob"/></font>
				</tr>
				<tr>
					<th>Address :</th>
					<td><sf:input path="address" style="font-size: 17px" /></td>
					<td><font color="red" size="3x"><sf:errors path="address"/></font>
				</tr>
				<tr>
					<th></th>
					<td><input type="submit"></td>
				</tr>
			</table>
		</div>
	</sf:form>
</body>
</html>