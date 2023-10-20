package com.nivak.mywebsite.userdetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "usercredential")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    public User() {
    }



    private String firstname;
    private String lastname; 
    private int age;
    @Column(unique = true)
    private String email;
    private String password;


    
    public Long getId() {
        return id;
    }



    public void setId(Long id) {
        this.id = id;
    }



    public String getFirstname() {
        return firstname;
    }



    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }



    public String getLastname() {
        return lastname;
    }



    public void setLastname(String lastname) {
        this.lastname = lastname;
    }



    public int getAge() {
        return age;
    }



    public void setAge(int age) {
        this.age = age;
    }



    public String getEmail() {
        return email;
    }



    public void setEmail(String email) {
        this.email = email;
    }



    public String getPassword() {
        return password;
    }



    public void setPassword(String password) {
        this.password = password;
    }



    public User(String firstname, String lastname, int age, String email, String password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.password = password;
    }


}
