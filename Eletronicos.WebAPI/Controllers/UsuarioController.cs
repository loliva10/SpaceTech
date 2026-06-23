using eletronicos.WebAPI.Interfaces;
using eletronicos.WebAPI.Models;
using filmes.WebAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace eletronicos.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository usuarioRepository;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public IActionResult Post(Usuario novoUsuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(novoUsuario);
                return StatusCode(201, novoUsuario);
            }
            catch(Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
}
