 let colors = {
  azul: "#A2DCD7",
  amarelo: "#F3D275",
  verde: "#BBD081",
  rosa: "#F7879F"
};

let coresDiv = document.querySelector(".cores-disponiveis");

for (let cor in colors) {
  const div = document.createElement("div");
  div.className = "cor";
  div.style.backgroundColor = colors[cor];
  div.setAttribute("data-cor", cor);
  coresDiv.appendChild(div);
}
let corSelecionada; 

coresDiv.addEventListener("click", function(event) {
  if (event.target.classList.contains("cor")) {
    // Remove a classe "selecionada" de todas as divs, exceto a div clicada
    const divsCores = document.querySelectorAll(".cor");
    divsCores.forEach(div => {
      if (div !== event.target) {
        div.classList.remove("selecionada");
        div.classList.add("opacidade-menor");
      } else {
        div.classList.add("selecionada");
        div.classList.remove("opacidade-menor");
      }
    });
    
    corSelecionada = event.target.getAttribute("data-cor");
    
    
  }
});




 
 
const canetas = [
  {
    nome: 'Marca Texto Tom Pastel | BIC',
    cor: 'Multicores',
    preco: 4,
    disponivel: 2,
    imagem: 'mcTodas.jpg',
    id: '01'
  },
  {
    nome: 'Marca Texto Tom Pastel | BIC',
    cor: 'Azul',
    preco: 4,
    disponivel: 2,
    imagem: 'mcAzul.jpg',
    id: '02'
  },
  {
    nome: 'Marca Texto Tom Pastel | BIC',
    cor: 'Amarelo',
    preco: 4,
    disponivel: 2,
    imagem: 'mcAmarelo.jpg',
    id: '03'
  },
  {
    nome: 'Marca Texto Tom Pastel | BIC',
    cor: 'Verde',
    preco: 4,
    disponivel: 2,
    imagem: 'mcVerde.jpg',
    id: '04'
  },
  {
    nome: 'Marca Texto Tom Pastel | BIC',
    cor: 'Rosa',
    preco: 4,
    disponivel: 2,
    imagem: 'mcRosa.jpg',
    id: '05'
  }
];



 
 let penName = document.querySelector("#penName");
 
 
penName.innerHTML = `${canetas[0].nome} Multicores`;
 
 let posicaoCorSelecionada;
 
 $(document).ready(function() {
  const carousel = $('.carousel');
  const carousel2 = $('.carousel2');
  const coresDiv = $('.cores-disponiveis .cor');

  carousel.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel2',
    zoom: true
  });

  carousel2.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.carousel',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
carousel2.on('afterChange', function(event, slick, currentSlide) {
  const corSelecionada = slick.$slides.eq(currentSlide).find('img').attr('alt');

  for (let i = 0; i < canetas.length; i++) {
    const nomeImagem = canetas[i].imagem.split(".")[0];
    if (nomeImagem === `mc${corSelecionada.charAt(0).toUpperCase()}${corSelecionada.slice(1)}`
) {
      penName.innerHTML = `${canetas[i].nome} Cor ${canetas[i].cor}`;
      
      break; 
    }else {
        penName.innerHTML = `${canetas[i].nome} Multicores `;
    }
    
  }
});

  coresDiv.on('click', function() {
    const corSelecionada = $(this).data('cor');
    
  for (let i = 0; i < canetas.length; i++) {
   const nomeImagem = canetas[i].imagem.split(".")[0];
    if (nomeImagem === `mc${corSelecionada.charAt(0).toUpperCase()}${corSelecionada.slice(1)}`) {
      
      posicaoCorSelecionada = i;
      penName.innerHTML = `${canetas[i].nome} Cor ${canetas[i].cor}`;
     break; 
    }
  }
    
    
    
    if (posicaoCorSelecionada !== -1) {

  } else {
    console.log(`A cor "${corSelecionada}" não foi encontrada no array.`);
  }
    
    const slideIndex = $(`.carousel-item img[alt="${corSelecionada}"]`).parent().index();
    carousel.slick('slickGoTo', slideIndex);
  });
});




