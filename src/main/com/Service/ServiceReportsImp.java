package Service;

import Dao.ApiBaseDate.ApiBaseDate;
import Dao.Entyti.Reports;
import Modal.ReportParametr;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@org.springframework.stereotype.Service
public class ServiceReportsImp implements Service{ // описание методов в интерфейсей
    @Autowired
    ApiBaseDate apiBaseDate;

    public List<Reports> getReportsList(ReportParametr reportParametr) {
        Date dateStart;
        Date dateEnd;
        try {
             dateStart = new SimpleDateFormat("MMM dd,yyyy", Locale.ENGLISH).parse(reportParametr.getStartDate());
             dateEnd = new SimpleDateFormat("MMM dd,yyyy", Locale.ENGLISH).parse(reportParametr.getEndDate());

        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
        if(dateStart.getTime()<=dateEnd.getTime()){ // проверя на верность передаваемых дат
              if (reportParametr.getPerformer() == 0) { // провернка на параметр Performs
             return apiBaseDate.getReports(dateStart, dateEnd);

         } else

        return  apiBaseDate.getReportsPerform(dateStart,dateEnd,reportParametr.getPerformer());
        }else return null;

    }

    public List<Reports> getPerform() {
        return apiBaseDate.getPerform();
    }
}
