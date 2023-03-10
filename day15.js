function hotelSystem(rooms) {
  // Tu código aquí

  //** VALIDAR CON roomNumber!!! */

  let listRooms = []; 
  const searchReservation = (id) => {
    let result = listRooms.find((room) => room.id === id);
    if(result){
      return result
    }else {
      throw new Error("La reservación no fue encontrada");
    }
  };
  const getSortReservations = () => {
    let ordenado = [...listRooms];
    return ordenado.sort((a, b) => Date.parse(formatDate(a.checkIn)) - Date.parse(formatDate(b.checkIn)));
  };
  const addReservation = (reservation) => {
    if(listRooms.length === 0 ) { 
      listRooms.push(reservation); 
      return 'Recervación agregada exitosamente'
    }
    let habitacionRegistrada = false;
    const fechasNoDisponibles = listRooms.find((room) => room.roomNumber === reservation.roomNumber && validateDates(room.checkIn, room.checkOut, reservation.checkIn, reservation.checkOut))
    if( fechasNoDisponibles ){
      throw new Error("La habitación no está disponible");
    }else if(listRooms.length < rooms){
      listRooms.push(reservation);
      habitacionRegistrada = true;
    }    
  }
  const removeReservation = (id) => {
    const index = listRooms.findIndex((room) => room.id === id);
    if(index < 0 ) {
      throw new Error("La reservación que se busca remover no existe");
    }else{
      const habitacionRemovida = listRooms.splice(index, 1)
      return habitacionRemovida[0];
    }
  };

  const getReservations = () => listRooms;

  const getAvailableRooms = (checkIn, checkOut) => {
    let availableRooms = [...Array(rooms).keys()].map(i => i+1)
    const habitacionesOcupadas = [];
    listRooms.forEach((room) => {
      if(validateDates(room.checkIn, room.checkOut, checkIn, checkOut)) {
        habitacionesOcupadas.push(room.roomNumber);
      }
    });
      habitacionesOcupadas.forEach(room => {
        const index = availableRooms.findIndex((item) => item === room)
        availableRooms.splice(index, 1)
      });
    
    return availableRooms;
  };

  function validateDates(checkIntRegister, checkOutRegister, checkIntDate, checkOutDate) {
    const checkIntRegisterParse = Date.parse(formatDate(checkIntRegister));
    const checkOutRegisterParse = Date.parse(formatDate(checkOutRegister));
    const checkIntDateParse = Date.parse(formatDate(checkIntDate));
    const checkOutDateParse = Date.parse(formatDate(checkOutDate));

    const laFechaDeInicioEstaenmedio = checkIntDateParse >= checkIntRegisterParse && checkIntDateParse < checkOutRegisterParse;
    const laFechaDefINEstaenmedio = checkOutDateParse > checkIntRegisterParse && checkOutDateParse <= checkOutRegisterParse;
    const lasFechasEstanEntreMedio = checkIntDateParse <= checkIntRegisterParse && checkOutDateParse >= checkOutRegisterParse;

    return lasFechasEstanEntreMedio || laFechaDeInicioEstaenmedio || laFechaDefINEstaenmedio;
  }
  function formatDate(date) {
    const response = date.split('/')
    const month = response[1];
    const day = response[0];
    return `${month}/${day}`

  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms
  }
}


const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
console.log(hotel.getAvailableRooms("01/01", "05/01"))
