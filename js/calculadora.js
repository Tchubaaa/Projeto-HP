        var x = 0
        function insert(num)
        {   
            var numero = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = numero + num;
            x = numero +num
        }
        function clean()
        {
            document.getElementById('display').innerHTML = "";
            x = 0
        }
        function back()
        {
            var resultado = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
            x = resultado.substring(0, resultado.length -1)
        }
        function calcular()
        {
            var resultado = document.getElementById('display').innerHTML;
            if(resultado)
            {
                document.getElementById('display').innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('display').innerHTML = "Nada..."
            }
        }

        function pow2(){
            document.getElementById('display').innerHTML = Math.pow(eval(x), 2);
            x = Math.pow(eval(x), 2)
        }
        function pow3(){
            document.getElementById('display').innerHTML = Math.pow(eval(x), 3);
            x = Math.pow(eval(x), 3)
        }
        function sqrt1(){
            document.getElementById('display').innerHTML = Math.sqrt(eval(x));
            x = Math.sqrt(eval(x))
        }
        function cent(){
            document.getElementById('display').innerHTML = Math.sqrt(eval(x));

        }


