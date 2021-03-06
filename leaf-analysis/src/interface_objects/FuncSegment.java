package interface_objects;

/**
 * Created by davidkwon on 2018-07-24.
 */
public class FuncSegment implements FuncWrapper {
    private String funcType;
    private String funcX;
    private String funcStart;
    private String funcStop;

    public String getFuncType() {
        return funcType;
    }

    public String getFuncX() {
        return funcX;
    }

    public String getFuncStart() {
        return funcStart;
    }

    public String getFuncStop() {
        return funcStop;
    }
}
