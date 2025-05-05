package com.rays.junit;


import org.junit.Test;

import junit.framework.TestCase;

public class TestCseFir extends TestCase {
	AccountDto dto = null;
	@Test
	public void test() throws Exception{
		

		
			dto = AccoutService.findByPk(3);
			assertTrue(dto != null);
		

		
		
			dto = AccoutService.findByPk(3);
			assertFalse(dto == null);
		

			dto = AccoutService.findByPk(3);
			assertNotNull(dto);
	
	}

}
