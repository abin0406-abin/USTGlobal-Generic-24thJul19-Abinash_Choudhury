package com.dev.assesment;

public class Contact {
	private String name;
	private long number;
	private String message;
	private String group;
	
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Contact [name=" + name + ", number=" + number + ", message=" + message + ", group=" + group + "]";
	}
	public long getnumber() {
		return number;
	}
	public void setnumber(long number) {
		this.number = number;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
