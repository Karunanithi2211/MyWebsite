package com.nivak.mywebsite.mywebsite;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nivak.mywebsite.orderdetails.orderDetails;
import com.nivak.mywebsite.orderdetails.orderService;
import com.nivak.mywebsite.userdetails.User;
import com.nivak.mywebsite.userdetails.UserService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/website")
public class MyWebsiteController {
    @Autowired
    private MyWebsiteService myWebsiteService;

    @Autowired
    private UserService userService;

    @Autowired
    private orderService orderService;

    @GetMapping()
    public ResponseEntity<List<MyWebsite>> getAllDetails(){
        return new ResponseEntity<List<MyWebsite>>(myWebsiteService.allDetails(),HttpStatus.OK);
    }
    @GetMapping("/{productid}")
    public ResponseEntity<Optional<MyWebsite>> getSingleMovie(@PathVariable String productid){
        return new ResponseEntity<Optional<MyWebsite>>(myWebsiteService.singleDetail(productid), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Optional<User>> getAllUser(@PathVariable  Long id){
        return new ResponseEntity<Optional<User>>(userService.UserDetail(id),HttpStatus.OK);
    }

    @GetMapping("/orders/{userid}")
    public ResponseEntity<List<orderDetails>> getSingleOrders(@PathVariable String userid){
        return new ResponseEntity<List<orderDetails>>(orderService.singleOrders(userid), HttpStatus.OK);
    }

    @PostMapping("/buyed")
    public ResponseEntity<String> savedatas(@RequestBody List<orderDetails> data){
        orderService.saveOrders(data);
        return ResponseEntity.ok("Data saved successfully");
    }
    
}
