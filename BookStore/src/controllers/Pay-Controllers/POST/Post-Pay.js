// Importamos las tablas de Pay de User y de Bookings
const { Pay, User, Book } = require('../../../db');

// Le mandamos datos por parametro a la funcion el objeto result trae toda la informacion.
const newPay = async (
  result


) => {
// Obtener la fecha actual
const currentDate = new Date();

// Obtener día, mes y año
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son de 0 a 11
const year = currentDate.getFullYear();

// Crear la cadena en el formato "dd/mm/aaaa"
const formattedDate = `${day}/${month}/${year}`;

  // Recibe el Pago con Todos los  datos  del recibo.
  try {
    const newPay = await Pay.create({
      amount: result.total_paid_amount,
      paymentDate: result.data_aprove,
      paymentStatus: result.result.metodo,
      ip: result.ip,
      idpay: result.idpay,
      orderNumber: result.order,
      orderType: result.orderType,
      operationType: result.operationType,
      metodo: result.metodo,
      currentOperation: result.currentOperation,
      data_aprove: result.data_aprove,
      total_paid_amount: result.total_paid_amount,
      net_received_amount: result.net_received_amount,
      userId: result.userId,
    });
    if (result.bookIds && result.bookIds.length > 0) {
      // Asociar libros al pago usando los IDs proporcionados
      const books = await Book.findAll({
        where: {
          id: result.bookIds,
        },
      });

      await newPay.addBooks(books);

    }

    // Guardamos en la base de datos el nuevo pago que acabamos de generar.
    const savedPay = await newPay.save();



    // Tenemos la relacion con la tabla user y bookings para agregar estos datos a nuestro recibo.
    const payWithDetails = await Pay.findOne({
      where: { 
        id: newPay.id, 
      },
      include: [
        { model: User, as: 'user', attributes: ['name', 'email', 'rol', 'listWish'] },
        { model: Book, as: 'books', attributes: ["id", 'title', 'country', 'author', 'price', 'image','gender', "pdfLink"] },
      ],
    });

    // Retornamos el pago realizado junto con la relacion de las demas tablas user y bookings.
    return payWithDetails;
  } catch (error) {
    console.log(error.message);
    console.log(error)
    throw new Error({ error: error.message });
  }
};

module.exports = { newPay };
