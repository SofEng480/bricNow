package edu.csupomona.cs480.controller;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.csupomona.cs480.Repo.AreaRepository;
import edu.csupomona.cs480.data.Area;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import edu.csupomona.cs480.App;


/**
 * This is the controller used by Spring framework.
 * <p>
 * The basic function of this controller is to map
 * each HTTP API Path to the correspondent method.
 *
 */

@RestController
public class WebController {

    @Autowired
    private AreaRepository areaRepository;
//	@RequestMapping(value = "/recent" ,method = RequestMethod.GET)
    @Scheduled(fixedRate= 30000)
    public void getRecent() throws IOException {
    	Map<String,List<Area>> map = new HashMap<>();
        Random ran = new Random();
        ObjectMapper JSON = new ObjectMapper();
        map.put("areaPopulation",areaRepository.getMostRecent());
        File file = new File("src/main/resources/static/assets/data/bricNowData.json");
        FileWriter writer = new FileWriter(file);
        JSON.writeValue(file,map);
        writer.close();
//        return map;
    }
    @RequestMapping(value = "/areas/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Area getSum(@PathVariable("id") int id){
        return areaRepository.getArea(id);
    }
}