package com.nivak.mywebsite.mywebsite;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Document(collection = "mywebsite")
@NoArgsConstructor
@AllArgsConstructor 
public class MyWebsite {
    @Id
    private ObjectId id;
    private String productid;
    private String brand;
    private String type;
    private String name;
    private int price;
    private List<String> imageurl;
    private String description;
    private List<String> specs;
}
