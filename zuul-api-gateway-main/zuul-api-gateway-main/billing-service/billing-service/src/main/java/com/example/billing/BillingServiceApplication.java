package com.example.billing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BillingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillingServiceApplication.class, args);
	}

	@GetMapping("/billing")
	public String bill()
	{
		return "Billing service is called.....";
	}
	
	@GetMapping("/billing/status")
	public String billings()
	{
		return "Billing service is called with status//";
	}
}
