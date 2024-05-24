using Microsoft.EntityFrameworkCore;
using System;
using HospedajeApi.Models;

namespace WebApiPerson.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Hospedaje> Hospedaje { get; set; }
    }
}