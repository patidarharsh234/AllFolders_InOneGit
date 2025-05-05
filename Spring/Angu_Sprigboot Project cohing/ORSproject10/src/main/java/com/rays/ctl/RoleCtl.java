package com.rays.ctl;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rays.common.BaseCtl;
import com.rays.dto.RoleDTO;
import com.rays.form.RoleForm;
import com.rays.service.RoleServiceInt;

@Controller
@RequestMapping(value = "role")
public class RoleCtl extends BaseCtl<RoleForm, RoleDTO, RoleServiceInt> {

}
