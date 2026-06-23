using eletronicos.WebAPI.Models;

namespace eletronicos.WebAPI.Interfaces
{
    public interface IEletronicoRepository
    {
        void Cadastrar(Eletronico novoEletronico);
        void AtualizarIdCorpo(Eletronico eletronicoAtualizado);
        List<Eletronico> Listar();
        void Deletar(Guid id);
        Eletronico BuscarPorId(Guid id);
    }
}
