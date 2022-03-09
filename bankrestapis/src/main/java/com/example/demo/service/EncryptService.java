package com.example.demo.service;

import java.util.Base64;

import org.springframework.stereotype.Service;



@Service
public class EncryptService {
	
	int key = 5;
	
	public String caesarCipherEncrypt(String psswd) {
		   String b64encoded = Base64.getEncoder().encodeToString(psswd.getBytes());
		   // Reverse the string
		   String reverse = new StringBuffer(b64encoded).reverse().toString();
		   StringBuilder tmp = new StringBuilder();
		   final int OFFSET = 4;
		   for (int i = 0; i < reverse.length(); i++) {
		      tmp.append((char)(reverse.charAt(i) + OFFSET));
		   }
		   return tmp.toString();
		}
}