using docentliksitesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace docentliksitesi.Controllers
{

    public class HomeController : Controller
    {
        docentlikEntities db = new docentlikEntities();
        // GET: Home
        public ActionResult Index()
        {
            var model = db.Haberler.ToList();
            return View(model);
        }
        public ActionResult Alanlar()
        {

            var model = db.Alanlar.ToList();
            return View(model);


        }
        public ActionResult Bizeulas()
        {
            return View();
        }
        public ActionResult Hakkimizda()
        {
            return View();
        }


        public ActionResult Konular(int id = 1)
        {

            var model = db.Konular.Where(t => t.alanid == id).ToList();

            // SELECT * FROM Konular INNER JOIN İcerikler ON Konular.id=İcerik.konuid WHERE Konular.alanid = id;


            return View(model);
        }
        public ActionResult Haberler()
        {
            var model = db.Haberler.ToList();
            return View(model);
        }

    }
}