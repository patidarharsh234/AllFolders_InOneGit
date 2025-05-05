<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="sf"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="s"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<sf:form method="post" modelAttribute="form">
		<div align="center">


			<c:if test="${form.id>0}">
				<h1 align="center">Update</h1>
			</c:if>

			<c:if test="${form.id==0}">
				<h1 align="center">Add</h1>
			</c:if>

			<table border="1" width="40%" align="center" cellpadding=6px
				cellspacing=".2">

				<tr>
					<th>First Name :</th>
					<td><sf:input path="firstName" style="font-size: 17px" /></td>
				</tr>
				<tr>
					<th>Last Name :</th>
					<td><sf:input path="lastName" style="font-size: 17px" /></td>
				</tr>
				<tr>
					<th>LogIn :</th>
					<td><sf:input path="login" style="font-size: 17px" /></td>
				</tr>
				<tr>
					<th>Password :</th>
					<td><sf:input path="password" style="font-size: 17px" /></td>
				</tr>
				<tr>
					<th>DOB :</th>
					<td><sf:input path="dob" style="font-size: 17px" /></td>
				</tr>
				<tr>
					<th>Address :</th>
					<td><sf:input path="address" style="font-size: 17px" /></td>
				</tr>
				<tr>
					<th></th>

					<c:if test="${form.id>0}">
						<h1 align="center"><td><input type="submit" name="operation" value="Update"></td></h1>
					</c:if>

					<c:if test="${form.id==0}">
						<h1 align="center"><td><input type="submit" name="operation" value="Add"></td></h1>
					</c:if>
					
				</tr>
			</table>
		</div>
	</sf:form>
</body>
</html>