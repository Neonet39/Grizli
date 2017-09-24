package Dao.ApiBaseDate;

import java.util.Date;
import java.util.List;

public interface ApiBaseDate<T> {  // интерфейс для работы с БД
     List<T> getReports(Date startDate, Date endDate); // Возвращает отчеты по заданному диапазону дат
     List<T> getReportsPerform(Date startDate, Date endDate, int Perform); // Возвращает отчеты по заданному диапазону дат и значения поля Performer
     List<T> getPerform(); // верунить лист со значениями Performer
}
