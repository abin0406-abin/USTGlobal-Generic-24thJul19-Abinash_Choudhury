package com.dev.practice;

public interface BikeMethod {
	public boolean addBike(String key, Bike b);
	public void getBike();
	public boolean removeBike(String key, Bike b);
	public void updateBike(String key, Bike b);
}
