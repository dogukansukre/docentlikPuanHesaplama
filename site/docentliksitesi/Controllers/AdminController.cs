using docentliksitesi.Models;
using docentliksitesi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace docentliksitesi.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        docentlikEntities db = new docentlikEntities();
        // GET: Admin

           
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Kullanicilar()
        {

            var model = db.admin.ToList();
            return View(model);
        }

  
        public ActionResult YeniKullanici()
        {

            return View("KullanicilarForm");
        }
        [HttpPost]


        public ActionResult KaydetKullanici(admin adminn)
        {
            if (adminn.id == 0)
            {
                db.admin.Add(adminn);
            }
            else
            {
                var guncellenecekAlan = db.admin.Find(adminn.id);
                if (guncellenecekAlan == null)
                {
                    return HttpNotFound();
                }
                guncellenecekAlan.id = adminn.id;
                guncellenecekAlan.kullaniciAdi = adminn.kullaniciAdi;
                guncellenecekAlan.sifre = adminn.sifre;
            }
            db.SaveChanges();
            return RedirectToAction("Kullanicilar", "Admin");
        }
        public ActionResult GuncelleKullanici(int id)
        {
            var model = db.admin.Find(id);
            if (model == null)
                return HttpNotFound();
            return View("KullanicilarForm", model);
        }
        public ActionResult SilKullanici(int id)
        {
            var silinecekAlan = db.admin.Find(id);
            if (silinecekAlan == null)
                return HttpNotFound();
            db.admin.Remove(silinecekAlan);
            db.SaveChanges();
            return RedirectToAction("Kullanicilar", "Admin");
        }
        public ActionResult Alanlar()
        {

            var model = db.Alanlar.ToList();
            return View(model);
        }


     
        public ActionResult Yeni()
        {
          
            return View("AlanForm");
        }
       

        public ActionResult Kaydet(Alanlar alanlar)
        {
            if (alanlar.id == 0) 
            {
                db.Alanlar.Add(alanlar);
            }
            else
            {
                var guncellenecekAlan = db.Alanlar.Find(alanlar.id);
                if (guncellenecekAlan==null)
                {
                    return HttpNotFound();
                }
                guncellenecekAlan.alanadi = alanlar.alanadi;
            }
            db.SaveChanges();
            return RedirectToAction("Alanlar","Admin");
        }
       

        public ActionResult Guncelle(int id)
        {
            var model = db.Alanlar.Find(id);
            if (model == null)
                return HttpNotFound();
            return View("AlanForm",model);
        }
        public ActionResult Sil(int id)
        {
            var silinecekAlan = db.Alanlar.Find(id);
            if (silinecekAlan == null)
                return HttpNotFound();
            db.Alanlar.Remove(silinecekAlan);
            db.SaveChanges();
            return RedirectToAction("Alanlar", "Admin");
        }
        public ActionResult Konular()
        {
            var model = db.Konular.ToList();
            return View(model);
        }
        public ActionResult Yenikonu()
        {

           var model = new KonuFormViewModel()
            {
               Alanlars=db.Alanlar.ToList()
            };
            return View("KonuForm",model);
        }
        public ActionResult Kaydetkonu(Konular konular)
        {
            if (konular.id == 0)//Konuları Ekleme
            {
                db.Konular.Add(konular);
            }
            else//Konuları Güncelleme
            {
                db.Entry(konular).State = System.Data.Entity.EntityState.Modified;
                //var guncellenecekKonu = db.Konular.Find(konular.id);
                //if (guncellenecekKonu == null)
                //{
                //    return HttpNotFound();
                //}
                //guncellenecekKonu.konuadi = konular.konuadi;
            }
            db.SaveChanges();
            return RedirectToAction("Konular","Admin");
        }
        public ActionResult GuncelleKonu(int id)
        {
            var model = new KonuFormViewModel()
            {
                Alanlars = db.Alanlar.ToList(),
                Konular=db.Konular.Find(id)
            };
            return View("KonuForm", model);
        }
        public ActionResult SilKonu(int id)
        {
            var silinecekKonular = db.Konular.Find(id);
            if (silinecekKonular==null)
            {
                return HttpNotFound();
            }
            db.Konular.Remove(silinecekKonular);
            db.SaveChanges();
            
            return RedirectToAction("Konular", "Admin");
        }
        public ActionResult Icerikler()
        {
            
            var model = db.İcerikler.ToList();
            return View(model);
            
        }
        public ActionResult Yeniicerik()
        {

            var model = new KonuFormViewModel()
            {
                Konulars = db.Konular.ToList()
            };
            return View("IcerikForm", model);
        }
        public ActionResult Kaydeticerik(İcerikler icerikler)
        {
            if (icerikler.id == 0)//Konuları Ekleme
            {
                db.İcerikler.Add(icerikler);
            }
            else//Konuları Güncelleme
            {
                db.Entry(icerikler).State = System.Data.Entity.EntityState.Modified;
               
            }
            db.SaveChanges();
            return RedirectToAction("Icerikler", "Admin");
        }
        public ActionResult GuncelleIcerik(int id)
        {
            var model = new KonuFormViewModel()
            {
                Alanlars=db.Alanlar.ToList(),
                Konulars = db.Konular.ToList(),
                İcerikler = db.İcerikler.Find(id)
            };
            return View("IcerikForm", model);
        }
        public ActionResult SilIcerik(int id)
        {
            var silinecekIcerikler = db.İcerikler.Find(id);
            if (silinecekIcerikler == null)
            {
                return HttpNotFound();
            }
            db.İcerikler.Remove(silinecekIcerikler);
            db.SaveChanges();

            return RedirectToAction("Icerikler", "Admin");
        }
        public ActionResult Haberler()
        {

            var model = db.Haberler.ToList();
            return View(model);
        }
        public ActionResult YeniHaber()
        {
            return View("HaberForm");
        }
        [HttpPost]
        public ActionResult KaydetHaber(Haberler haberler)
        {
            if (haberler.haberid == 0)
            {
                db.Haberler.Add(haberler);

            }
            else
            {
                var guncellenecekHaber = db.Haberler.Find(haberler.haberid);
                if (guncellenecekHaber == null)
                {
                    return HttpNotFound();
                }
                guncellenecekHaber.haberbaslik = haberler.haberbaslik;
                guncellenecekHaber.habericerik = haberler.habericerik;
                guncellenecekHaber.haberlink = haberler.haberlink;
            }
            db.SaveChanges();
            return RedirectToAction("Haberler", "Admin");
        }
        public ActionResult GuncelleHaber(int id)
        {
            var model = db.Haberler.Find(id);
            if (model == null)
                return HttpNotFound();
            return View("HaberForm", model);
        }
        public ActionResult SilHaber(int id)
        {
            var silinecekHaber = db.Haberler.Find(id);
            if (silinecekHaber == null)
                return HttpNotFound();
            db.Haberler.Remove(silinecekHaber);
             db.SaveChanges();
            return RedirectToAction("Haberler", "Admin");
        }
        [AllowAnonymous]
        public ActionResult AdminGiris()
        {
          
            return View();
        }

    [HttpPost]
        [AllowAnonymous]
        public ActionResult AdminGiris(admin adminn)
        {
            var admin = db.admin.FirstOrDefault(x => x.kullaniciAdi == adminn.kullaniciAdi && x.sifre == adminn.sifre);
            if (admin!=null)
            {
                FormsAuthentication.SetAuthCookie(admin.kullaniciAdi, false);
                return RedirectToAction("Index","Admin");
            }
            else
            {
                ViewBag.Mesaj = "Geçersiz Kullanıcı Adı veya Şifre";
                return View();
            }
            
        }

    }
}

           