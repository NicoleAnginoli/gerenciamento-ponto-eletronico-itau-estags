package gerenciamentopontoeletronico.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import gerenciamentopontoeletronico.model.BatidaPonto;

@Repository
public interface BatidaPontoRepository extends JpaRepository <BatidaPonto, Integer>{
	List<BatidaPonto> findByIdfunc (int idfunc);
	
	@Query(value="SELECT tipobatida FROM batidaponto WHERE id = (SELECT MAX(id) FROM batidaPonto WHERE idfunc = ?1)", nativeQuery = true)
	String checkRegistryType(int idfunc);
}
