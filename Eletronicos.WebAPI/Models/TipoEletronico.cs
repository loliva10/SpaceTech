using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace eletronicos.WebAPI.Models;

[Table("TipoEletronico")]
public partial class TipoEletronico
{
    [Key]
    public Guid IdTipo { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string NomeTipo { get; set; } = null!;

    [InverseProperty("IdTipoNavigation")]
    public virtual ICollection<Eletronico> Eletronicos { get; set; } = new List<Eletronico>();
}
