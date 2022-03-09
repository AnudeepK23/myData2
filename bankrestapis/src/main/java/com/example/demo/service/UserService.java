package com.example.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UserRepo;
import com.example.demo.serviceInter.UserServiceInter;

@Component
@Service
public class UserService implements UserServiceInter {
	
@Autowired
private UserRepo userrepo;


//	public UserService(UserRepo userrepo) {
//		super();
//		this.userrepo = userrepo;
//	}

	
	@Override
	public Users registerUser(Users user) {
		return userrepo.save(user);
	}


}
