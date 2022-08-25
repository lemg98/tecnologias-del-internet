function validateForm() {
    let dato = document.forms["myForm"]["fname"].value;
    if (dato == "") {
      alert("Agrega algún dato");
      return false;
    }
    document.getElementById('dato-curioso').innerHTML = "Agregaremos a nuestros datos: " + dato;
  } 