package com.nivak.mywebsite.userdetails;

 
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User savUser(User user);
    User findbyemail(String email);

    Optional<User> UserDetail(Long id);
}
