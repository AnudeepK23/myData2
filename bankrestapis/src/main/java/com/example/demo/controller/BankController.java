package com.example.demo.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Users;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.DecryptService;
import com.example.demo.service.EncryptService;
import com.example.demo.service.OtpService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/bankapi")
@CrossOrigin(origins = "http://localhost:4200")
public class BankController {

	@Autowired
	private UserService userservice;
	
	@Autowired
	private OtpService otpservice;
	
	@Autowired
	private UserRepo userrepo;
	
	@Autowired
	private EncryptService encryptservice;
	

//	register new user RESTAPI
	@PostMapping("/register")
	public ResponseEntity<Users> registerUser(@RequestBody Users users){
		String psswd = encryptservice.caesarCipherEncrypt(users.getPassword());
		users.setPassword(psswd);
		return new ResponseEntity<Users>(userservice.registerUser(users), HttpStatus.CREATED);
	}
	
	
	@GetMapping("/getOtp")
	public int Otpserve() {
		return (int) otpservice.otpGenerate();
	}


	@PostMapping("/login")
	public String loginUser(@RequestBody Users users, HttpSession session){
		System.out.println("******************************************************************");
		System.out.println(users.getFirstName());
		System.out.println(users.getPassword());
		
		String username = users.getFirstName();
		String password = users.getPassword();
			String psswd  = encryptservice.caesarCipherEncrypt(password);
		if(userrepo.findByfirstNameAndPassword(username, psswd) != null) {
			session.setAttribute("Username", users.getFirstName());
			System.out.println("Login Success");
			return users.getFirstName();
		}
		else {
			System.out.println("Not found");
			return "password or name is incorrect";
		}
	}
}
