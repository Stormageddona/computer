package com.team.computer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ComputerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComputerApplication.class, args);
	}

}
