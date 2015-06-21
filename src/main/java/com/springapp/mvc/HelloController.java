package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("hello")
public class HelloController {

	@RequestMapping( method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		System.out.println("model = " + model);
		model.addAttribute("message", "Hello world!");
		return "hello";
	}	
//	@RequestMapping(value = "/rest/hello")
//	public String home() {
//		return "hello";
//	}
}