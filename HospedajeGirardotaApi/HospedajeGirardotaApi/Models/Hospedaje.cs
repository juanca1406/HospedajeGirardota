using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HospedajeGirardotaApi.Models
{
    public class Hospedaje
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Habitacion { get; set; }
        [Required]
        public string Descripcion { get; set; }
        [Required]
        public string Categoria { get; set; }
        [Required]
        public int NPersonas { get; set; }
    }
}
