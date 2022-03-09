package com.example.demo.service;

import java.util.Base64;

import org.springframework.stereotype.Service;

@Service
public class DecryptService {
	
	
	public String caesarCipherDecrypte(String psswd) {
		   StringBuilder tmp = new StringBuilder();
		   final int OFFSET = 4;
		   for (int i = 0; i < psswd.length(); i++) {
		      tmp.append((char)(psswd.charAt(i) - OFFSET));
		   }
		   String reversed = new StringBuffer(tmp.toString()).reverse().toString();
		   return new String(Base64.getDecoder().decode(reversed));
		}
}
