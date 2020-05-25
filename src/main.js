const peopleData = () => {
    const url = 'https://randomuser.me/api/?results=20';
  
    // instanciando nuestro objeto
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        
  
        const container = document.getElementById('container');
        container.innerHTML = '';
  
       
        for (const person of data.results) {
          container.innerHTML
                  += `<div class='cards'>
                      <img src=${person.picture.large} class="person-img">
                      <div class='person-data'>
                          <p>Nombre: ${person.name.title} ${person.name.first} ${person.name.last}</p>
                          <p>Sexo: ${person.gender}</p>
                          <p>Telefono: ${person.phone}</p>
                          <p>Email: ${person.email}</p>
                  </div>`;
        }
      }
    };
  };
  
  peopleData();
  