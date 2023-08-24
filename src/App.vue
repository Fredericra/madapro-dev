<template>
  <div class="bg-gradient-to-b to-fuchsia-200 from-blue-400 menu cursor-pointer">
    <!-- changement dans premier lieu -->
    <div class="flex justify-center h-screen items-center font-bold text-[22px] space-x-4" id="boss" v-if="start">
      <span class="letter">C</span>
      <span class="letter">H</span>
      <span class="letter">A</span>
      <span class="letter">R</span>
      <span class="letter">G</span>
      <span class="letter">M</span>
      <span class="letter">E</span>
      <span class="letter">N</span>
      <span class="letter">T</span>
      <span class="letter">.</span>
      <span class="letter">.</span>
      <span class="letter">.</span>
    </div>
    <!-- changement dans premier lieu -->
    <!-- corp -->
    <div class="menu" v-else>
      <div class=" h-screen flex justify-center items-center relative" id="text">
              <div class="absolute top-4 left-4">
                <div class="letter1 w-4 h-4 rounded-full bg-purple-400"></div>
                <div class="letter1 w-4 h-4 rounded-full bg-indigo-400"></div>
                <div class="letter1 w-4 h-4 rounded-full bg-orange-600"></div>
                <div class="letter1 w-4 h-4 rounded-full bg-stone-400"></div>
                <div class="letter1 w-4 h-4 rounded-full bg-fuchsia-900"></div>
              </div>
              <div class="absolute bottom-2 right-5 flex space-x-6">
                <div class="w-4 h-4 bas rounded-full bg-fuchsia-700"></div>
                <div class="w-4 h-4 bas rounded-full bg-fuchsia-700"></div>
                <div class="w-4 h-4 bas rounded-full bg-fuchsia-700"></div>
              </div>
      </div>
      <div class="hidden transition-transform duration-700 menu relative" id="corp">
          <Corp :sco="comm"/>
      </div>
    </div>
    <!-- corp -->
  </div>
</template>
<style>
  
</style>
<script>
import AOS from "aos"
import Corp from "./Pages/Corp.vue";
export default {
  components:{
    Corp
  },
  data() {
    return {
      start: true,
      accepte: false,
      comm:0
    }
  },
  methods: {
    commence() {

      const boss = document.getElementById('boss');
      const sart = performance.now();
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.start = false;
        boss.classList.add('hidden');
      }, sart + 1000);
      //hello bien

    },
    recomme() {
      const winver = window.scrollY;
      this.comm=winver;
      const soratra = [
        "Madagascar web professionel",
        "Création d'application web",
        "Téchnologie avancé et recent",
        "Site intéractive et réactive",
        "Maintenace de site web",
        "Désigneur et intégration web",
        "Vous être presque, lancez-vous",
        "Bievenue sur madagasikaradevpro"
      ];
      const text = document.getElementById('text');
      const child = document.createElement('p');
     
      let indexing = 0;
      let metin = 0;
      function animation(metin)
      {
    
     const name = soratra[indexing];
        let write = ""
        const p = document.createElement('p');
        text.appendChild(p);
        let index = -1;
        if(indexing<soratra.length)
        {
          const interval = setInterval(() => {
            index++;
            if(index<name.length)
            {
              write+="<span class='letter transition duration-1000 opacity-100' id='sous'>"+name[index]+"</span>";
              p.classList.add('transtion-all','duration-1000','opacity-75');
              p.innerHTML = write;
            }
            else{
              clearInterval(interval)
              let nombre = name.length;
              const letter = setTimeout(() => {
                const sous = document.getElementById('sous');
                sous.classList.add('text-[22]','transtion-all',"duration-1000");
              },6000 );
              const timeout = setTimeout(() => {
                const timer = setInterval(() => {
                nombre--
                if(nombre>=0)
                {
                  p.classList.add('text-blue-400',"letter")
                  p.textContent = p.textContent.slice(0,-1);
                }
                else{
                  clearInterval(timer)
                 
                  setTimeout(animation,indexing++, p.innerHTML="",6000);
                }
              }, 10);
              clearTimeout(timeout);
              },6000);
             
            }
            
          }, 20);
        }
        else{
          const corp = document.getElementById('corp');
          corp.classList.add('block');
          corp.classList.remove('hidden');
          text.classList.add('hidden');
          console.log("yes")
        }

      }
      animation();
    

    }
  },
  beforeDestroy() {
    this.commence();
    const mety = performance.now();
    const timer = setTimeout(() => {
      this.recomme();
    }, mety + 2000);


  },
  mounted() {
    this.commence();
    AOS.init();
    const mety = performance.now();
    const timer = setTimeout(() => {
      this.recomme();
    }, mety + 2000);
  }
}
</script>
<style lang="">
  
</style>