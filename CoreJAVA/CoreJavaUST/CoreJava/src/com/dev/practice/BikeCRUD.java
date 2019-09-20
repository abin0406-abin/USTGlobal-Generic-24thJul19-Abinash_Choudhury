package com.dev.practice;

import java.util.HashMap;

public class BikeCRUD implements BikeMethod {
	HashMap<String, Bike> bhm = new HashMap<String, Bike>();
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean addBike(String key, Bike b) {
		if (b!=null) {
			bhm.put(key, b);
			return true;
		}
		return false;
	}

	@Override
	public void getBike() {
		System.out.println(bhm);		
	}

	@Override
	public boolean removeBike(String key, Bike b) {
		boolean r = bhm.remove(key, b);
		if (r) {
			return true;
		}
		return false;
	}

	@Override
	public void updateBike(String key , Bike b) {
		bhm.replace(key, b);		
	}

}
