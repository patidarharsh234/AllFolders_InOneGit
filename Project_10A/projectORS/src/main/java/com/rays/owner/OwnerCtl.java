package com.rays.owner;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.vehicle.VehicleDTO;

@RestController
@RequestMapping(value = "/owner")
public class OwnerCtl extends BaseCtl<OwnerForm, OwnerDTO, OwnerServiceInt>{
	
	
	
	
	@Autowired
	com.rays.vehicle.VehicleServiceInt vehicleServiceInt;
	
	

	@GetMapping("/preload")

	public ORSResponse preload() {

	ORSResponse res = new ORSResponse(true);
		VehicleDTO dto=new VehicleDTO();

		List<DropdownList> vehicleList = vehicleServiceInt.search(dto, userContext);
		res.addResult("vehicleList", vehicleList);
		

		return res;
	}

}
