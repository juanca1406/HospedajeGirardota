using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospedajeApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;

namespace HospedajeGirardotaApi.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class HospedajesController : ControllerBase
    {
        private readonly HospedajeContext _dbContext;

        public HospedajesController(HospedajeContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        [Route("Habitacion")]
        public IActionResult Lista()
        {
            try
            {
                List<Habitaciones> habitacion = _dbContext.Habitaciones.ToList();
                return Ok(new { mensaje = "ok", response = habitacion });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = ex.Message });
            }
        }

        [HttpGet]
        [Route("Obtener/{IdRegistrar:int}")]
        public IActionResult Obtener(int IdRegistrar)
        {
            try
            {
                Habitaciones habitacion = _dbContext.Habitaciones.FirstOrDefault(p => p.Id == IdRegistrar);

                if (habitacion == null)
                {
                    return NotFound(new { mensaje = "Habitación no encontrada" });
                }

                return Ok(new { mensaje = "ok", response = habitacion });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = ex.Message });
            }
        }


    }
}
