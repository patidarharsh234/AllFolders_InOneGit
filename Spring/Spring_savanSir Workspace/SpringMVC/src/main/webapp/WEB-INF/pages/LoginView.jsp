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


	<sf:form action="Login" method="post" modelAttribute="loginForm">
		<div align="center">
			<font size="10px" color="brown">Login</font>
			<table>
<%-- 				<%
					String uri = (String) request.getAttribute("uri");
				%> 
				
				<sf:hidden path="uri" />
				--%>
				
				

				<div>
					<h3>
						<font color="green"> <c:if test="${not empty success}">${success}</c:if>
						</font>
					</h3>
				</div>


				<div>
					<h3>
						<font color="red"> <c:if test="${not empty error}">${error}</c:if>
						</font>
					</h3>
				</div>


				<tr>
					<th>LogIn :</th>
					<td><sf:input path="login" /></td>

					<td><font color="red" size="3x"><sf:errors path="login" /></font></td>


				</tr>
				<tr>
					<th>Password :</th>
					<td><sf:input type="password" path="password" /></td>

					<td><font color="red" size="3x"><sf:errors
								path="password" /></font>
				</tr>

				<tr>
					<th></th>
					<td><input type="submit" name="Operation" value="signIn">
						<input type="submit" name="Operation" value="signUp"></td>
				</tr>
			</table>
		</div>

	</sf:form>

</body>
</html>