package com.example.healthandfitnessappapis.controllers;
import com.example.healthandfitnessappapis.models.userCalculations;
import org.decimal4j.util.DoubleRounder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.round;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/calculate")
public class userCalculationsController {


    //this will end up having to handle JSON, for now just make the functionalities and test in postman.
    @RequestMapping(path = "/BMI")
public Double calculateBMI(@RequestParam (value = "weight") Double weight ,@RequestParam (value = "height") Double height ) throws Exception{
//Formula for BMI is:
    Double BMI = (weight/(height*height));

    return DoubleRounder.round(BMI, 2);
}

    public String calcTDEE(Double BMR, String activitylevel){

        int TDEE = 0;

        if (activitylevel.equals("sedentary")){
            TDEE = (int) (BMR*1.2);
        }
        else if (activitylevel.equals("light exercise")){
            TDEE = (int) (BMR*1.375);
        }
        else if (activitylevel.equals("moderate exercise")){
            TDEE = (int) (BMR*1.55);
        }
        else if (activitylevel.equals("heavy exercise")){
            TDEE =(int) (BMR*1.725);
        }
        else if (activitylevel.equals("athlete")){
            TDEE =(int) (BMR*1.9);
        }
        return "TDEE: " + TDEE;
    }

    @RequestMapping(path = "/TDEE")
    public List calculateTDEE(@RequestParam (value = "weight") Double weight ,
                              @RequestParam (value = "height") Double height,
                              @RequestParam (value = "age") int age,
                              @RequestParam (value = "gender") String gender,
                              @RequestParam (value = "activitylevel") String activitylevel) throws Exception{

        List<String> maintenanceCals = new ArrayList<String>();

        if(gender.equals("male")){
            Double heightincm = height*100;
            Double BMR = (10*weight) + (6.25*heightincm) - (5*age) + 5;
            String theTdee = calcTDEE(BMR,activitylevel);
            maintenanceCals.add(theTdee);
        }

        else if (gender.equals("female")){
            Double heightincm = height*100;
            Double BMR = (10*weight) + (6.25*heightincm) - (5*age) -161;
            String theTdee = calcTDEE(BMR,activitylevel);
            maintenanceCals.add(theTdee);
        }

        return maintenanceCals;
    }

}
