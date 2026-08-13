const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const intro = document.getElementById("intro");
const scene = document.getElementById("scene");
const storyText = document.getElementById("story-text");
const mj = document.getElementById("mj");
const spiderman = document.getElementById("spiderman");
const together = document.getElementById("together");
const book = document.getElementById("book");
const continueBtn= document.getElementById("continueBtn");
const chapter2 = document.getElementById("chapter2");
const chapter2Message = document.getElementById("chapter2-message");
const chapter2Message2 = document.getElementById("chapter2-message-2");
const finalMessage = document.getElementById("final-message");
const finalSignature = document.getElementById("final-signature");

let storyStarted = false;
let encounterDone = false;




// Preparar todo al cargar
spiderman.hidden = false;
spiderman.style.opacity = "1";


mj.hidden = false;
mj.style.opacity = "0";


together.hidden = true;
together.style.opacity = "0";




// Botón Comenzar
startBtn.addEventListener("click", () => {


    storyStarted = true;
    encounterDone = false;


    // Reiniciar personajes
    spiderman.hidden = false;
    spiderman.style.display = "block";
    spiderman.style.opacity = "1";
    spiderman.style.animation = "spidermanFly 8s ease-in-out infinite";


    mj.hidden = false;
    mj.style.display = "block";
    mj.style.opacity = "0";
    mj.style.transform = "translateY(20px)";


    together.hidden = true;
    together.style.opacity = "0";


    // Reiniciar música
    music.currentTime = 0;


    // Iniciar música
    music.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });


    // Ocultar introducción
    intro.style.transition = "opacity 2s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        scene.style.display = "block";
    }, 2000);

});




