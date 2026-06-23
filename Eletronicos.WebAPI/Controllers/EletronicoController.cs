using eletronicos.WebAPI.DTO;
using eletronicos.WebAPI.Interfaces;
using eletronicos.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eletronicos.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EletronicoController : ControllerBase
    {
        private readonly IEletronicoRepository _eletronicoRepository;

        public EletronicoController(IEletronicoRepository eletronicoRepository)
        {
            _eletronicoRepository = eletronicoRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_eletronicoRepository.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_eletronicoRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(EletronicoDTO novoGenero)
        {
            try
            {
                Eletronico genero = new Eletronico
                {
                    Nome = novoGenero.Nome
                };

                _eletronicoRepository.Cadastrar(genero);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult PutBody(Eletronico generoAtualizado)
        {
            try
            {
                _eletronicoRepository.AtualizarIdCorpo(generoAtualizado);
                return NoContent();
            }
            catch (Exception a)
            {
                return BadRequest(a.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _eletronicoRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
