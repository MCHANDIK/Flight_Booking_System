package com.controller;

import java.math.BigInteger;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class OrderRequest {
	
	String customerName;
	String email;
	String phoneNumber;
	BigInteger amount;

}
