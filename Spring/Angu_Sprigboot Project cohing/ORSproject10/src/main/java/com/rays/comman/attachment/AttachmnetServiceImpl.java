package com.rays.comman.attachment;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;


@Service
@Transactional
public class AttachmnetServiceImpl extends BaseServiceImpl<AttachmentDTO, AttachmentDAOInt> implements AttachmentServiceInt {

}
