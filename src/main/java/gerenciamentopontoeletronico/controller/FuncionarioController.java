package gerenciamentopontoeletronico.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import gerenciamentopontoeletronico.model.Funcionario;
import gerenciamentopontoeletronico.repository.FuncionarioRepository;

@RestController
@RequestMapping("/api")
public class FuncionarioController {
	@Autowired
	FuncionarioRepository funcionarioRepository;
	
	@GetMapping("/funcionarios")
	public List<Funcionario> getAllEmployees(){
		return funcionarioRepository.findAll();
	}
	
	@GetMapping("/funcionarios/{id}")
	public @ResponseBody Optional<Funcionario> getEmployeeById(@PathVariable(value="id") int id){
		return funcionarioRepository.findById(id);
	}
}
