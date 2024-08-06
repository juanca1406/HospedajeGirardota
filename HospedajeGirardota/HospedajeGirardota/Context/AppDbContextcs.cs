using Microsoft.EntityFrameworkCore;
using System;
using HospedajeGirardota.Models;

namespace HospedajeGirardota.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Clientes> Cilentes { get; set; }
    }
}