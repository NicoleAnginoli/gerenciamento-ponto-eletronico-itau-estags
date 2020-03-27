package gerenciamentopontoeletronico.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Funcionario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@NotNull
	private String nome;
	
	@NotNull
	private String cpf;
	
	@NotNull
	private String email;

	@CreationTimestamp
	private LocalDateTime datacadastro;
	
	public Funcionario() { }
	
	public Funcionario(int id, @NotNull String nome, @NotNull String cpf, @NotNull String email, LocalDateTime datacadastro) {
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.datacadastro = datacadastro;
	}
	
	public Funcionario(String nome, String cpf, String email) {
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
	}

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
	
	public String getCpf() {
		return cpf;
	}
	
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDateTime getdatacadastro() {
		return datacadastro;
	}

	public void setdatacadastro(LocalDateTime datacadastro) {
		this.datacadastro = datacadastro;
	}
	
}
