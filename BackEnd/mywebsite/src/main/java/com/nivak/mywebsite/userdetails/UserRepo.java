package com.nivak.mywebsite.userdetails;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{
    User findByEmail(String email);

    void findByPassword(String password);

    Optional<User> findMyWebsiteByid(Long id);
}
