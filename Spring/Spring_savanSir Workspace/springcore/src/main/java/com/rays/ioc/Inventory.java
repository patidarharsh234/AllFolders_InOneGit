package com.rays.ioc;

import org.springframework.beans.factory.annotation.Value;

public class Inventory {
	@Value(value="100")
	int stocke=0;

	public int getStocke() {
		return stocke;
	}

	public void setStocke(int stocke) {
		this.stocke = stocke;
	}

	
	public int sold(int item) {
		
		stocke=stocke-item;
		return stocke;
	}

	
	
 
}
