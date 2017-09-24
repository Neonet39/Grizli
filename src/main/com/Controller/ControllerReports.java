package Controller;

import Dao.Entyti.Reports;
import Modal.ReportParametr;
import Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;


@Controller
public class ControllerReports {

    @Autowired
    Service service;

    @RequestMapping(value = "reports",method = RequestMethod.POST)
    public ModelAndView getListReports(@ModelAttribute ReportParametr reportParametr) {
        ModelAndView modelAndView = new ModelAndView();
        ArrayList<Reports> reportsArrayList = (ArrayList<Reports>) service.getReportsList(reportParametr);
        if(reportsArrayList.size()>0){
            modelAndView.addObject("reportsArrayList",reportsArrayList);
        }else {

            modelAndView.addObject("messageError","The database does not have the necessary data");
        }
        modelAndView.setViewName("reports");
        return modelAndView;
    }

    @RequestMapping(value = "reports",method = RequestMethod.GET)
    public ModelAndView getSettingReort() {

        ReportParametr reportParametr = new ReportParametr();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("reports");
        ArrayList<Reports> reportsArrayList = (ArrayList<Reports>) service.getPerform();

        if(reportsArrayList.size()>0) {
            modelAndView.addObject("perform",reportsArrayList);
            modelAndView.addObject("reportParametr", reportParametr);
        } else modelAndView.addObject("messageError","The database does not have the necessary data");

        return modelAndView;
    }
}
