package gerenciamentopontoeletronico.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import gerenciamentopontoeletronico.model.Funcionario;
import gerenciamentopontoeletronico.repository.FuncionarioRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value="/api/funcionarios")
public class FuncionarioController {
	@Autowired
	FuncionarioRepository funcionarioRepository;
	
	@GetMapping()
	public List<Funcionario> getAllEmployees(){
		return funcionarioRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public @ResponseBody Optional<Funcionario> getEmployeeById(@PathVariable(value="id") int id){
		return funcionarioRepository.findById(id);
	}
	
	@PostMapping("/inserir")
	public ResponseEntity<Funcionario> insertEmployee(@Valid @RequestBody Funcionario funcionario) {
		Funcionario inserido = funcionarioRepository.save(funcionario);
		return ResponseEntity.ok().body(inserido);
	}
	
	@PutMapping("/update/{id}")
	public Optional<Funcionario> updateEmployee(@PathVariable(value="id") int id, @Valid @RequestBody Funcionario funcionario) {
		return funcionarioRepository.findById(id)
			.map(f -> {
				f.setCpf(funcionario.getCpf());
				f.setEmail(funcionario.getEmail());
				f.setNome(funcionario.getNome());
				return funcionarioRepository.save(f);
			});
				
	}
	
}
