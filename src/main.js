const peopleData = () => {
    const url = 'https://randomuser.me/api/?results=20';
  
    // instanciando nuestro objeto
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        // mostrando el array en la consola
        console.log(data.results);
  
        const container = document.getElementById('container');
        container.innerHTML = '';
  
        // accediendo a la información elegida de la persona
        for (const person of data.results) {
          container.innerHTML
                  += `<div class='cards'>
                      <img src=${person.picture.large} class="person-img">
                      <div class='people-data'>
                      <p>Usurname: ${person.login.usurname}</p>
                          <p>Nombre: ${person.name.title} ${person.name.first} ${person.name.last}</p>
                          <p>País: ${person.country}</p>
                          <p>Telefono: ${person.phone}</p>
                          <p>Email: ${person.email}</p>
                  </div>`;
        }
      }
    };
  };
  
  peopleData();
  