package gerenciamentopontoeletronico.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="batidaponto")
public class BatidaPonto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private int idfunc;
	
	@CreationTimestamp
	private LocalDateTime datahora;
	
	private String tipobatida;
	
	public BatidaPonto(int id, int idfunc, LocalDateTime datahora, String tipobatida) {
		this.id = id;
		this.idfunc = idfunc;
		this.datahora = datahora;
		this.tipobatida = tipobatida;
	}
	
	public BatidaPonto(int idfunc, String tipobatida) {
		this.idfunc = idfunc;
		this.tipobatida = tipobatida;
	}
	
	public BatidaPonto() { }

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public LocalDateTime getdatahora() {
		return datahora;
	}
	
	public void setdatahora(LocalDateTime datahora) {
		this.datahora = datahora;
	}
	

	public int getidfunc() {
		return idfunc;
	}

	public void setidfunc(int idfunc) {
		this.idfunc = idfunc;
	}

	public String gettipobatida() {
		return tipobatida;
	}
	
	public void settipobatida(String tipobatida) {
		this.tipobatida = tipobatida;
	}
}
