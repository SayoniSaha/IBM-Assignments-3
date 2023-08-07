package net.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.springboot.model.Tutorial;
import net.springboot.repository.TutorialRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tutorials")
public class TutorialController {

	@Autowired
	private TutorialRepository tutorialRepository;
	
	@GetMapping("/list")
	public List<Tutorial> getAllTutorials(){
		return tutorialRepository.findAll();
	}		
	
	@PostMapping("/add")
	public Tutorial createTutorial(@RequestBody Tutorial tutorial) {
	    return tutorialRepository.save(tutorial);
	}	
	
}
