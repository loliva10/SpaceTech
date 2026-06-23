using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using eletronicos.WebAPI.Models;

namespace eletronicos.WebAPI.BdContextSpace;

public partial class SpaceContext : DbContext
{
    public SpaceContext()
    {
    }

    public SpaceContext(DbContextOptions<SpaceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Eletronico> Eletronicos { get; set; }

    public virtual DbSet<TipoEletronico> TipoEletronicos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=SpaceTech;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Eletronico>(entity =>
        {
            entity.HasKey(e => e.IdEletronico).HasName("PK__Eletroni__1AFE8EE8D029A567");

            entity.Property(e => e.IdEletronico).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.IdTipoNavigation).WithMany(p => p.Eletronicos).HasConstraintName("FK__Eletronic__IdTip__534D60F1");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Eletronicos).HasConstraintName("FK__Eletronic__IdUsu__52593CB8");
        });

        modelBuilder.Entity<TipoEletronico>(entity =>
        {
            entity.HasKey(e => e.IdTipo).HasName("PK__TipoElet__9E3A29A545E4D4BC");

            entity.Property(e => e.IdTipo).HasDefaultValueSql("(newid())");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__5B65BF979801597D");

            entity.Property(e => e.IdUsuario).HasDefaultValueSql("(newid())");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
