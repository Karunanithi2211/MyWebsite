package com.nivak.mywebsite.orderdetails;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository("mongoOrderRepository")
public interface orderRepository extends MongoRepository<orderDetails, ObjectId>{
    List<orderDetails> findByUserid(String userid);
}
