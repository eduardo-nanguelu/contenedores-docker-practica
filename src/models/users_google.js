class user_google {
  constructor(id, nombre, correo, foto){
    this.id = id
    this.nombre = nombre
    this.correo = correo
    this.foto = foto
  }
}

class user{
  constructor(id, nombreu, correo, foto){
    this.id = id
    this.nombreu = nombreu
    this.correo = correo
    this.foto = foto
  }
}

module.exports = {
  user_google,
  user
}