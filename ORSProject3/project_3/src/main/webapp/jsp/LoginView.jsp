<%@page import="in.co.rays.project_3.controller.UserRegistrationCtl"%>
<%@page import="in.co.rays.project_3.util.ServletUtility"%>
<%@page import="in.co.rays.project_3.controller.LoginCtl"%>
<%@page import="in.co.rays.project_3.util.DataUtility"%>
<%@page import="in.co.rays.project_3.controller.ORSView"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login view</title>
 <link rel="icon" type="image/x-icon" href="/img/logo.png">
 
 
 
 <!-- veiw or page ko resposive bana ke liye -->
<meta name="viewport" content="width=device-width, initial-scale=1">


<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
	
	integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
	crossorigin="anonymous"></script>


<style type="text/css">
.log1 {
	padding-top: 6%;
}

.input-group-boxshadow {
	box-shadow: 9px 8px 7px #001a33;
}

.grad {
	background-image: linear-gradient(to bottom right,#5c6bc0,black);
	background-repeat: no repeat;
	background-size: 100%;
	padding-bottom: 11px;
}

i.css {
	border: 2px solid #8080803b;
	padding-left: 10px;
	background-color: #ebebe0;
}

.p4 {
	background-image: url('<%=ORSView.APP_CONTEXT%>/img/Ai13.jpg');
	back-size: cover;
	background-repeat: no repeat;
	class ="img-responsive";
	
	
}
</style>
</head>

<!--______________________________________________________________________________________________________ -->
<body class="p4">
	<div>
		<%@include file="Header.jsp"%>
	</div>
<!--_______________________________________________________________________________________________________  -->	
	
	
	<div>
	        <jsp:useBean id="dto" class="in.co.rays.project_3.dto.UserDTO" scope="request"></jsp:useBean>

<!--________________________________________________________________________________________________________S  -->									
		<main>
		<form action="<%=ORSView.LOGIN_CTL%>" method="post">
		
		

			<div class="row log1">
			
	<!--___________________________________________1-col-md-4_____________________________________________  -->		
				<!-- Grid column -->
				<div class="col-md-4 "></div>
				
	<!--_2-col-md-4_______________________CARD_______________________CARD-BODY_________input-group-addon=SHADOW___grad=COLOUR_____-->			
		
		 <div class="col-md-4">		               
	<!--________________________-->	
		
		
					<div class="card input-group-boxshadow grad	">
						<div class="card-body">
		
						
						
               <!--________________________________LOGIN________________________________________ --> 
                 
							<h3 class="text-center text-black">Login</h3>
							<!--card Body -->
							
							
              <!--________________________________getSuccessMessage________________________________________ --> 	
			        <div>		
								<H4 align="center">
									<%
										if (!ServletUtility.getSuccessMessage(request).equals("")) {
									%>
									<div class="alert alert-success alert-dismissible">
										<button type="button" class="close" data-dismiss="alert">&times;</button>
										<%=ServletUtility.getSuccessMessage(request)%>
									</div>
									<%
										}
									%>
								</H4>
								
								
                <!--________________________________getErrorMessage________________________________________ --> 
                 
								<H4 align="center">
						<%
							if (!ServletUtility.getErrorMessage(request).equals("")) {
						%>
						            <!-- alert box ke liye -->
									<div class="alert alert-danger alert-dismissible">  
									
									   <!-- &time ki jgh X bhi likh sakte he -->
									   <!--crose button ke liye  -->
									<button type="button" class="close" data-dismiss="alert">&times;</button>
									
									<%=ServletUtility.getErrorMessage(request)%>
									</div>
									
									
									<%
										}
									%>

								</H4>
								
				 <!--________________________________URI________________________________________ -->	
								
								<%
									String uri = (String) request.getAttribute("uri");
								%>
                               <input type="hidden" name="uri" value="<%=uri%>">
                               

					<input type="hidden" name="id" value="<%=dto.getId()%>">
				    <input type="hidden" name="createdBy" value="<%=dto.getCreatedBy()%>">
					<input type="hidden" name="modifiedBy" value="<%=dto.getModifiedBy()%>">
					<input type="hidden" name="createdDatetime" value="<%=DataUtility.getTimestamp(dto.getCreatedDatetime())%>">
					<input type="hidden" name="modifiedDatetime" value="<%=DataUtility.getTimestamp(dto.getModifiedDatetime())%>">
								
									
			</div>

           <!--________________________________EMAIL ID________________________________________ -->
                                
           <!--... ........................................ "pl-sm-5"=pading lefght -small... pixel(5)chodta he-->
           
							<span class="pl-sm-5"><b>Email Id</b> <span
								style="color: red;">*</span></span> </br>
								

   <!--................................_______________________col-sm-12 =text box ki length  -->

							<div class="col-sm-12">
							
	<!--"fa fa=fontawsom library add ki ................................-->
	<!--FA-FA ICON and INPUT tage  ko marge karrta he...."input-group"&"input-group-prepend"=icon&text colum ko uper niche he unko sath me.............................................-->
	
	
								<div class="input-group">
									<div class="input-group-prepend">
									
									
			<!--fafa ke icons ke liye..............................................."input-group-text"=fafa icon ko bada..................  -->						
										
										<div class="input-group-text input-group-boxshadow">
											<i class="fa fa-envelope grey-text " style="font-size: 1rem;"></i>
										</div>
									</div>
									
			<!--"input-group-boxshadow"=css banayi sheadow..................................."form-control"=text box ko bada.................. -->
									
									
									<input type="text" class="form-control input-group-boxshadow" name="login"
										placeholder="Enter email"
										value="<%=DataUtility.getStringData(dto.getLogin())%>">
								</div>
							</div>
							
					<!--_____________________________INPUTVALIDATION_MESSAGE___________________________  -->		
							<font color="red" class="pl-sm-5"> <%=ServletUtility.getErrorMessage("login", request)%></font></br>




            <!--_____________________________________PASSWORD__________________________________________________________________  -->
            
					<span class="pl-sm-5"><b>Password</b> <span
								style="color: red;">*</span></span> </br>
								
							<div class="col-sm-12">
								<div class="input-group">
								
								
									<div class="input-group-prepend">
										<div class="input-group-text input-group-boxshadow">
											<i class="fa fa-lock grey-text" style="font-size: 1rem;"></i>
										</div>
									</div>
									
									
									
									<input type="password" id="myInput" class="form-control input-group-boxshadow"
										name="password" placeholder="Enter password"
										value="<%=DataUtility.getStringData(dto.getPassword())%>">


								</div>


							</div>
							<!--_____________________________INPUTVALIDATION_MESSAGE___________________________  -->
							
							<font color="red" class="pl-sm-5"> <%=ServletUtility.getErrorMessage("password", request)%></font></br>
							</br>

<!--_____________________________________BUTTONS(OP_SIGN_IN///OP_SIGN_UP)__________________________________________________________________  -->
            

							<div class="text-center">
            <!--btn liya botton colour ke liye  -->
								<input type="submit" name="operation"
									class="btn btn-success btn-md hover-overlayed"
									style="font-size: 17px" value="<%=LoginCtl.OP_SIGN_IN%>">

								<input type="submit" name="operation"
									class="btn btn-primary btn-md" style="font-size: 17px"
									value="<%=LoginCtl.OP_SIGN_UP%>">
							</div>
							
							<div class="text-center">
								<a href="<%=ORSView.FORGET_PASSWORD_CTL%>"
									style="color: white; font-size: 15px;"><b>Forget my
										password ?</b></a>
							</div>
							
						</div>
					</div>
				</div>
				
				
				
				
        <!--_________3-col-md-4____________________________________________________________________________________________  -->				
				
				<div class="col-md-4 mb-4"></div>
				
		<!--_____________________________________________________________________________________________________  -->		
				
			</div>

		</form>
		</main>


	</div>

</body>
<%@include file="FooterView.jsp"%>
</html>