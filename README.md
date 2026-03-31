# JavaScript

<h2>O que é JavaScript?</h2>
O JavaScript é uma linguagem de programação interpretada de alto nível, essencial para criar sites dinâmicos e interativos. Usado juntamente ao HTML e o CSS, ele permite que elementos da página sejam manipulados, processar dados e criar animações diretamente do navegador do usuário.
<h2>O que ele adiciona no HTML</h2>
Dentro de um documento HTML, o JavaScript adiciona interatividade, comportamento e manipulação de elementos da página de forma mais rápida e localizada.
<h2>Arquivo Script.js</h2>
Em um arquivo separado, normalmente nomeado de <strong>Script.js</strong>, o JavaScript serve para a organização do código, facilita o manipulamento do site e melhora o desempenho.
<h2>Variáveis no JS</h2>
Variáveis especificadamente no JavaScript são caixas para armazenar dados. Usasse as declarações <strong>var</strong>,<strong>let</strong> e <strong>const</strong>.
<br>
<i>Var: A maneira mais antiga de declarar uma variável, com escopo global ou de função;</i>
<br>
<br>
<i>Let: Usados para dados que podem ter seus dados alterados;</i>
<br>
<br>
<i>Const: Usado em constantes, valores fixos, não podem ser <strong>reatribuídos</strong>depois da primeira atribuição;</i>
<br>
<br>
<i>Escopo Global: Uma variável que quando declarada no escopo global, se torna acessível e modificável em qualquer lugar do script;</i>
<br>
<br>
<i>Escopo função: As variáveis que foram criadas de uma função ficam permanentemente presas ao bloco daquela função, e não é possível acessá-las de fora;</i>
<br>
<br>
<i>Escopo bloco: visibilidade de variáveis dentro de um par de chaves, as variáveis que foram declaradas não podem ser acessadas fora dele;</i>
<br>
<br>
<h2>Operadores aritméticos principais no JS</h2>
Esses operadores servem para realizar cálculos matemáticos fundamentais, esses operadores são:
<br>
<br>
<h4>+ : Serve para somar os valores;</h4>
<h4>- : Serve para subtrair os valores;</h4>
<h4>* : Serve para multiplicar os valores;</h4>
<h4>/ : Serve para dividir os valores;</h4>
<h4>% : Serve para verificar o resto da divisão dos valores;</h4>
<h4>** : Serve para exponenciar os valores;</h4>
<h4>++ : Serve para aumentar o número da variável em 1;</h4>
<h4>-- : Serve para diminuir o número da variável em 1;</h4>
<h4>> : Serve para verificar se o valor à esquerda é maior que o valor da direita;</h4>
<h4>< : Serve para verificar se o valor à esquerda é menor que o valor da direita;</h4>
<h4>>= : Serve para verificar se o valor à esquerda é maior ou igual que o valor da direita;</h4>
<h4><= : Serve para verificar se o valor à esquerda é menor ou igual que o valor da direita;</h4>
<h4>&&, and : Retorna verdadeiro se todas as condições da função forem verdadeiras;</h4>
<h4>||, or : Retorna verdadeiro se pelo menos uma das condições da função forem verdadeiras;</h4>
<h4>!, not : <strong>NÃO</strong> inverte o valor lógico da expressão;</h4>
<br>
<br>
<h4>== : Serve para verificar se os valores são iguais, mas não se importa com o tipo dos valores;</h4>
<h4>=== : Serve para verificar se os valores são iguais, mas os valores <strong>precisam ser exatamente iguais</strong>;</h4>
<h4>!= : Serve para verificar se os valores são diferentes, mas não se importa com o tipo dos valores;</h4>
<h4>!== : Serve para verificar se os valores são diferentes, mas os valores <strong>precisam ser exatamente iguais</strong>;</h4>
<h3>Exemplos</h3>
5 == ”5”
O operador tenta converter a string em número antes de comparar, retorna true;
<br>
5 === “5”
Verifica tanto o tipo quanto o número, como um é número e outro é string, retorna false;
<br>
5 != “5”
O operador tenta converter a string em número antes de comparar, mas como possui o ! retorna false;
<br>
5 !== “5”
Verifica tanto o tipo quanto o número, como um é número e outro é string, mas como possui o ! retorna true;
<br>
<br>
<h1>Estruturas condicionais</h1>
<h4>if : Faz a execução de um código de um bloco apenas <i>CASO</i> uma condição for verdadeira;</h4>
<h4>if...else : Faz a execução do primeiro bloco de código para o primeiro bloco cuja condição for verdadeira;</h4>
<h4>switch : Estrutura de controle de fluxo, faz a avaliação de uma expressão e executa o bloco de código com base em <i>cases</i>;</h4>
<h1>Estruturas de repetição</h1>
Permitem a execução de um bloco de código várias vezez, automatizando tarefas.
<h4>for : Executa a repetição de um bloco de código com base em uma condição;</h4>
<h4>while : Executa a repetição de um bloco de código enquanto uma condição for verdadeira;</h4>
<h1>Funções</h1>
É um bloco de código reutilizável, criado para realizar uma tarefa específica, sendo definido pela palavra <strong><i>function</i></strong>. São usados para organizar códigos, aceitam parâmetros e podem retornar resultados utilizando <strong><i>return</i></strong>. Para chamar uma função é utilizado o <strong><i>nome</i></strong> dela e seguido de <strong><i>parênteses</i></strong>. Se a função exigir parênteses, coloque os valores dentro deles.<br>
As <strong>funções com parâmetros</strong> passam informações para dentro da função, tornando elas mais dinâmicas, reutilizáveis e flexíveis.<br>
As <strong>funções com retorno</strong> são blocos de código que após realizarem a sua função, utilizam a palavra <strong><i>return</i></strong> para enviar um valor de volta para onde a função foi chamada, podendo ser armazedo em uma variável, exibido no console ou usado em outras expressões.
