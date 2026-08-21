const botao = document.querySelector("button")
const preco = document.getElementById("preco")
const qntd = document.getElementById("qntd")
const dinheiro = document.getElementById("dinheiro")
const resultado = document.querySelector("p")

botao.addEventListener("click", function calcular(){

    const precoProd = preco.valueAsNumber
    const qntdProd = qntd.valueAsNumber
    const dinheiroProd = dinheiro.valueAsNumber

    if(precoProd < 0 || qntdProd < 0 || dinheiroProd < 0 || precoProd === "" || qntdProd === "" || dinheiroProd === ""){
        alert("digite um valor válido") 
    } 

    const calcular = (precoProd * qntdProd) - dinheiroProd
    const calculado = calcular.toLocaleString("pt-br", {style: "currency", currency:"BRL"} )

    if(calcular < 0){
        resultado.innerText = `TROCO = ${calculado}`
    }else if(calcular > 0){
        resultado.innerText = `DINHEIRO INSUFICIENTE. FALTAM ${calculado}`
    }
    

})
