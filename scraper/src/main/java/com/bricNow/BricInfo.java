/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Josh
 * 
 * Class which holds information about different areas in the Bric
 */
package com.bricNow;
public class BricInfo
{
	private String area;
	private int lastCount;
	private String lastUpdate;
	
	public void initInfo(String initArea, String initCount, String initDate)
	{
		area       = initArea;
		lastCount  = parseCount(initCount);
		lastUpdate = initDate;
	}
	
	public int parseCount(String count)
	{
		String temp = null;
		final int size = count.length();
		
		if((count.charAt(size -2)) == ' ')
		{
			temp = count.substring(size -1, size-1);
		}
		else
		{
			temp = count.substring(size -2, size -1);
		}
		
		int bricCount = Integer.parseInt(temp);
		
		return bricCount;
		
	}
	
	public String toString()
	{
		return ("Bric Area: " + area +
				"\nLast Count: " + lastCount +
				"\n" + lastUpdate);
	}
}