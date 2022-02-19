package com.example.healthandfitnessappapis.models;

public class userCalculations {
    private String gender;
    private Double weight;
    private Double height;
    private Double BMI;


    public userCalculations(String gender, Double weight, Double height, Double BMI){
        super();
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.BMI = BMI;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getBMI() {
        return BMI;
    }

    public void setBMI(Double BMI) {
        this.BMI = BMI;
    }


}
