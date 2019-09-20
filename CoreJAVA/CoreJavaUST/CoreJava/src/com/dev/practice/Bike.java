package com.dev.practice;

public class Bike {
	private String name;
	private int cost;
	private String brand;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	@Override
	public String toString() {
		return "Bike [name=" + name + ", cost=" + cost + ", brand=" + brand + "]";
	}
	

}
