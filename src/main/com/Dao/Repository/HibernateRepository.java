package Dao.Repository;

import Dao.ApiBaseDate.ApiBaseDate;
import Dao.Entyti.Reports;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Repository
public class HibernateRepository implements ApiBaseDate<Reports> {  // описание методов в реализуемом интерфейсе
    @Autowired
    SessionFactory sessionFactory;

    public List<Reports> getReports(Date startDate, Date endDate) {
        List<Reports> reportsList;
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        try {

            System.out.println("date:"+startDate);
            Query query = session.createQuery("from Reports where startdate >= :startDateParam and enddate<=:endDateParam").
                    setDate("startDateParam",startDate).setDate("endDateParam",endDate);

            reportsList = (ArrayList<Reports>) query.list();
            return reportsList;

        }finally {
            session.getTransaction().commit();
            session.close();

        }
    }

    public List<Reports> getReportsPerform(Date startDate, Date endDate, int performParametr) {
        List<Reports> reportsList;
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        try {

            System.out.println("date:"+startDate);
            Query query = session.createQuery("from Reports where startdate >= :startDateParam and enddate<=:endDateParam and id=:performParametr").
                    setDate("startDateParam",startDate).setDate("endDateParam",endDate).setInteger("performParametr",performParametr);

            reportsList = (ArrayList<Reports>) query.list();
            return reportsList;

        }finally {
            session.getTransaction().commit();
            session.close();

        }

    }

    public List<Reports> getPerform() {
        List<Reports> reportsList;
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        try {

            Query query = session.createQuery("from Reports");

            reportsList = (ArrayList<Reports>) query.list();
            return reportsList;

        }finally {
            session.getTransaction().commit();
            session.close();

        }

    }
}
