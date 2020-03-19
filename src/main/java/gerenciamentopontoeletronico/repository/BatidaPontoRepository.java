package gerenciamentopontoeletronico.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenciamentopontoeletronico.model.BatidaPonto;

@Repository
public interface BatidaPontoRepository extends JpaRepository <BatidaPonto, Integer>{

}
