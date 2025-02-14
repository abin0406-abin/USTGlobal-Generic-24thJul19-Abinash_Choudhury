package com.dev.encapsulation;

public class Dog implements Comparable<Dog> {
	private int age;
	private String name;
	private String breed;
	private String color;
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public String getColor() {
		return color;
	}
	@Override
	public String toString() {
		return "Dog [age=" + age + ", name=" + name + ", breed=" + breed + ", color=" + color + "]";
	}
	public void setColor(String color) {
		this.color = color;
	}
	@Override
	public int compareTo(Dog d) {
		return (this.age - d.age);
	}
	
	
}
