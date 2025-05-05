package com.rays.ctl;

import java.io.OutputStream;
import java.net.http.HttpResponse;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rays.comman.attachment.AttachmentDTO;
import com.rays.comman.attachment.AttachmentServiceInt;
import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.RoleDTO;
import com.rays.dto.UserDTO;
import com.rays.form.UserForm;
import com.rays.service.RoleServiceInt;
import com.rays.service.UserServiceInt;

@RestController
@RequestMapping(value = "user")
public class UserCtl extends BaseCtl<UserForm, UserDTO, UserServiceInt> {

	@Autowired
	public UserServiceInt userservice;

	@Autowired
	public AttachmentServiceInt attachmentService;

	@Autowired
	public RoleServiceInt roleServiceInterf;

	@GetMapping("/preload")
	public ORSResponse preload() {
		ORSResponse res = new ORSResponse();
		List<RoleDTO> roleList = roleServiceInterf.search(null, 0, 0);
		res.addResult("roleList", roleList);
		return res;

	}

	@PostMapping("/profilePic/{userId}")
	public ORSResponse uploadPic(@PathVariable Long userId, @RequestParam("file") MultipartFile file) {
		ORSResponse res = new ORSResponse();

		UserDTO dto = baseService.findById(userId);
		// dto=me id he save me doge to update hogi.

		AttachmentDTO doc = new AttachmentDTO(file);
		doc.setDescription("profilePic");
		doc.setUserId(userId);

		// update in ImageId-User Pass Image id ho to-Image me usi Id pr ImageUpdate ho
		if (dto.getImageId() != null && dto.getImageId() > 0) {
			doc.setId(dto.getImageId());
		}

		long imageId = attachmentService.save(doc);

		// user Me ImageId Seat kra-first time User me image add ho Tab
		if (dto.getImageId() == null || dto.getImageId() == 0) {
			dto.setImageId(imageId);
			baseService.save(dto);
		}
		res.setSuccess(true);
		res.addResult("imageId", imageId);

		return res;
	}

	@GetMapping("/profile/{userId}")
	public @ResponseBody void downloadPic(@RequestParam Long userId, HttpServletResponse response) {

		UserDTO dto = baseService.findById(userId);

		AttachmentDTO attachment = null;
		attachment = attachmentService.findById(dto.getImageId());

		try {
			if (attachment != null) {
				response.setContentType(attachment.getType());
				OutputStream out = response.getOutputStream();
				out.write(attachment.getDoc());
				out.close();

			} else {
				response.getWriter().write("Error file note found...!!!!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
