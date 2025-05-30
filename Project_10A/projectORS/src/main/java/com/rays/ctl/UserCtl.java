
package com.rays.ctl;

import java.io.IOException;

import java.io.OutputStream;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.common.attachment.AttachmentDTO;
import com.rays.common.attachment.AttachmentForm;
import com.rays.common.attachment.AttachmentServiceInt;
import com.rays.common.mail.EmailDTO;
import com.rays.common.mail.EmailServiceImpl;

import com.rays.config.JwtTokenUtil;
import com.rays.dto.CollegeDTO;
import com.rays.dto.RoleDTO;
import com.rays.dto.UserDTO;
import com.rays.form.ChangePasswordForm;
import com.rays.form.ForgetPasswordForm;
import com.rays.form.MyProfileForm;
import com.rays.form.UserForm;
import com.rays.jwtblacklistuse.TokenBlacklist1;
import com.rays.jwtblacklistuse.UpdateAndBuildNewToken;
import com.rays.service.RoleServiceInt;
import com.rays.service.UserServiceInt;

/**
 * @author Harsh Patidar
 *
 */

@RestController
@RequestMapping(value = "User")
public class UserCtl extends BaseCtl<UserForm, UserDTO, UserServiceInt> {

	@Autowired
	RoleServiceInt roleService = null;

	@Autowired
	UserServiceInt userService;

	@Autowired
	AttachmentServiceInt attachmentService;

	@Autowired
	JwtTokenUtil jwtTokenUtil;

	@Autowired
	UpdateAndBuildNewToken refreshToken;

