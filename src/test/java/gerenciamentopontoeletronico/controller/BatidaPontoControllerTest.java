package gerenciamentopontoeletronico.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

import org.junit.Rule;
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
import org.springframework.test.context.junit4.SpringRunner;

import gerenciamentopontoeletronico.model.BatidaPonto;
import gerenciamentopontoeletronico.repository.BatidaPontoRepository;

@RunWith(SpringRunner.class)
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
@SpringBootTest
public class BatidaPontoControllerTest {

	@Rule
    public ExpectedException thrown = ExpectedException.none();

	@MockBean
	BatidaPontoRepository batidaPontoRepository;
	
	@InjectMocks
	private BatidaPontoController batidaPontoController;

	private List<BatidaPonto> pontosList;
	
	private List<BatidaPonto> employeePontosList;
	
	LocalDateTime time = LocalDateTime.of(2020, Month.MARCH, 26, 10, 31, 12, 761000000);
	
	@BeforeEach
	void setUp() {
//		BatidaPonto p1 = new BatidaPonto();
//		p1.setId(1);
//		p1.setidfunc(1);
//		p1.setdatahora(time);
//		p1.settipobatida("entrada");
//		
//		BatidaPonto p2 = new BatidaPonto();
//		p2.setId(2);
//		p2.setidfunc(1);
//		p2.setdatahora(time);
//		p2.settipobatida("saída");
//		
//		BatidaPonto p3 = new BatidaPonto();
//		p3.setId(3);
//		p3.setidfunc(2);
//		p3.setdatahora(time);
//		p3.settipobatida("entrada");
		
		MockitoAnnotations.initMocks(this);
		this.employeePontosList = new ArrayList<>();
		this.employeePontosList.add(new BatidaPonto(1, 1, time, "entrada"));
		this.employeePontosList.add(new BatidaPonto(2, 1, time, "saída"));
		this.pontosList = new ArrayList<>();
		this.pontosList.add(new BatidaPonto(3, 2, time, "entrada"));
		this.pontosList.add(new BatidaPonto(4, 3, time, "entrada"));
		this.pontosList.add(new BatidaPonto(5, 4, time, "entrada"));	
	}
	
	@Test
	void shouldReturnAllRegistries() throws Exception {
		
		Mockito.when(batidaPontoRepository.findAll()).thenReturn(pontosList);
		
		List<BatidaPonto> result = batidaPontoController.getAllRegistries();
		assertEquals(3, result.size());
	}
	
	@Test
	void shouldReturnOneEmployeeRegistry() {
		BatidaPonto p = employeePontosList.get(0);

		Mockito.when(batidaPontoRepository.findByIdfunc(p.getidfunc())).thenReturn(employeePontosList);
		int id = p.getId();
		List<BatidaPonto> result = batidaPontoController.getEmployeeRegistries(id);
		assertFalse(result.isEmpty());
		assertEquals(p.getId(),result.get(0).getId());
	}
	
	@Test
	void shouldInsertNewRegistry() {
		BatidaPonto p = new BatidaPonto();
		p.setidfunc(2);
		p.settipobatida("saída");
		
		Mockito.when(batidaPontoRepository.save(p)).thenReturn(p);
		BatidaPonto result = batidaPontoController.registryEmployeeTime(p);
		assertNotNull(result);
		assertEquals(p.getId(), result.getId());
	}

}
