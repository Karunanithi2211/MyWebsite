package com.nivak.mywebsite.userdetails;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Controller
@NoArgsConstructor
@AllArgsConstructor
public class MyController {
    @Autowired
    UserService userService;
    @Autowired
    UserRepo userRepo;

    @RequestMapping("/")
    public String Login(Model model){
        model.addAttribute("backgroundImageUrl","/images/Login.jpg");
        return "Login";
    }

    @GetMapping("/register")
    public String Register(Model model){
        model.addAttribute("backgroundImageUrl","/images/Register.jpg");
        return "Register";
    }

    @PostMapping("/registerd")
    public String Registerd(@RequestParam("firstname") String firstname,
                            @RequestParam("lastname") String lastname,
                            @RequestParam("age") int age,
                            @RequestParam("email") String email,
                            @RequestParam("password") String password){
        User users = userService.findbyemail(email);
        if (users != null) {
            return "redirect:/register?eae";
        }
        else{
            User user = new User(firstname, lastname, age, email, password);
            userService.savUser(user);
            return "redirect:/?reged";
        }
        
    }

    @PostMapping("/logined")
    public String Logined(@RequestParam("emailid") String email,@RequestParam("pswd") String password,HttpServletResponse response){
        User user = userRepo.findByEmail(email);
        if(user != null){
            String passwordlog = user.getPassword();
            if(passwordlog.equals(password)){
                Cookie cookie = new Cookie("userId", user.getId().toString());
                response.addCookie(cookie);
                return "redirect:http://localhost:3000";
            }
            else{
                return "redirect:/?pic";
            }
        }
        else{
            return "redirect:/?unf";
        }      
    }

    @RequestMapping("/forget")
    public String forgetpass(){
        return "Forget";
    }

    @PostMapping("/forgeted")
    public String forgeted(@RequestParam("emailid") String email,Model model){
        User user = userRepo.findByEmail(email);
        if (user != null) {
            String password=user.getPassword();
            model.addAttribute("message", password);
            return "Forget";

        } else {
            return "redirect:/?unf";
        }
        
    }
}
