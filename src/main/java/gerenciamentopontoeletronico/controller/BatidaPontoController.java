package gerenciamentopontoeletronico.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import gerenciamentopontoeletronico.model.BatidaPonto;
import gerenciamentopontoeletronico.repository.BatidaPontoRepository;

@RestController
public class BatidaPontoController {
	@Autowired
	BatidaPontoRepository batidaPontoRepository;
	
	@GetMapping("/api/ponto")
	public List<BatidaPonto> getAllRegistries(){
		return batidaPontoRepository.findAll();
	}
	
	@PostMapping("/funcionarios/inserir")
	public BatidaPonto insertEmployee(@RequestBody BatidaPonto batidaPonto) {
		return batidaPontoRepository.save(batidaPonto);
	}
}
