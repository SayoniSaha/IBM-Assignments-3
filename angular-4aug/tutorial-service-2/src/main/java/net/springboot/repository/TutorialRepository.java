package net.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.springboot.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long>{

}
