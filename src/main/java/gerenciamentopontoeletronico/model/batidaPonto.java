package gerenciamentopontoeletronico.model;

import java.util.Calendar;

public class batidaPonto {
	private enum tipoBatida {
		ENTRADA, SAIDA;
	}
	
	private int id;
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
