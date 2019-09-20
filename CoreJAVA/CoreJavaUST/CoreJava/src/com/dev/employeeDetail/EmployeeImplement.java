//package com.dev.employeeDetail;
//
//import java.util.HashSet;
//
//public class EmployeeImplement implements EmployeeData {
//	HashSet<EmployeeDetail> hs = new HashSet<EmployeeDetail>();
//	public static void main(String[] args) {
//
//	}
//
//	@Override
//	public boolean addEmployee(EmployeeDetail e) {
//		if (e!=null) {
//			hs.add(e);
//			return true;
//		}
//		return false;
//	}
//
//	@Override
//	public void getEmployee() {
//		System.out.println(hs);		
//	}
//
//	@Override
//	public boolean removeEmployee(EmployeeDetail e) {
//		boolean b = hs.remove(e);
//		if (b) {
//			return true;
//		}
//		return false;
//	}
//
//}
