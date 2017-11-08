package com.bricNow;

public class TimeConvert {
    String date;
    String time;
    public TimeConvert(String str){
        String[] array = str.split(" ");
        this.date = array[0];
        this.time = array[1] + " " + array[2];
    }
    @Override
    public String toString(){
        return this.date + "," + this.time;
    }
}
