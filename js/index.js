// Objeto que almacena la lista de tareas
const listaTareas = {
    tareas: [],
    // Función que agrega una tarea a la lista
    agregarTarea: function(tarea) {
        this.tareas.push(tarea);
    },
    // Función que elimina una tarea de la lista
    eliminarTarea: function(indice) {
        this.tareas.splice(indice, 1);
    },
    // Función que muestra la lista de tareas
    mostrarTareas: function() {
        let lista = '';
        for (let i = 0; i < this.tareas.length; i++) {
            lista += `${i + 1}. ${this.tareas[i]}\n`;
        }
        alert(`Lista de tareas:\n${lista}`);
    }
};

// Variable que almacena nombre de usuario
let nombre = '';
// Control nombre no quede en blanco 
while (!nombre) {
    nombre = prompt('¡Buenos días cocinero!\n¿Cuál es tu nombre?');
    if (!nombre) {
        alert('Por favor, ingresa tu nombre.');
    }
}
// Muestra mensaje de bienvenida 
alert('¡Hola, Chef ' + nombre + '!\nBienvenido al simulador de mise en place.');

// Ciclo que permite al usuario agregar tareas a la lista
while (true) {
    const tarea = prompt('Ingresa una tarea o presiona Cancelar para salir:');
    if (tarea === null) {
        break;
    } else if (tarea.trim() === '') {
        alert('Por favor, ingresa una tarea válida.');
    } else {
        listaTareas.agregarTarea(tarea);
    }
}

// Ciclo que permite al usuario eliminar tareas de la lista
while (listaTareas.tareas.length > 0) {
    listaTareas.mostrarTareas();
    const indice = prompt('Ingresa el número de la tarea que deseas eliminar o presiona Cancelar para salir:');
    if (indice === null) {
        break;
    } else if (isNaN(indice) || indice < 1 || indice > listaTareas.tareas.length) {
        alert('Por favor, ingresa un número válido.');
    } else {
        listaTareas.eliminarTarea(indice - 1);
    }
}

listaTareas.mostrarTareas();
alert('¡Gracias por colaborar ' + nombre + '!');
