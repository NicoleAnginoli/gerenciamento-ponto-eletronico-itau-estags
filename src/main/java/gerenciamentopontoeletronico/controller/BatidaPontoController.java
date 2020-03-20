package gerenciamentopontoeletronico.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import gerenciamentopontoeletronico.model.BatidaPonto;
import gerenciamentopontoeletronico.model.Funcionario;
import gerenciamentopontoeletronico.repository.BatidaPontoRepository;

@RestController
@RequestMapping(value="/api/ponto")
public class BatidaPontoController {
	@Autowired
	BatidaPontoRepository batidaPontoRepository;
	
	@GetMapping()
	public List<BatidaPonto> getAllRegistries(){
		return batidaPontoRepository.findAll();
	}
	
	@PostMapping("/inserir")
	public BatidaPonto registryEmployeeTime(@RequestBody BatidaPonto batidaPonto) {
		return batidaPontoRepository.save(batidaPonto);
	}
}
