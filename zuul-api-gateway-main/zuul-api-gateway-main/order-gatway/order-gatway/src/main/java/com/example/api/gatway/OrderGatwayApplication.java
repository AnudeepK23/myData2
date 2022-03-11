package com.example.api.gatway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class OrderGatwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderGatwayApplication.class, args);
	}

}
