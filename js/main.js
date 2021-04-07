var topButton = document.getElementById("top-button");

        document.addEventListener("scroll", scrollFunction);

        function scrollFunction(){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                topButton.style.visibility = "visible";
            }else{
                topButton.style.visibility = "hidden";
            }
        }

        function topFunction(){
            document.documentElement.scrollTop = 0;
        }

        AOS.init({
            offset: 250,
            duration: 1000,
            once: true
        });