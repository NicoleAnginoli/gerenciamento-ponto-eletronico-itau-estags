package gerenciamentopontoeletronico.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Rule;
//import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import gerenciamentopontoeletronico.model.Funcionario;
import gerenciamentopontoeletronico.repository.FuncionarioRepository;

@RunWith(SpringRunner.class)
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@SpringBootTest
public class FuncionarioControllerTest {
	
	@Rule
    public ExpectedException thrown = ExpectedException.none();

	@MockBean
	FuncionarioRepository funcionarioRepository;
	
	@InjectMocks
	private FuncionarioController funcionarioController;
	
	private List<Funcionario> funcList;
	
	LocalDateTime time = LocalDateTime.of(2020, Month.MARCH, 26, 10, 31, 12, 761000000);
	
	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
		this.funcList = new ArrayList<>();
		this.funcList.add(new Funcionario(1, "nome1", "12345111111", "e@email.com", time));
		this.funcList.add(new Funcionario(2, "nome2", "12345111111", "e@email.com", time));
		this.funcList.add(new Funcionario(3, "nome3", "12345111111", "e@email.com", time));	
	}
	
	@Test
	void shouldReturnAllEmployees() throws Exception {
		
		Mockito.when(funcionarioRepository.findAll()).thenReturn(funcList);
		
		List<Funcionario> result = funcionarioController.getAllEmployees();
		assertEquals(3, result.size());
	}
	
	@Test
	void shouldReturnOneEmployeeById() {
		Funcionario func = new Funcionario(4, "nome", "11111111111", "e@email.com", time);
		Optional<Funcionario> funcO= Optional.of(func);
		Mockito.when(funcionarioRepository.findById(func.getId())).thenReturn(funcO);
		int id = 4;
		Optional<Funcionario> result = funcionarioController.getEmployeeById(id);
		assertTrue(result.isPresent());
		assertThat(func.getId(), is(result.get().getId()));
	}
	
	@Test
	void shouldInsertNewEmployee() {
		Funcionario func = new Funcionario("nome", "11111111111", "e@email.com");
		Mockito.when(funcionarioRepository.save(func)).thenReturn(func);
		ResponseEntity<Funcionario> result = funcionarioController.insertEmployee(func);
		assertEquals("nome", result.getBody().getNome());
	}
	
	@Test
	void shouldUpdateEmployee() {
		Funcionario func = new Funcionario(4, "nomeUpdated", "11111111111", "e@email.com", time);
		Optional<Funcionario> funcO= Optional.of(func);
		Mockito.when(funcionarioRepository.findById(func.getId())).thenReturn(funcO);
		Mockito.when(funcionarioRepository.save(func)).thenReturn(func);
		Optional<Funcionario> result = funcionarioController.updateEmployee(4, func);
		assertTrue(result.isPresent());
	}
}
