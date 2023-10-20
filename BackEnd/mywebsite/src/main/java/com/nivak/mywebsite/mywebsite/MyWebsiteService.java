package com.nivak.mywebsite.mywebsite;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class MyWebsiteService {
    
    private MyWebsiteRepository myWebsiteRepository;

    @Autowired
    public void MyMongoService( @Qualifier("mongoProductRepository") MyWebsiteRepository myWebsiteRepository) {
        this.myWebsiteRepository = myWebsiteRepository;
    }

    public List<MyWebsite> allDetails(){
        return myWebsiteRepository.findAll();
    }

    public Optional<MyWebsite> singleDetail(String productid){
        return myWebsiteRepository.findMyWebsiteByProductid(productid);
    }
}
