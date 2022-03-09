package com.example.demo.repository;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Users;

@Configuration
@Repository
public interface UserRepo extends  JpaRepository<Users, Long> {
	public Users findByfirstNameAndPassword(String username, String password);
}


