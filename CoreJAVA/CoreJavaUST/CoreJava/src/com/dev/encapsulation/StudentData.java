package com.dev.encapsulation;

public class StudentData {

	public static void main(String[] args) {
		Student s = new Student();
		s.setRegdNo(1541014111);
		s.setName("Abinash");
		s.setEmail("achoudhury600@gmail.com");
		s.setPassword("abin1234");
		
		System.out.println("Registration number = "+s.getRegdNo());
		System.out.println("Name = "+s.getName());
		System.out.println("Email ID = "+s.getEmail());
		System.out.println("------------------------------------");
	}
	
}
