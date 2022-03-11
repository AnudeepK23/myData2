 package com.example.payment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PaymentSerivceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaymentSerivceApplication.class, args);
	}

	
	@GetMapping("/paynow")
	public String doPayment()
	{
		return "Payment service is called";
	}
}
