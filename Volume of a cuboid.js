//Bob needs a fast way to calculate the volume of a cuboid with three values: lenght, width and the height of te he cuboid write a function to help bob whit his calculation
// Bob necesita una forma rapida de calcular el volumen de un cuboide con tres valores: longitud, ancho y la altura del cuboide, escriba una funcion para ayudar a bob con su calculo
// pasos:

// formula para saca el cuboide y retornar

function VolumeCuboid(lenght,width,height){
    let Volume = lenght * width * height 
    return Volume
}

console.log(VolumeCuboid(10,10,10))


class Kata {
    static getVolumeOfCuboid(length,width,height){
        return lenght * width * height;
    }
}

// con esta segunda forma en vez de usar una funcion se usa un metodo de una clase