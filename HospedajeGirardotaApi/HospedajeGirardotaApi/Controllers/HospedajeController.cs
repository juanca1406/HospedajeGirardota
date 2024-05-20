using Microsoft.AspNetCore.Mvc;
using HospedajeGirardotaApi.Database;
using HospedajeGirardotaApi.Models;
using Microsoft.EntityFrameworkCore;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HospedajeGirardotaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospedajeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public HospedajeController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<CustomersController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var result = await _context.Hospedaje.ToListAsync();
            if (result == null)
                return NotFound();
            return Ok(result);
        }

        // GET api/<CustomersController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _context.Hospedaje.SingleOrDefaultAsync(x => x.Id == id);
            if (result == null)
                return NotFound();
            return Ok(result);
        }

        // POST api/<CustomersController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Hospedaje customer)
        {
            await _context.Hospedaje.AddAsync(customer);
            await _context.SaveChangesAsync();
            return Ok(customer);
        }

        // PUT api/<CustomersController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Hospedaje customer)
        {
            var hospedajeinfo = _context.Hospedaje.SingleOrDefault(x => x.Id == id);
            if (hospedajeinfo == null)
                return NotFound();

            hospedajeinfo.Habitacion = customer.Habitacion;
            hospedajeinfo.Descripcion = customer.Descripcion;
            hospedajeinfo.Categoria = customer.Categoria;
            hospedajeinfo.NPersonas = customer.NPersonas;
            _context.Attach(hospedajeinfo);
            await _context.SaveChangesAsync();

            return Ok(hospedajeinfo);
        }

        // DELETE api/<CustomersController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var hospedajeinfo = _context.Hospedaje.SingleOrDefault(x => x.Id == id);
            if (hospedajeinfo == null)
                return NotFound();
            _context.Hospedaje.Remove(hospedajeinfo);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
