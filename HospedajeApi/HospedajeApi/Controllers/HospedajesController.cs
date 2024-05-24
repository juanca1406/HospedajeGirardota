using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospedajeApi.Models;
using WebApiPerson.Context;

namespace HospedajeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospedajesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HospedajesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Hospedajes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hospedaje>>> GetHospedaje()
        {
            return await _context.Hospedaje.ToListAsync();
        }

        // GET: api/Hospedajes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hospedaje>> GetHospedaje(int id)
        {
            var hospedaje = await _context.Hospedaje.FindAsync(id);

            if (hospedaje == null)
            {
                return NotFound();
            }

            return hospedaje;
        }

        // PUT: api/Hospedajes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHospedaje(int id, Hospedaje hospedaje)
        {
            if (id != hospedaje.Id)
            {
                return BadRequest();
            }

            _context.Entry(hospedaje).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HospedajeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Hospedajes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Hospedaje>> PostHospedaje(Hospedaje hospedaje)
        {
            _context.Hospedaje.Add(hospedaje);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHospedaje", new { id = hospedaje.Id }, hospedaje);
        }

        // DELETE: api/Hospedajes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHospedaje(int id)
        {
            var hospedaje = await _context.Hospedaje.FindAsync(id);
            if (hospedaje == null)
            {
                return NotFound();
            }

            _context.Hospedaje.Remove(hospedaje);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HospedajeExists(int id)
        {
            return _context.Hospedaje.Any(e => e.Id == id);
        }
    }
}
