package com.nivak.mywebsite.orderdetails;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Document(collection = "ordereddetails")
@NoArgsConstructor
@AllArgsConstructor 
@Entity
public class orderDetails {
    @Id
    private ObjectId id;
    @Field("userid")
    private String userid;
    private String email;
    private String productname;
    private String color;
    private String variant;
    private String productprice;
    private String quantity;
    private String totalamount;
}
