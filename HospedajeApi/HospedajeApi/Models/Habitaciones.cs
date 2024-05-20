using System;
using System.Collections.Generic;

namespace HospedajeApi.Models;

public partial class Habitaciones
{
    public int Id { get; set; }

    public string? Habitacion { get; set; }

    public string? Descripcion { get; set; }

    public string? Categoria { get; set; }

    public int? Npersonas { get; set; }
}
