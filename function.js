function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here'; // mesma coisa que a função fn
const arrowFn2 = () =>{
   // Mais de uma expressão
    return 'Code here';
}

// Funções também são objectos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);
console.log(arrowFn());

// Receber parâmetros 
const logValue =  value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);

// Receber e retornar funções
const controlFnExec => fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}
const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // não execitará a função fn
handleFnExecution(); // não execitará a função fn

// controlFnExec como função 
function controlFnExec(fnParam){
    return function(allowed) {
        if(allowed){
            fnParam();
        }
    }
}