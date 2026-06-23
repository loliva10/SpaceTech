using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace eletronicos.WebAPI.Models;

[Table("Eletronico")]
public partial class Eletronico
{
    [Key]
    public Guid IdEletronico { get; set; }

    [StringLength(150)]
    [Unicode(false)]
    public string Nome { get; set; } = null!;

    [StringLength(100)]
    [Unicode(false)]
    public string? Marca { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? Modelo { get; set; }

    [Column(TypeName = "decimal(10, 2)")]
    public decimal? Preco { get; set; }

    public int? Estoque { get; set; }

    public Guid? IdUsuario { get; set; }

    public Guid? IdTipo { get; set; }

    [ForeignKey("IdTipo")]
    [InverseProperty("Eletronicos")]
    public virtual TipoEletronico? IdTipoNavigation { get; set; }

    [ForeignKey("IdUsuario")]
    [InverseProperty("Eletronicos")]
    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
