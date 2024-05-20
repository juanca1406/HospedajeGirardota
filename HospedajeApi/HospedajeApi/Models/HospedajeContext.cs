using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HospedajeApi.Models;

public partial class HospedajeContext : DbContext
{
    public HospedajeContext()
    {
    }

    public HospedajeContext(DbContextOptions<HospedajeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Habitaciones> Habitaciones { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Habitaciones>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Habitaci__3214EC07C84C07C5");

            entity.Property(e => e.Categoria)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Descripcion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Habitacion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Npersonas).HasColumnName("NPersonas");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
