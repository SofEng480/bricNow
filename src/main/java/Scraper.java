/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Josh
 * 
 * This class will scrape the Bric website, parse the HTML, and store all info 
 * a list of BricInfo objects
 */
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Scraper
{
	private static List<BricInfo> infoList = new ArrayList<BricInfo>();

	public static void main(String[] args) throws IOException
	{
		// connects to Bric Website
		Document doc = null;
		try
		{
			doc = Jsoup.connect("http://connect2concepts.com/connect2/?type=circle&key=79E7D1A1-A9F2-400C-AFEA-27BD152A15DA").get();
		}
		catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
                
                // Crowd info is only stored in HTML div[style=text-align:center;]
		Elements output = doc.select("div[style=text-align:center;]");
		
		Element div =doc.select("div").first();
		
		if (div!=null) 
		{
                    // Enter file name here
                    String fileName = "";
                    File file = new File(fileName);
                    file.getParentFile().mkdirs();
                    PrintWriter out = new PrintWriter(new FileWriter(file, true));
                    
                    // Names of all areas of Bric
		    String[] splittedParts = div.text().split("(?=Climbing Wall|Studio|Fitness Area|Court|3rd|Olympic|Bench|Powered|Last Count|Updated)");

		    String inName  = null;
		    String inCount = null;
		    String inDate  = null;
		    
		    for(int i = 1; i < splittedParts.length -1; i +=3)
		    {
                        // BricInfo Object
		    	BricInfo tempInfo = new BricInfo();
		    	inName  = splittedParts[i];
		    	inCount = splittedParts[i+1];
		    	inDate  = splittedParts[i+2];
		    	
                        // Instantiate new BricInfo object with data scraped from website
		    	tempInfo.initInfo(inName, inCount, inDate);
		    	
		    	infoList.add(tempInfo);
		    	String dateTemp = inDate.substring(9, inDate.length() -1);
		    	out.println(dateTemp);
		    	out.println(inName);
		    	out.println(inCount);
		    	out.println();
		    	out.println();
		    }

	    	out.close();
	    	System.out.print("DATA GATHERED");
		}
	}
}