package Service;


import Dao.Entyti.Reports;
import Modal.ReportParametr;

import java.util.List;

public interface Service {
    List<Reports> getReportsList(ReportParametr reportParametr); // получить отчет в зависемости от переданных значений
    List<Reports> getPerform(); // получить списки из поля бд Performer
}
