package interface_objects;

import java.util.ArrayList;
import java.util.List;

import simulation.IntentionalElementType;

public class OutputElement {

	private String id;
	private List<String> status = new ArrayList<>();
	public IntentionalElementType  type;
	
	public String getId() {
		return id;
	}

	public void setId(String string) {
		this.id = string;
	}

	public List<String> getStatus() {
		return status;
	}
	
	public IntentionalElementType getType() {
		return type;
	}

	public void setStatus(List<String> valueList) {
		this.status = valueList;
	}
	
	public void setType(IntentionalElementType type) {
		this.type = type;
	}

}
