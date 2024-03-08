function crearEquipoDeFutbol (11); // Para un equipo de 11 jugadores
  let equipo = [];
  for (let i = 0; i < cantidadDeJugadores; i++) {
    equipo.push(`Jugador ${i + 1}`);
  }
  return equipo;
}
