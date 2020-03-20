package gerenciamentopontoeletronico.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import gerenciamentopontoeletronico.model.BatidaPonto;
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
	public ResponseEntity<BatidaPonto> registryEmployeeTime(@RequestBody BatidaPonto batidaPonto) {
		boolean valid = isRegistryValid(batidaPonto.getidfunc(), batidaPonto.gettipobatida());
		if (valid) {
			BatidaPonto inserido = batidaPontoRepository.save(batidaPonto);
			return ResponseEntity.ok().body(inserido);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@GetMapping("/{idfunc}")
	public @ResponseBody List<BatidaPonto> getEmployeeRegistries(@PathVariable(value="idfunc") int idfunc){
		return batidaPontoRepository.findByIdfunc(idfunc);
	}
	
	@GetMapping("/teste")
	public boolean isRegistryValid(int idfunc, String tipo) {
		String ultimaentrada = batidaPontoRepository.checkRegistryType(idfunc);
		if (ultimaentrada.equals(tipo)) {
			return false;
		}
		return true;
	}
}
