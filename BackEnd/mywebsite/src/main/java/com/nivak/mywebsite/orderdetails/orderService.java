package com.nivak.mywebsite.orderdetails;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class orderService {

    private orderRepository orderRepository;

    @Autowired
    public void MyMongoService(@Qualifier("mongoOrderRepository") orderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<orderDetails> singleOrders(String userid){
        return orderRepository.findByUserid(userid);
    }

    public void saveOrders(List<orderDetails> data){
        orderRepository.saveAll(data);
    }
    
}
 