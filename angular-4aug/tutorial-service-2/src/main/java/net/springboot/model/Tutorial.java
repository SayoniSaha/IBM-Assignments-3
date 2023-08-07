package net.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tutorial")
public class Tutorial {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long tutorial_id;
	
	@Column(name = "description")
	private String description;

	@Column(name = "is_active")
	private boolean isActive;
	
	
	public Tutorial() {
		
	}


	public Tutorial(long tutorial_id, String description, boolean isActive) {
		super();
		this.tutorial_id = tutorial_id;
		this.description = description;
		this.isActive = isActive;
	}


	public long getTutorial_id() {
		return tutorial_id;
	}


	public void setTutorial_id(long tutorial_id) {
		this.tutorial_id = tutorial_id;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public boolean getIsActive() {
		return isActive;
	}


	public void setIsActive(boolean isActive) {
		this.isActive = isActive;
	}
	
	
}
