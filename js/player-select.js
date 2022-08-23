// player-cart
const cart = [];
function displayPlayer()
{
    
  const PlayerContainer = document.getElementById("players-cart");
  PlayerContainer.textContent = '';

    for(let i = 0; i < cart.length; i++)
    {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <th>${i+1}.</th>
      <td>${cart[i].plName}</td>
        
      `;
      
       PlayerContainer.appendChild(tr);
    }
    const tr = document.createElement();
    tr.innerHTML = `
    <th></th>
    `;

    PlayerContainer.appendChild(tr);
}

//Player Adding in cart using common function.
function addToCart(element) {
 
    const plName = element.parentNode.children[0].innerText;
    const pl = {
        plName: plName,
    }

    cart.push(pl);
    if(cart.length>5){
      alert('Oopps!! You Can Select Only 5 Players.');
      cart.pop(pl);
      return

    }
    
    displayPlayer();
}

function myFunction1() {
  document.getElementById("btn-add-item1").disabled = true;

  } 
  
  function myFunction2() {
    document.getElementById("btn-add-item2").disabled = true;
    
  }
  function myFunction3() {
    document.getElementById("btn-add-item3").disabled = true;
    
  }
  function myFunction4() {
    document.getElementById("btn-add-item4").disabled = true;
    
  }
  function myFunction5() {
    document.getElementById("btn-add-item5").disabled = true;
    
  }
  function myFunction6() {
    document.getElementById("btn-add-item6").disabled = true;
    
  }
  function myFunction7() {
    document.getElementById("btn-add-item7").disabled = true;
   
  }
  function myFunction8() {
    document.getElementById("btn-add-item8").disabled = true;
    
  }
  function myFunction9() {
    document.getElementById("btn-add-item9").disabled = true;
    
  }