// Control de la historia
music.addEventListener("timeupdate", () => {


    if (!storyStarted) return;


    const currentTime = music.currentTime;


    console.log("Tiempo:", currentTime);




    // ─────────────────────────
    // PRIMERA FRASE
    // ─────────────────────────


    if (currentTime >= 8 && currentTime < 16) {


        storyText.textContent =
            "Hay personas que llegan a tu vida sin hacer mucho ruido...";


        storyText.style.opacity = "1";
    }




    // Desaparece primera frase
    if (currentTime >= 16 && currentTime < 18) {


        storyText.style.opacity = "0";
    }




    // ─────────────────────────
    // SEGUNDA FRASE
    // ─────────────────────────


    if (currentTime >= 18 && currentTime < 28) {


        storyText.textContent =
            "Y aun así, terminan ocupando un lugar muy especial.";


        storyText.style.opacity = "1";
    }




    // TERCERA FRASE
    if (currentTime >= 30 && currentTime < 40) {


        storyText.textContent =
            "A veces no sabemos exactamente cuándo empezó...";


        storyText.style.opacity = "1";
    }




    // CUARTA FRASE
    if (currentTime >= 42 && currentTime < 50) {


        storyText.textContent =
            "Solo sabemos que, poco a poco, esa persona comienza a importar más de lo que imaginamos.";


        storyText.style.opacity = "1";
    }




    // QUINTA FRASE
    if (currentTime >= 52 && currentTime < 62) {


        storyText.textContent =
            "Y cuando te das cuenta... ya es imposible ignorar lo que sientes.";


        storyText.style.opacity = "1";
    }


    // SEXTA FRASE
    if (currentTime >= 64 && currentTime < 74) {


        storyText.textContent =
            "Quizá nunca te lo había dicho de esta manera...";


        storyText.style.opacity = "1";
    }




    // SÉPTIMA FRASE
    if (currentTime >= 76 && currentTime < 86) {


        storyText.textContent =
            "Pero hay algo que llevo tiempo queriendo decirte.";


        storyText.style.opacity = "1";
    }




    // ─────────────────────────
    // APARECE MJ
    // ─────────────────────────


    if (currentTime >= 130 && currentTime < 138) {


        mj.style.opacity = "1";
        mj.style.transform = "translateY(0)";


        storyText.textContent =
            "Porque entre tantas personas... tú terminaste siendo alguien muy especial para mí.";


        storyText.style.opacity = "1";
    }




    // SIGUIENTE
    if (currentTime >= 138 && currentTime < 146) {


        storyText.textContent =
            "Y, aunque no hemos compartido momentos juntos... hubo algo en ti que llamó mi atención desde aquel día.";


        storyText.style.opacity = "1";
    }




    // ANTES DEL ENCUENTRO
    if (currentTime >= 147 && currentTime < 155) {


        storyText.textContent =
            "Desde entonces, esa idea nunca terminó de irse de mi cabeza.";


        storyText.style.opacity = "1";
    }




    // ─────────────────────────
    // MJ DESAPARECE
    // ─────────────────────────


    if (currentTime >= 150 && currentTime < 155) {


        mj.style.opacity = "0";
        mj.style.transform = "translateY(20px)";
    }




    // ─────────────────────────
    // ENCUENTRO
    // ─────────────────────────


    if (currentTime >= 155 && !encounterDone) {


        encounterDone = true;


        // Detener a Spider-Man
        spiderman.style.animation = "none";


        // Desaparecer suavemente
        spiderman.style.opacity = "0";
        mj.style.opacity = "0";


        // Mostrar imagen de los dos
        together.hidden = false;


        setTimeout(() => {
            together.style.opacity = "1";
        }, 50);
    }




    // ─────────────────────────
    // DESPUÉS DEL ENCUENTRO
    // ─────────────────────────


    // Primera frase
    if (currentTime >= 157 && currentTime < 163) {


        storyText.textContent =
            "Y fue entonces cuando me di cuenta...";


        storyText.style.opacity = "1";
    }




    // Segunda frase
    if (currentTime >= 163 && currentTime < 171) {


        storyText.textContent =
            "Que desde aquel día, no he podido dejar de pensar en ti.";


        storyText.style.opacity = "1";
    }




    // Pausa antes de la confesión
    if (currentTime >= 171 && currentTime < 175) {


        storyText.style.opacity = "0";
    }




    // La confesión
    if (currentTime >= 175 && currentTime < 181) {


        storyText.textContent =
            "Me gustas bastante ❤️";


        storyText.style.opacity = "1";
    }




    // ─────────────────────────
    // DESPUÉS DE "ME GUSTAS"
    // ─────────────────────────


    if (currentTime >= 181 && currentTime < 189) {


        storyText.textContent =
            "Y aunque todavía no nos conocemos al 100%...";


        storyText.style.opacity = "1";
    }




    if (currentTime >= 189 && currentTime < 198) {


        storyText.textContent =
            "Me gustaría tener la oportunidad de conocerte mejor.";


        storyText.style.opacity = "1";
    }




    if (currentTime >= 198 && currentTime < 205) {


        storyText.textContent =
            "Sin prisas...";


        storyText.style.opacity = "1";
    }




    if (currentTime >= 205 && currentTime < 212) {


        storyText.textContent =
            "Sin presiones...";


        storyText.style.opacity = "1";
    }




    if (currentTime >= 212 && currentTime < 220) {


        storyText.textContent =
            "Solo siendo nosotros.";


        storyText.style.opacity = "1";
    }




    // ─────────────────────────
    // CIERRE DE LA CONFESIÓN
    // ─────────────────────────


    if (currentTime >= 220 && currentTime < 228) {


        storyText.textContent =
            "No sé qué pueda pasar entre nosotros...";


        storyText.style.opacity = "1";
    }




    if (currentTime >= 228 && currentTime < 237) {


        storyText.textContent =
            "Pero me gustaría descubrirlo contigo ❤️";


        storyText.style.opacity = "1";
    }


});

// ─────────────────────────
// APARECE EL LIBRO
// ─────────────────────────

let bookShown = false;

music.addEventListener("timeupdate", () => {

    if (!storyStarted || bookShown) return;

    const currentTime = music.currentTime;

    if (currentTime >= 240) {

        bookShown = true;

        storyText.style.opacity = "0";
        together.style.opacity = "0";

        setTimeout(() => {

            together.hidden = true;

            book.style.display = "block";

            setTimeout(() => {
                book.style.opacity = "1";
            }, 100);

        }, 1500);
    }

});


// ─────────────────────────
// BOTÓN CONTINUAR
// ─────────────────────────

continueBtn.addEventListener("click", () => {

    book.style.opacity = "0";

    setTimeout(() => {

        book.style.display = "none";
        chapter2.style.display = "block";

        setTimeout(() => {
            chapter2.style.opacity = "1";

        }, 100);

        setTimeout(() => {
            chapter2Message.style.opacity = "1";
        }, 2500);

        setTimeout(() => {
            chapter2Message2.style.opacity = "1";

        }, 5500);

        setTimeout(() => {
            finalMessage.style.opacity = "1";
        }, 9000);

        setTimeout(() => {
            finalSignature.style.opacity = "1";
        }, 12500);

        

    }, 1500);

});

