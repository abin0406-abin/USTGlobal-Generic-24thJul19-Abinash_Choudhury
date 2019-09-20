package com.dev.collections;

import java.util.HashSet;

import com.dev.assignment.Employee;

public class EmployeeData {

	public static void main(String[] args) {
		HashSet<Employee> emp = new HashSet<Employee>();
		
		Employee e = new Employee();
		e.setName("Abinash Choudhury");
		e.setId(1);
		e.setEmail("achoudhury600@gmail.com");
		e.setPassword("qwerty");
		
		Employee e1 = new Employee();
		e1.setName("Nikhil Ranjan Moharana");
		e1.setId(2);
		e1.setEmail("nikhilranjan@gmail.com");
		e1.setPassword("sahrukh");
		
		boolean data = emp.add(e);
		boolean data1 = emp.add(e1);
		System.out.println("Output of add(): "+data+" "+data1);
		System.out.println(emp);
		System.out.println();
		
		e.setEmail("abinashchoudhury0@gmail.com");
		e1.setEmail("nikee123@gmail.com");
		
		System.out.println("After updating the value of email: "+emp);
		System.out.println();
		
		boolean data2 = emp.remove(e1);
		System.out.println("Output of remove(): "+data2);
		System.out.println("After removing one element using remove() size is : "+emp.size());
		System.out.println(emp);
		System.out.println();
		
		emp.clear();
		System.out.println("After clearing the data using clear(): "+emp.size());
		
		
	}

}
