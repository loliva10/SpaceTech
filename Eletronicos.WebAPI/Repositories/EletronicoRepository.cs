using eletronicos.WebAPI.BdContextSpace;
using eletronicos.WebAPI.Interfaces;
using eletronicos.WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using static System.Net.WebRequestMethods;

namespace eletronicos.WebAPI.Repositories
{
    public class EletronicoRepository : IEletronicoRepository
    {
        private readonly SpaceContext _context;

        public EletronicoRepository(SpaceContext context)
        {
            _context = context;
        }

        public void AtualizarIdCorpo(Eletronico eletronicoAtualizado)
        {
            try
            {
                Eletronico eletronicoBuscado = _context.Eletronicos.Find(eletronicoAtualizado.IdEletronico)!;

                if(eletronicoBuscado != null)
                {
                    eletronicoBuscado.Modelo = eletronicoBuscado.Modelo;
                    eletronicoBuscado.Preco = eletronicoBuscado.Preco;
                    eletronicoBuscado.Estoque = eletronicoBuscado.Estoque;
                }

                _context.Eletronicos.Update(eletronicoBuscado);
                _context.SaveChanges();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public Eletronico BuscarPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Eletronico novoEletronico)
        {
            try
            {
                novoEletronico.IdEletronico = Guid.NewGuid();

                _context.Eletronicos.Add(novoEletronico);
                _context.SaveChanges();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                Eletronico eletronicoBuscado = _context.Eletronicos.Find(id.ToString())!;

                if (eletronicoBuscado != null)
                {
                    _context.Eletronicos.Remove(eletronicoBuscado);
                }

                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Eletronico> Listar()
        {
            try
            {
                List<Eletronico> listaEletronicos = _context.Eletronicos.Include(f => f.IdTipoNavigation).ToList();
            }
            catch(Exception)
            {
                throw;
            }
        }
    }
}
