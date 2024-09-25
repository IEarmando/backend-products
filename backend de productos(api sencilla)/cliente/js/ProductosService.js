async function getBicicletas(){
    const response = await fetch('http://localhost:4000/productos');
    const resJson = await response.json();
    return resJson;
}
