<template>
    <div>
        <div class="" v-on:scroll="mety">
            <div class="media gap-4 px-4">
                <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out" data-aos-mirror="true"
                    class="col-span-3 rounded-full shadow-lg shadow-pink-800 h-[100px] bg-opacity-50 duration-1000 hover:hue-rotate-90 flex justify-center items-center h-42 bg-blue-600">
                    <div class="text-center">
                        <p class="font-bold text-lime-950 underline">
                            <span class="fas fa-user-circle px-2"></span>Client
                        </p>
                        <p class="font-bold text-[22px]" id="text1">{{ text1 }} </p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="600" data-aos-easing="ease-in-out" data-aos-mirror="true"
                    class="col-span-3 rounded-full shadow-lg shadow-pink-800 h-[100px] bg-opacity-50 duration-1000 hover:hue-rotate-90 flex justify-center items-center h-42 bg-rose-600">
                    <div>
                        <p class="lorem font-bold text-lime-950 underline">Invite
                            <span class="fas fa-user-plus px-4"></span>
                        </p>
                        <p class="id" id="text2"></p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out" data-aos-mirror="true"
                    class="col-span-3 rounded-full shadow-lg shadow-pink-800 h-[100px] bg-opacity-50 duration-1000 hover:hue-rotate-90 flex justify-center items-center h-42 bg-sky-600">
                    <div>
                        <p class="lorem font-bold text-lime-950 underline">Voir
                            <fas class="fas fa-bell px-2"></fas>
                        </p>
                        <p class="id" id="text3"></p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                    class="col-span-3 rounded-full shadow-lg shadow-pink-800 h-[100px] bg-opacity-50 duration-1000 hover:hue-rotate-90 flex justify-center items-center h-42 bg-purple-600">
                    <div>
                        <p class="lorem font-bold text-lime-950 underline">Plus
                            <fas class="fas fa-plus px-"></fas>
                        </p>
                        <p class="id" id="text4"></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import AOS from "aos"
export default {
    data() {
        return {
            text1:"",
        }
    },
    methods: {
        mety(event)
        {

        },
       comme(event)
       {
        console.log(event)
        const app = this.$el;
        const win = window.scrollY
        console.log(win);
       }
    },
    beforeDestroy() {
        window.addEventListener('scroll',this.comme());
        AOS.init();
    },
    mounted() {
        window.addEventListener('scroll',this.comme());
        AOS.init();
    },
}
</script>
