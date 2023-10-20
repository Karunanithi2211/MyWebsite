package com.nivak.mywebsite.userdetails;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepo userRepo;

    @Override
    public User savUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User findbyemail(String email) {
        User user = userRepo.findByEmail(email);
        if (user == null) {
            return null;
        }
        else{
            return user;
        }
        
    }

    @Override
    public Optional<User> UserDetail(Long id){
        return userRepo.findMyWebsiteByid(id);
    }
    
}
