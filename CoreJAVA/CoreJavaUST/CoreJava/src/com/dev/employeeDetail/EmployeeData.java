package com.dev.employeeDetail;

public interface EmployeeData {
	public boolean addEmployee(String key ,EmployeeDetail emp);
	public void getEmployee();
	public boolean removeEmployee(String key,EmployeeDetail emp);
}
