BricNow
-------------
BricNow is a website that shows the current capacity of  the Cal Poly Pomona Gym
"the BRIC"

This project uses: 
1. Java Spring Boot
3. AWS EC2
4. Jenkins
2. Maven 


Running the Project Locally
----------------------------------------
1. Locate the App.java in src/main/java source folder and right-click on it->Run As->Java Application
2. Verify the running process in your web browser by the following URLs:

- http://localhost:8080/
- http://localhost:8080/cs480/ping
- http://localhost:8080/cs480/home


Features
----------------------------------------
-BricNow has two tabs for the user to choose from, Bric Now and Bric Later.  
-Bric Now has a gauge that shows the percentage of the BRIC's total capacity.  
-Underneath it are the individual counts of various areas in the BRIC along with
 the time they were last updated
 
-Bric Later has a tab for each day of the week. Clicking on a tab will display 
 a graph that plots the expected ocupancy of the BRIC over the course of the day.  
-These graphs were formed using averages of our data over the course of eight
 weeks so the plot points are rougher than anticipated. 

