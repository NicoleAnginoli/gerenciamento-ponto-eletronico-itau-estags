package gerenciamentopontoeletronico.model;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BatidaPonto {
	private enum tipoBatida {
		ENTRADA, SAIDA;
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="idFunc")
	private Funcionario funcionario;
	private Calendar dataHora;
	private tipoBatida tipo;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
	
	public Calendar getDataHora() {
		return dataHora;
	}
	
	public void setDataHora(Calendar dataHora) {
		this.dataHora = dataHora;
	}
	
	public tipoBatida getTipo() {
		return tipo;
	}
	
	public void setTipo(tipoBatida tipo) {
		this.tipo = tipo;
	}

}
