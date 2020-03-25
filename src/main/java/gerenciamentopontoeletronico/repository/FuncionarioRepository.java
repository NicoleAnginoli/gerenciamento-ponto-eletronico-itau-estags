package gerenciamentopontoeletronico.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenciamentopontoeletronico.model.Funcionario;

@Repository
public interface FuncionarioRepository extends JpaRepository <Funcionario, Integer>{
//	List<Funcionario> findById(int id);
}
