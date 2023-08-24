<template lang="">
    <div data-aos="fade-up" data-aos-delay="400">
        <div class="divide-x-5 divide-blue-600 space-y-4">
                        <div class="text-center text-yellow-950">
                            <p class="text-[22px] font-bold">Contact nous</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="" class="flex items-center space-x-4 btn2">
                            <div class="">
                                <i class="fab fa-whatsapp fa-lg text-sky-600"></i>
                            </div>
                            <div class="text-sky-600">+261 32 22 303 69 | +261 34 94 931 57</div>
                            </a>
                        </div>
                        <div>
                            <a href="" class="flex items-center space-x-4 btn1">
                            <div class="">
                                <img src="../../public/gmail-icon-logo-svgrepo-com.svg" alt="" class="h-4">
                            </div>
                            <div class="text-sky-600 underline">madagasikaraprodev@gmail.com</div>
                            </a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61550333048017" class="flex items-center space-x-4 btn">
                                <div class="">
                                    <img src="../../public/facebook-svgrepo-com.svg" alt="" class="h-4">
                                </div>
                                <div class="text-sky-600 underline">madagasikaraprodev</div>
                            </a>
                        </div>
                    </div>
    </div>
</template>
<script>
import AOS from "aos"
export default {
mounted() {
    AOS.init()
},
}
</script>
<style lang="">
    
</style>