function gerarDivItemCarrinho(item) {
  let emptyCartMessage = document.querySelector("#emptyCartMessage");
  let emptyCartMessage2 = document.querySelector("#emptyCartMessage2")
  if (emptyCartMessage) {
      emptyCartMessage.remove();
      emptyCartMessage2.remove();
  }
  
  const divItemCarrinho = document.createElement('div');
  divItemCarrinho.id = `divCard${item.id}`
  const divItemCart = document.createElement('div');
  divItemCart.id = `divCart${item.id}`
  divItemCarrinho.className = 'item-carrinho';
  divItemCart.className = 'item-cart';
item.comprado += qtd;
  const divItemImagem = document.createElement('div');
  const divImagemcart = document.createElement('div');
  divItemImagem.className = 'item-imagem';
  divImagemcart.className = 'item-imagemcart';
  const imgItem = document.createElement('img');
  const imgItemaCart = document.createElement('img');
  imgItem.src = item.imagem;
  imgItem.alt = 'Imagem do Item';
  divItemImagem.appendChild(imgItem);
  imgItemaCart.src = item.imagem;
  imgItemaCart.alt = 'Imagem do Item';
  divImagemcart.appendChild(imgItemaCart);
  
const spanQuantidade = document.createElement('span');
spanQuantidade.innerText = ` ${item.comprado}`;
spanQuantidade.id = `spanCard${item.id}`
divItemImagem.appendChild(spanQuantidade);
const spanQtdCart = document.createElement('span');
spanQtdCart.innerText = ` ${item.comprado}`;
spanQtdCart.id = `spanCart${item.id}`
divImagemcart.appendChild(spanQtdCart);


  const divItemNome = document.createElement('div');
  const divItemNomeCart = document.createElement('div');
  divItemNome.className = 'item-nome';
  divItemNome.textContent = `${item.nome} Cor ${item.cor}`;
  divItemNomeCart.className = 'item-nomeCart';
  divItemNomeCart.textContent = `${item.nome} Cor ${item.cor}`;

  const divItemValor = document.createElement('div');
  divItemValor.className = 'item-valor';
  divItemValor.id = `cor${item.id}`  
  divItemValor.innerHTML = `R$ ${item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
  const divItemValorCart = document.createElement('div');
  divItemValorCart.className = 'item-valorCart';
  divItemValorCart.id = `cor${item.id}Cart`  
  divItemValorCart.innerHTML = `R$ ${item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
  
  item.valor = item.preco.toFixed(2)*qtd;
  
  /// botões de increase e decrease ( card 1)
  const divItemQtd = document.createElement('div');
  divItemQtd.className = 'item-qtd';
  const btnCrease = document.createElement('div');
  btnCrease.className = 'btn-crease';
  const btnIncrease = document.createElement('span');
  btnIncrease.textContent = '+';
  btnIncrease.id = `IncBtn${item.id}`;
  btnIncrease.addEventListener("click", ()=>{
      item.comprado ++;
      spanQuantidade.innerText = ` ${item.comprado}`;
      spanQtdCart.innerText = ` ${item.comprado}`;
      
      divItemValor.innerHTML = `R$ ${Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      
      divItemValorCart.innerHTML = `R$ ${Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      
      item.valor = Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd
    upSubTotal()
    qtd = 1
      
      
  })
  const btnDivsor = document.createElement('span');
  btnDivsor.textContent = "" ;
  const btnDecrease = document.createElement('span');
  btnDecrease.textContent = '-';
  btnDecrease.addEventListener("click", ()=>{
      item.comprado --;
      spanQuantidade.innerText = ` ${item.comprado}`;
      spanQtdCart.innerText = ` ${item.comprado}`;
      divItemValor.innerHTML = `R$ ${Number(item.valor.toFixed(2)) - item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      divItemValorCart.innerHTML = `R$ ${Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      
      item.valor = Number(item.valor.toFixed(2)) - item.preco.toFixed(2)*qtd
    upSubTotal()
    qtd = 1
    if (item.valor == 0) {
       const divToRemove = document.querySelector(`#divCard${item.id}`);
  const divToRmv = document.querySelector(`#divCart${item.id}`);
        if(divToRemove) {
            divToRemove.remove();
            divToRmv.remove()
        }
        item.comprado = 0;
atualizarQuantidadeItensCarrinho();
        item.valor = 0;
        upSubTotal();
        let crdMsg = document.querySelector("#addItem");
        let totalDeItem = 0;
        for(let i = 0; i < canetas.length; i++){
            let objetos = canetas[i];
            if(!objetos.comprado) {
                totalDeItem ++
            }
            
        }
        if(totalDeItem == canetas.length) {
            const mensagem = document.createElement("span");
    mensagem.innerText = "NENHUM ITEM !";
    mensagem.className = "emptyCartMessage";
    mensagem.id = "emptyCartMessage";
    const mensagem2 = document.createElement('span');
    mensagem2.innerText = "NENHUM ITEM !";
    mensagem2.className = "emptyCartMessage";
    mensagem2.id = "emptyCartMessage2"

    // Adicione a mensagem ao carrinho
    crdMsg.appendChild(mensagem);
    cardCntDivs.appendChild(mensagem2)

        }
    }
      
  })
  btnCrease.appendChild(btnIncrease);
  btnCrease.appendChild(btnDivsor);
  btnCrease.appendChild(btnDecrease);
  divItemQtd.appendChild(btnCrease);
  
  
  let divItemQtd2 = document.createElement('div');
  divItemQtd2.className = 'item-qtd';
  const btnCrease2 = document.createElement('div');
  btnCrease2.className = 'btn-crease';
  const btnIncrease2 = document.createElement('span');
  btnIncrease2.textContent = '+';
  btnIncrease2.id = `IncBtn2${item.id}`;
  btnIncrease2.addEventListener("click", ()=>{
      item.comprado ++;
      spanQuantidade.innerText = ` ${item.comprado}`;
      spanQtdCart.innerText = ` ${item.comprado}`;
      
      divItemValor.innerHTML = `R$ ${Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      
      divItemValorCart.innerHTML = `R$ ${Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      
      item.valor = Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd
    upSubTotal()
    qtd = 1
      
      
  })
  
  const btnDivsor2 = document.createElement('span');
  btnDivsor2.textContent = "" ;
  const btnDecrease2 = document.createElement('span');
  btnDecrease2.textContent = '-';
  btnDecrease2.addEventListener("click", ()=>{
      item.comprado --;
      spanQuantidade.innerText = ` ${item.comprado}`;
      spanQtdCart.innerText = ` ${item.comprado}`;
      divItemValor.innerHTML = `R$ ${Number(item.valor.toFixed(2)) - item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      divItemValorCart.innerHTML = `R$ ${Number(item.valor.toFixed(2)) + item.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${item.preco.toFixed(2)} cada</sub>`;
      
      item.valor = Number(item.valor.toFixed(2)) - item.preco.toFixed(2)*qtd
    upSubTotal()
    qtd = 1
    if (item.valor == 0) {
       const divToRemove = document.querySelector(`#divCard${item.id}`);
  const divToRmv = document.querySelector(`#divCart${item.id}`);
        if(divToRemove) {
            divToRemove.remove();
            divToRmv.remove()
        }
        item.comprado = 0;
atualizarQuantidadeItensCarrinho();
        item.valor = 0;
        upSubTotal();
        let crdMsg = document.querySelector("#addItem");
        let totalDeItem = 0;
        for(let i = 0; i < canetas.length; i++){
            let objetos = canetas[i];
            if(!objetos.comprado) {
                totalDeItem ++
            }
            
        }
        if(totalDeItem == canetas.length) {
            const mensagem = document.createElement("span");
    mensagem.innerText = "NENHUM ITEM !";
    mensagem.className = "emptyCartMessage";
    mensagem.id = "emptyCartMessage";
    const mensagem2 = document.createElement('span');
    mensagem2.innerText = "NENHUM ITEM !";
    mensagem2.className = "emptyCartMessage";
    mensagem2.id = "emptyCartMessage2"

    // Adicione a mensagem ao carrinho
    crdMsg.appendChild(mensagem);
    cardCntDivs.appendChild(mensagem2)

        }
    }
      
  })
btnCrease2.appendChild(btnIncrease2);
  btnCrease2.appendChild(btnDivsor2);
  btnCrease2.appendChild(btnDecrease2);
  divItemQtd2.appendChild(btnCrease2);
 
  const cardCntDivs = document.querySelector("#cardCntDivs");
  divItemCart.appendChild(divImagemcart);
  divItemCart.appendChild(divItemNomeCart);
  divItemCart.appendChild(divItemValorCart);
  divItemCart.appendChild(divItemQtd2);
  cardCntDivs.appendChild(divItemCart);

  divItemCarrinho.appendChild(divItemImagem);
  divItemCarrinho.appendChild(divItemNome);
  divItemCarrinho.appendChild(divItemValor);
  divItemCarrinho.appendChild(divItemQtd)
  return divItemCarrinho;
}







    $(document).ready(function() {
      $('#linkDescricao').click(function(event) {
       // event.preventDefault();
        $('.descricao').slideToggle();
      });
    });
    let qtd = 1;
    function increaseQuantity() {
  var quantityElement = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityElement.innerText);

  if (currentQuantity >= 1) {
    quantityElement.innerText = currentQuantity + 1;
    qtd ++;
  }
}

function decreaseQuantity() {
  var quantityElement = document.querySelector("#quantity");
  var currentQuantity = parseInt(quantityElement.innerText);

  if (currentQuantity > 1) {
    quantityElement.innerText = currentQuantity - 1;
    qtd --;
  }
}






let buyBtn = document.querySelector('#buyBtn');
let layout = document.querySelector('#layout');
let addCard = document.querySelector('#addCard');
let layContainer = document.querySelector('#layContainer');

layContainer.addEventListener('click', (event) => {
  // Evita que o clique no layContainer seja propagado para o layout
  event.stopPropagation();
});

layout.addEventListener('click', () => {
  layout.style.display = 'none';
});



buyBtn.addEventListener('click', ()=>{
    if(corSelecionada === undefined) {
       // alert("selecione uma cor !")
    }else {
        layout.style.display = 'grid';
       var quantityElement = document.getElementById("quantity");
       quantityElement.innerText = 1;
       const itemSelecionado = canetas[posicaoCorSelecionada];

  if (itemSelecionado.comprado == undefined || itemSelecionado.comprado == 0) {
    itemSelecionado.comprado = 0;
    const divItemCarrinho = gerarDivItemCarrinho(itemSelecionado);
    const addItemDiv = document.querySelector('#addItem');
    addItemDiv.appendChild(divItemCarrinho);
    upSubTotal()
    
    atualizarQuantidadeItensCarrinho();
    qtd = 1
  } else {
    let divUpdate = document.querySelector(`#cor${itemSelecionado.id}`)
    let divCartUpdate = document.querySelector(`#cor${itemSelecionado.id}Cart`)
    let spanUpdate = document.querySelector(`#spanCard${itemSelecionado.id}`);
    let spanUpdateCart = document.querySelector(`#spanCart${itemSelecionado.id}`);
    itemSelecionado.comprado += qtd;
    // dá update nos círculos span 
    spanUpdate.innerText = `${itemSelecionado.comprado}`
    spanUpdateCart.innerText = `${itemSelecionado.comprado}`
    divUpdate.innerHTML = `R$ ${Number(itemSelecionado.valor.toFixed(2)) + itemSelecionado.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${itemSelecionado.preco.toFixed(2)} cada</sub>`;
    divCartUpdate.innerHTML = `R$ ${Number(itemSelecionado.valor.toFixed(2)) + itemSelecionado.preco.toFixed(2)*qtd}<br><sub style="font-size: .8rem;">R$ ${itemSelecionado.preco.toFixed(2)} cada</sub>`;
    itemSelecionado.valor = Number(itemSelecionado.valor.toFixed(2)) + itemSelecionado.preco.toFixed(2)*qtd
    upSubTotal()
    qtd = 1
  }
       
       
       
    }
});

const cartContainer = document.querySelector(".cart-container");

//colocar quantidade no ícone de carrinho 
function atualizarQuantidadeItensCarrinho() {
  let quantidade = 0;
for (let i = 0; i < canetas.length; i++) {
 const objetos = canetas[i];
  if(objetos.comprado) {
      quantidade ++;
  }}
  const spanQuantidade = cartContainer.querySelector(".badge");
spanQuantidade.style.display = "block";
  if (spanQuantidade) {
    spanQuantidade.textContent = quantidade;
  } else {
    const novoSpan = document.createElement("span");
    novoSpan.classList.add("badge");
    novoSpan.textContent = quantidade;
    cartContainer.appendChild(novoSpan);
  }
}


const upIcon = document.querySelector("#upIcon");

upIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




function upSubTotal() {
    let subtotal = 0;
    let totalCaneta = 0;
    let quantidadeItensCarrinho = 0;
for (let i = 0; i < canetas.length; i++) {
  const objetos = canetas[i];
  if (objetos.valor) {
    subtotal += Number(objetos.valor);
    totalCaneta += objetos.comprado;
  }
  if(objetos.comprado) {
      quantidadeItensCarrinho ++;
  }
}
let cardTotal = document.querySelector('#cardTotal');
let cartTotal = document.querySelector('#cartTotal');
  let desconto = Math.floor(totalCaneta / 3) * 2;
  subtotal -= desconto;
cardTotal.innerHTML = `Total: R$ ${subtotal.toFixed(2)} / <s>R$${desconto.toFixed(2)}</s>`;
cartTotal.innerHTML = `Total: R$ ${subtotal.toFixed(2)} / <s>R$${desconto.toFixed(2)}</s>`;
}

let footerLink = document.querySelector('#footerLink');

footerLink.addEventListener("click", ()=>{
    window.location.href = `https://instagram.com/canetastagram?igshid=NjIwNzIyMDk2Mg==`;
})

let zapIcon = document.querySelector("#zapIcon");
zapIcon.addEventListener("click",()=>{
    window.location.href = `https://api.whatsapp.com/send?phone=558592978967`;
});
let fimBuy = document.querySelector("#fimBuy");
let fimBuy2 = document.querySelector("#fimBuy2");
function handleFimBuyClick() {
  let subtotal = 0;
  let totalCanetas = 0;
  let mensagem = `Olá! Gostaria de encomendar:`;

  for (let i = 0; i < canetas.length; i++) {
    const objeto = canetas[i];
    if (objeto.comprado >= 1) {
      if (objeto.valor) {
        subtotal += Number(objeto.valor);
        totalCanetas += objeto.comprado;
      }
      mensagem += `\n${objeto.comprado} ${objeto.nome} da cor ${objeto.cor}`;
    }
  }

  
  let desconto = Math.floor(totalCanetas / 3) * 2;
 
  subtotal -= desconto;

  mensagem += `\n\Total: R$ ${subtotal.toFixed(2)}`;
  console.log(mensagem);

  let mensagemCodificada = encodeURIComponent(mensagem);

  let linkWhatsApp = `https://api.whatsapp.com/send?phone=558592978967&text=${mensagemCodificada}`;

  window.location.href = linkWhatsApp;
}

fimBuy.addEventListener("click", ()=>{
    let countEnd = 0;
    for(let i = 0; i < canetas.length; i++){
        if(canetas[i].valor > 0) {
            countEnd ++;
        }
        
    }if(countEnd > 0) {
        handleFimBuyClick()
    }
});
fimBuy2.addEventListener("click", ()=>{
    let countEnd = 0;
    for(let i = 0; i < canetas.length; i++){
        if(canetas[i].valor > 0) {
            countEnd ++;
        }
        
    }if(countEnd > 0) {
        handleFimBuyClick()
    }
});


let avanBtn = document.querySelector('#avanBtn');
avanBtn.addEventListener("click",()=>{
    layout.style.display = 'none';
});
let cartCont = document.querySelector('#cartCont');
cartCont.addEventListener("click", handleCardLayoutClick);
cartCont.addEventListener("click",()=>{
 cardContainer.style.transform = "translateX(100%)";
 setTimeout(()=>{cardLayout.style.display = "none"}, 500)
});
let cardClose = document.querySelector("#cardClose");
cardClose.addEventListener("click",()=>{
    layout.style.display = 'none';
});

let cartIcon = document.querySelector("#cartIcon");
let cardLayout = document.querySelector("#cardLayout");
let cardContainer = document.querySelector("#cardContainer");
cartIcon.addEventListener("click",()=>{
    cardLayout.style.display = "block"
    if(cardLayout.style.display == "block") {
        setTimeout(()=>{cardContainer.style.transform = "translateX(0%)"}, 100)
    }
});
function handleCardLayoutClick() {
  cardContainer.style.transform = "translateX(100%)";
  setTimeout(() => {
    cardLayout.style.display = "none";
  }, 500);
}

cardLayout.addEventListener("click", handleCardLayoutClick);
let cartExit = document.querySelector('#cartExit');
cartExit.addEventListener("click", handleCardLayoutClick);

cardContainer.addEventListener('click', (event) => {event.stopPropagation();});

// mover pra outra pagina

let recBtn = document.querySelector("#recBtn");

recBtn.addEventListener("click", ()=>{
    location.href = "index.html"
})
