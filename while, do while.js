    <script>
        var ulWhile = document.getElementById("daftarAngkaWhile");
        var angkaWhile = 1;

        while (angkaWhile <= 20) {
            var liWhile = document.createElement("li");
            liWhile.textContent = angkaWhile;
            ulWhile.appendChild(liWhile);
            angkaWhile++;
        }
    </script>
    <script>
        var ulDoWhile = document.getElementById("daftarAngkaDoWhile");
        var angkaDoWhile = 1;
        do {
            var liDoWhile = document.createElement("li");
            liDoWhile.textContent = angkaDoWhile;
            ulDoWhile.appendChild(liDoWhile);
            angkaDoWhile++;
        } while (angkaDoWhile <= 30);
    </script>
