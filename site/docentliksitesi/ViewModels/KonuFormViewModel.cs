using docentliksitesi.Models;
using System.Collections.Generic;

namespace docentliksitesi.ViewModels
{
    public class KonuFormViewModel
    {
        public IEnumerable<Alanlar> Alanlars { get; set; }
        public Konular Konular { get; set; }
        public IEnumerable<Konular> Konulars { get; set; }
        public İcerikler İcerikler { get; set; }
    }
}