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


<div align="center">
		<h1 align="center">List</h1>



		<sf:form method="post" modelAttribute="form">



			<tr>
				<td><sf:hidden path="pageNo" />
				<td><sf:input path="firstName" placeholder="Enter firstName"
						class="form-control" style="font-size: 17px" /></td> &emsp;

				<td><sf:select path="userId" style="font-size: 17px">
						<sf:option value="0">--------select---------</sf:option>
						<sf:options items="${preList}" itemValue="id"
							itemLabel="firstName"></sf:options>


					</sf:select> &emsp;
				<td><sf:input path="lastName" placeholder="Enter lastName"
						class="form-control" style="font-size: 17px" /></td> &emsp;
				<td><sf:input path="dob" placeholder="Enter DOB"
						class="form-control" style="font-size: 17px" /> &emsp;
				<td><input type="submit" name="operation" value="search"
					style="font-size: 17px" /></td>
			</tr>




			<table border="1" width="100%" align="center" cellpadding=6px
				cellspacing=".2">



				<tr>
					<th></th>
					<th>ID</th>
					<th>FirstName</th>
					<th>LastName</th>
					<th>Login</th>
					<th>Password</th>
					<th>DOB</th>
					<th>Address</th>
					<th>Edit</th>

				</tr>
				<c:forEach items="${list}" var="user">

					<tr>
						<td><sf:checkbox path="ids" value="${user.id}" />
						<td><c:out value="${user.id}"></c:out></td>
						<td><c:out value="${user.firstName}"></c:out></td>
						<td><c:out value="${user.lastName}"></c:out></td>
						<td><c:out value="${user.login}"></c:out></td>
						<td><c:out value="${user.password}"></c:out></td>
						<td><c:out value="${user.dob}"></c:out></td>
						<td><c:out value="${user.address}"></c:out></td>
						<td><a href=" <c:url value="/ctl/User?id=${user.id }"/> "
							class='btn btn-primary'>edit</a></td>
					</tr>



				</c:forEach>

			</table>
			<table width="100%">

				<tr>
					<td><input type="submit" name="operation"
						class="btn btn-warning btn-md" style="font-size: 17px"
						value="previous"></td>

					<td><input type="submit" name="operation"
						class="btn btn-primary btn-md" style="font-size: 17px" value="Add"></td>


					<td><input type="submit" name="operation"
						class="btn btn-danger btn-md" style="font-size: 17px"
						value="delete"></td>

					<td align="right"><input type="submit" name="operation"
						class="btn btn-warning btn-md" style="font-size: 17px"
						style="padding: 5px;" value="next"></td>
				</tr>

				<tr></tr>

			</table>


		</sf:form>
	</div>

</body>
</html>