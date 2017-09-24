package Modal;


public class ReportParametr {

    private String startDate;
    private String endDate;
    private int performer;

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int getPerformer() {
        return performer;
    }

    public void setPerformer(int performer) {
        this.performer = performer;
    }

    @Override
    public String toString() {
        return "ReportParametr{" +
                "startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", performer='" + performer + '\'' +
                '}';
    }
}