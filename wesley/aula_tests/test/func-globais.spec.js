import { media } from "..";

var val1
var val2 
var val3

beforeAll(()=> {
    console.log("Antes dos testes");
    val1= 4
    val2= 8
    val3= 7
});

afterEach(()=>{
    console.log("Depois de cada teste");
    val1= 3
    val2= 5
    val3= 4
});

afterAll (()=>{
    console.log("Após os teste");
    val1= null;
    val2= null;
    val3= null;
});

describe ('Checando média',() => {
  it('Deve retornar se a média das notas 4, 8, 7 é maior que 6 ', () => {
    console.log(val1+ "" + val2 + "" + val3);
    expect(media(val1,val2,val3)).toBeGreaterThanOrEqual(6);
  });
  it('Deve retornar se a média das notas 3, 5, 4 é menor que 6 ', () => {
    console.log(val1+ "" + val2 + "" + val3);
    expect(media(val1,val2,val3)).toBeLessThanOrEqual(6);
  });

})
