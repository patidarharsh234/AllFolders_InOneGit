package com.rays.comman.attachment;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;


@RestController
@RequestMapping(value = "attachment")
public class AttachmnetCtl extends BaseCtl<AttachmentForm, AttachmentDTO, AttachmentServiceInt>{

}
