    AOS.init();

    const final_time = new Date("2026-07-12T23:00:00");
    const timeStempDoEvent=final_time.getTime();

    const contaTime= setInterval(()=>{
        const agora = new Date();
        const tempoAtual = agora.getTime();

        const disEvent= timeStempDoEvent - tempoAtual;

        const diaEmMs = 1000* 60 *60* 24;
        const horasEmMs = 1000* 60 *60;    
        const minEmMs = 1000* 60;

        const diaEvent =Math.floor(disEvent/diaEmMs);
        const horasEvent =Math.floor((disEvent%diaEmMs)/horasEmMs);
        const minEvent =Math.floor((disEvent%horasEmMs)/minEmMs);
        const segEvent =Math.floor((disEvent%minEmMs)/1000);

        document.getElementById("contador").innerHTML=(` TIC TAC: ${diaEvent}d ${horasEvent}h ${minEvent}m ${segEvent}s`);
        
        if(disEvent < 0){
             clearInterval(contaTime);
             document.getElementById("contador").innerHTML=(`FIM DE JOGO, SEU TEMPO ACABOU! ME DIZ, VOCÊ VENCEU OU PERDEU`);


        }
        },1000);
