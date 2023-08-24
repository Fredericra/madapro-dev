<template>
    <div class="relative transition-all duration-1000">
        <div class="absolute -left-52 -rotate-[45deg]">
            <img src="../../public/app1.png" alt="" class=" opacity-30 duration-1000">
        </div>
        <div class="fixed opacity-20 right-0 shadow-lg shadow-indigo-950">
            {{ sco }}
            <img src="../../public/3d-render-code-testing-functional-test-usability.jpg" alt="" class="animate-pulse duration-1000 hue-rotate-180">
        </div>
        <div>
            <Head />
        </div>

        <div class="py-4 px-4">
            <Expert  class=" opacity-100"/>
        </div>
        <div class="py-8 px-10 text-left font-bold text-indigo-950 underline underline-offset-4 relative">
            <p class="text-[32px]">Plus d'équipe, plus rapidité</p>
        </div>
        <div class="media">
            <Createur 
            data-aos="fade-up" data-aos-delay="600"
             data-aos-offset="200" data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                 data-aos-mirror="true" data-aos-once="false"
                data-aos-anchor-placement="top-center"
                class="col-span-4 opacity-100" v-for="(value, index) in donne" :donne="value"
                :key="index.id" />
        </div>
        <div class="py-8 px-10 text-right font-bold text-indigo-950 underline">
            <p class="text-[32px]">Votre bénefice et profis à nous</p>
        </div>
        <div class="media">
            <Plus v-for="value in echo" :index="value.id" :donne="value" class="col-span-3 opacity-100" />
        </div>
        <div class="mt-10">
            <Foot/>
        </div>
        <div class="py-2 px-5">
            <div class="">
                <Nou/>
            </div>
        </div>
        <div class="mt-10">
            <div class="bg-gray-400">
                <div class="grid grid-cols-2 items-center py-2">
                    <div class="text-center col-span-1 flex justify-center items-center">
                        <p class="flex items-center text-sm justify-center">
                        <span class="text-white  font-bold">devwebmada</span>
                        <span class="fas fa-copyright text-white px-4"></span>
                        <span class="text-indigo-400 px-2 "></span>
                        </p>
                    </div>
                    <div class="text-sm px-4 col-span-1">
                        <p class="text-white">Madagascar, Antanarivo le 22/08/2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nou from "./Nouveaux.vue"
import AOS from "aos"
import Foot from "./Foot.vue";
import Profil from "./Profi.json"
import Plus from "./Plus.vue";
import Createur from "./Createur.vue";
import Expert from "./Expert.vue"
import Head from './Head.vue';
export default {
    components: {
        Head, Expert, Createur, Plus, Foot,Nou
    },
    data() {
        return {
            dis: "",
            echo: Profil,
            donne: [
                {
                    id: "1",
                    name: "RANDRIATSILAVINA",
                    Prenom: "Frederic",
                    Dev: "Développeur | FRONT-END",
                    lagage: "Javascript",
                    profil: " Passionné de developpement Front-End , je suis spécialise dans la crétion d'interfaces utisateur interactives et réactives en utilisant Javascript.Expertise particulière en VUE JS ",
                    image: "../../public/frederic.jpg",
                    lien: "https://ericrandriacv.onrender.com/",
                    framework: [
                        "Vue js",
                    ]

                },
                {
                    id: "2",
                    name: "RANDRIATSILAVINA",
                    Prenom: "Frederic",
                    Dev: "Développeur | BACK-END",
                    lagage: "PHP",
                    profil: "En tant que développeur Back-End passionné et expérimenté, je mets en oeuvre des solutions robustes en utilisant Laravel pour créer des applications web puissantes et évolutifs. ",
                    image: "../../public/frederic.jpg",
                    lien: "https://ericrandriacv.onrender.com/",
                    framework: [
                        "Laravel",
                    ]

                },
                {
                    id: "3",
                    name: "RAFETISANIMANANA",
                    Prenom: "Jean",
                    Dev: "Désigneur | développeur ",
                    lagage: "Figma | Illustrator | Photoshop",
                    profil: "Désigneur dans dommaine web et image. Talentueux dans dommaine désign avec outil plus récent en de nos téchonogie. ADOBE XD | PHOTOSHOP | ILLUSTRATOR | FIGMA",
                    image: "../../public/jean.jpg",
                    lien: "",
                    framework: [
                        "Vue js",
                        "Laravel",
                        "WordPress"
                    ]

                },

            ]
        }
    },
    props:{
        sco:{
            type:Object,
            require:true
        }
    },
    methods: {
        mety(event)
        {
           const win = window.scrollY;
           console.log(event)
           console.log(win);
        }
    },
    beforeDestroy() {
        AOS.init();
        window.addEventListener('scroll',this.mety())
    },
    mounted() {
        AOS.init();
        window.addEventListener("scroll",this.mety())
    },
}
</script>
<style lang="">
    
</style>