package com.controller;

import lombok.Data;

@Data
public class OrderResponse {
	
	String secretKey;
	String razorpayOrderId;
	String applicationFee;
	String secretId;
	String pgName;

}
