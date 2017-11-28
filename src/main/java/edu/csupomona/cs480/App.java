package edu.csupomona.cs480;

import edu.csupomona.cs480.data.provider.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableAutoConfiguration
@EnableJpaRepositories(basePackages = "edu.csupomona.cs480.Repo")
@ComponentScan
@SpringBootApplication
public class App {

    @Bean 
    public AreaManager areaManager(){
        AreaManager area =new BricAreaManager();
        return area;
    }
    public static void main(String[] args) throws Exception {
        // Run Spring Boot
        SpringApplication.run(App.class, args);
    }
}
