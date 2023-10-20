package com.nivak.mywebsite.mywebsite;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository("mongoProductRepository")
public interface MyWebsiteRepository extends MongoRepository<MyWebsite, ObjectId>{
    Optional <MyWebsite> findMyWebsiteByProductid(String productid);
}                