	/**
	 * Send email
	 */
	@Autowired
	public EmailServiceImpl emailSender;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("Inside UserCtl preload.........");
		ORSResponse res = new ORSResponse(true);
		RoleDTO dto = new RoleDTO();
		dto.setStatus(RoleDTO.ACTIVE);
		List<DropdownList> list = roleService.search(dto, userContext);
		res.addResult("roleList", list);
		return res;
	}

	@GetMapping("/logout")
	public ORSResponse logout(HttpServletRequest req, HttpServletResponse response,
			@RequestHeader("Authorization") String requestTokenHeader) {
		ORSResponse res = new ORSResponse(true);
		HttpSession session = req.getSession();
		session.invalidate();
		// res.setSuccess(true);

		// res.addResult("roleList", list);

		try {
			String jwtToken = requestTokenHeader.substring(7); // Remove "Bearer " prefix
			TokenBlacklist1.addToBlacklist(jwtToken);

			res.addMessage("Logout Successfully");
			// return ResponseEntity.ok("Logged out successfully");
		} catch (Exception e) {
			// return ResponseEntity.badRequest().body("Failed to logout. Error: " +
			// e.getMessage());
			res.addMessage("Failed to logout. Error: " + e.getMessage());
		}

		refreshToken.RefreshToken(req, res);

		res.addMessage("Logout Successfully");

		return res;
	}

	/**
	 * Updates profile of logged in user
	 * 
	 * @param form
	 * @param bindingResult
	 * @return
	 */
	@PostMapping("myprofile")
	public ORSResponse myProfile(@RequestBody @Valid MyProfileForm form, BindingResult bindingResult) {

		ORSResponse res = validate(bindingResult);

		if (!res.isSuccess()) {
			return res;
		}

		UserDTO dto = baseService.findById(userContext.getUserId(), userContext);
		dto.setFirstName(form.getFirstName());
		dto.setLastName(form.getLastName());
		// dto.setLoginId(form.getLogin());
		dto.setDob(form.getDob());
		dto.setPhone(form.getMobileNo());
		dto.setGender(form.getGender());

		baseService.update(dto, userContext);

		return res;
	}

	/**
	 * Changes password of logged-in user
	 * 
	 * @param form
	 * @param bindingResult
	 * @return
	 */
	@PostMapping("changepassword")
	public ORSResponse changePassword(@RequestBody @Valid ChangePasswordForm form, BindingResult bindingResult) {
		System.out.println("Inside UserCtl changepassword() .........");

		ORSResponse res = validate(bindingResult);

		if (!res.isSuccess()) {
			return res;
		}

		if (form.getOldPassword().equalsIgnoreCase(form.getNewPassword())) {
			res.setSuccess(false);
			res.addMessage(" New password can note be same from Old Password");
			return res;
		}
		
		if (!form.getNewPassword().equalsIgnoreCase(form.getConfirmPassword())) {
			res.setSuccess(false);
			res.addMessage(" New password and conform password are note match");
			return res;
		}
		
		if (form.getLoginId()==null && form.getForgotPasswordLogin()==null) {
			res.setSuccess(false);
			res.addMessage(" plese select Email Id go to return forgot Password filed");
			return res;
		}

		UserDTO changedDto = baseService.changePassword(form.getLoginId(), form.getOldPassword(), form.getNewPassword(),
				userContext);

		if (changedDto == null) {

			res.setSuccess(false);
			res.addMessage("Invalid old password");
			return res;
		}

		res.setSuccess(true);
		res.addMessage("Password has been changed");

		return res;
	}

	/**
	 * Forgot password
	 * 
	 * @param form
	 * @param bindingResult
	 * @return
	 */
	@PostMapping("forgetPassword")
	public ORSResponse forgetPassword(@RequestBody @Valid ForgetPasswordForm form, BindingResult bindingResult,
			HttpSession seesion) {

		ORSResponse res = validate(bindingResult);

		UserDTO fDTO = baseService.forgotPassword(form.getLogin(), seesion);

		if (fDTO == null) {
			res.setSuccess(false);
			res.addMessage("LoginId / Email not found.");
			return res;
		} else {
			String code = "U-CP";
			EmailDTO dto = new EmailDTO();
			dto.addTo(fDTO.getEmail());
			HashMap<String, String> params = new HashMap<String, String>();
			params.put("code", "U-CP");
			dto.setMessageCode(code, params);
			emailSender.send(dto, null);
			res.setSuccess(true);
			res.addMessage("Hello " + fDTO.getFirstName() + " " + fDTO.getLastName()
					+ " ! Your password has been sent on your email.");

		}

		return res;
	}

	/**
	 * Uploads user profile picture of logged in user.
	 * 
	 * @param id
	 * @param file
	 * @return
	 */
	@PostMapping("/profilePic")
	public ORSResponse uploadPic(@RequestParam("file") MultipartFile file, HttpServletRequest req) {
		return uploadPic(userContext.getUserId(), file, req);
	}

	/**
	 * Downloads profile picture of logged in user
	 * 
	 * @param response
	 */
	@GetMapping("/profilePic")
	public @ResponseBody void downloadPic(HttpServletResponse response) {
		downloadPic(userContext.getUserId(), response);
	}

	/**
	 * Uploads profile picture of given user id
	 * 
	 * @param userId
	 * @param file
	 * @param req
	 * @return
	 */
	@PostMapping("/profilePic/{userId}")
	public ORSResponse uploadPic(@PathVariable Long userId, @RequestParam("file") MultipartFile file,
			HttpServletRequest req) {
		ORSResponse res = new ORSResponse();
		try {
			UserDTO userDTO = baseService.findById(userId, userContext);

			AttachmentDTO doc = new AttachmentDTO(file);

			doc.setDescription("Profile picture");

			doc.setPath(req.getServletPath());
			doc.setUserId(userId);

			if (userDTO.getImageId() != null && userDTO.getImageId() > 0) {
				doc.setId(userDTO.getImageId());
			}
			Long imageId = attachmentService.save(doc, userContext);
			// Update new image id
			if (userDTO.getImageId() == null || userDTO.getImageId() == 0) {
				userDTO.setImageId(imageId);
				baseService.update(userDTO, userContext);
			}

			res.setSuccess(true);
			res.addResult("imageId", imageId);
			res.addMessage("IMAGE  Add=User note contains ImageId  : AND : User me set(ImageID) .... OR|"
					+ "IMAGE  Updated=User contains ImageId . " + "imageID=" + imageId);

		} catch (Exception e) {
			res.setSuccess(false);
			res.addMessage("image UploadPic Exception : " + e.getMessage());
		}
		return res;
	}

	/**
	 * Downloads profile picture of given user id
	 * 
	 * @param userId
	 * @param response
	 */
	@GetMapping("/profilePic/{userId}")
	public @ResponseBody void downloadPic(@PathVariable Long userId, HttpServletResponse response) {

		UserDTO userDTO = baseService.findById(userId, userContext);
		try {
			if (userDTO.getImageId() != null && userDTO.getImageId() > 0) {
				AttachmentDTO attachmentDTO = attachmentService.findById(userDTO.getImageId(), userContext);

				if (attachmentDTO != null) {
					response.setContentType(attachmentDTO.getType());
					OutputStream out = response.getOutputStream();
					out.write(attachmentDTO.getDoc());
					out.close();
				} else {
					response.getWriter().write("ERROR: File not found");
				}

			} else {
				response.getWriter().write("ERROR:User Note Contean Image Id..!!");
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Uploads a document for a user
	 * 
	 * @param id
	 * @param file
	 * @return
	 */
	@PostMapping("/doc/{userId}")
	public ORSResponse upload(@PathVariable Long userId, @RequestParam(required = false) String description,
			@RequestParam("file") MultipartFile file, HttpServletRequest req) {

		AttachmentDTO doc = new AttachmentDTO(file);
		doc.setDescription(description);
		doc.setPath(req.getServletPath());
		doc.setUserId(userId);

		Long pk = attachmentService.save(doc, userContext);

		ORSResponse res = new ORSResponse();
		res.setSuccess(true);
		res.addResult("docId", pk);

		return res;
	}

	/**
	 * Downloads user document
	 * 
	 * @param id
	 * @param response
	 */
	@GetMapping("/doc/{id}")
	public @ResponseBody void download(@PathVariable Long id, HttpServletResponse response) {

		AttachmentDTO attachmentDTO = attachmentService.findById(id, userContext);
		try {
			if (attachmentDTO != null) {
				response.setContentType(attachmentDTO.getType());
				OutputStream out = response.getOutputStream();
				out.write(attachmentDTO.getDoc());
				out.close();
			} else {
				response.getWriter().write("ERROR: File not found");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Forgot Password
	 * 
	 * @param form
	 * @param bindingResult
	 * @return
	 */
	@GetMapping("forgotPassword/{loginId}")
	public ORSResponse myProfile(@PathVariable String loginId, HttpServletResponse response, HttpSession session) {
		ORSResponse res = new ORSResponse();
		UserDTO userDto = baseService.forgotPassword(loginId, session);

		try {
			if (userDto != null) {
				res.addData(userDto);
				res.setSuccess(true);
			} else {
				System.out.println("forgot password userCtl.............");
				res.setSuccess(false);
				res.addMessage("Login id is not exist");
			}
		} catch (Exception e) {
			res.addMessage(e.getMessage());
		}
		return res;
	}

}
