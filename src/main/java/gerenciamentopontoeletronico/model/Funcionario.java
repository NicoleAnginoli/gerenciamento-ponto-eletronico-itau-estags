package gerenciamentopontoeletronico.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Funcionario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@NotNull
	private String nome;
	private int cpf;
	private String email;

	@Basic(optional = false)
	@Column(name = "datacadastro", insertable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date datacadastro;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public int getCpf() {
		return cpf;
	}
	
	public void setCpf(int cpf) {
		this.cpf = cpf;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public Date getdatacadastro() {
		return datacadastro;
	}

	public void setdatacadastro(Date datacadastro) {
		this.datacadastro = datacadastro;
	}
	
}
