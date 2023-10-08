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
