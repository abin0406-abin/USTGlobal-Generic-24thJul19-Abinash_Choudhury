package com.dev.employeeDetail;

public class Employees{

	public static void main(String[] args) {

		/*
		 * EmployeeElement1 emp = new EmployeeElement1();
		 * 
		 * EmployeeDetail e = new EmployeeDetail(); e.setName("Abinash Choudhury");
		 * e.setId(1); e.setEmail("achoudhury600@gmail.com"); e.setPassword("qwerty");
		 * 
		 * EmployeeDetail e1 = new EmployeeDetail();
		 * e1.setName("Nikhil Ranjan Moharana"); e1.setId(2);
		 * e1.setEmail("nikhilranjan@gmail.com"); e1.setPassword("shahrukh");
		 * 
		 * boolean b = emp.addEmployee(e); boolean b1 = emp.addEmployee(e1);
		 * System.out.println(b+" "+b1);
		 * 
		 * emp.getEmployee();
		 * 
		 * boolean r = emp.removeEmployee(e1); System.out.println(r); emp.getEmployee();
		 */
EmployeeElement1 eci = new EmployeeElement1();
		
		EmployeeDetail e1 = new EmployeeDetail();
		e1.setName("Balakrishna");
		e1.setId(201);
		e1.setEmail("bala@gmail.com");
//		e1.setPassword(4524);
		
		EmployeeDetail e2 = new EmployeeDetail();
		e2.setName("Abhinash");
		e2.setId(202);
		e2.setEmail("abhin@gmail.com");
//		e2.setPassword(4751);
		
		boolean b = eci.addEmployee("1", e1);
		boolean b1 = eci.addEmployee("2", e2);
		System.out.println(b+" "+b1 );
		eci.getEmployee();
		
		boolean r = eci.removeEmployee("1", e1);
		System.out.println(r);
		eci.getEmployee();

	}

}
