package com.dev.collections;

import java.util.ArrayList;
import java.util.TreeSet;

import com.dev.assignment.Employee;

public class C4 {

	public static void main(String[] args) {
//		TreeSet<Employee> emp = new TreeSet<Employee>();
		ArrayList<Employee> ar1 = new ArrayList<Employee>();
		
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
		
		Employee e2 = new Employee();
		
//		emp.add(e);
//		emp.add(e1);
		
		ar1.add(e);
		ar1.add(e1);
		ar1.add(e2);
		
//		System.out.println(emp);
		
		System.out.println(ar1);
		System.out.println("Size of array before  trimToSize(): "+ar1.size());
		
		ar1.trimToSize();
		System.out.println("Size of array after trimToSize(): "+ar1.size());
		
	}

}
