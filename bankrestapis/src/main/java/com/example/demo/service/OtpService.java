package com.example.demo.service;

import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OtpService {
	
	private Random rand = new Random();
	
	public int otpGenerate() {
		int secretKey = rand.nextInt( ( 9999 - 100 )  + 10);
		System.out.println(secretKey);
		return secretKey;
	}
}
