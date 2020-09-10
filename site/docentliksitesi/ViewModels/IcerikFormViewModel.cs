using docentliksitesi.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace docentliksitesi.ViewModels
{
    public class IcerikFormViewModel
    {
        public IEnumerable<Konular> Konulars { get; set; }
        public İcerikler İcerikler { get; set; }


    }
}