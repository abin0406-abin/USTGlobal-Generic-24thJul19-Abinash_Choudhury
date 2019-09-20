package com.dev.employeeDetail;

import java.util.HashMap;

public class EmployeeElement1 implements EmployeeData {
	HashMap<String, EmployeeDetail> hm = new HashMap<String, EmployeeDetail>();
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	@Override
	public boolean addEmployee(String key, EmployeeDetail e) {
		if(hm!=null) {
			hm.put(key,e);
			return true;
		}
		return false;	
	}
	
	@Override
	public void getEmployee() {
		System.out.println(hm);
	}
	
	@Override
	public boolean removeEmployee(String key, EmployeeDetail e) {
		boolean b1 = hm.remove(key, e);
		if (b1) {
			return true;
		}
		return false;
	}

	

}
