<template>
    <div
   
     class="py-4 px-4">
        <div class=" rounded-md shadow-md hover:shadow-2xl py-4 px-5 h-[320px] shadow-indigo-950 hover:bg-purple-600 transition duration-1000 relative" :class="mety.id%2===0?'bg-indigo-700':'bg-sky-600'">
            <div class="absolute top-4 left-4 opacity-100">
                <i class="fas fa-award fa-lg text-indigo-950"></i>
            </div>
            <div class="absolute opacity-40 right-0" v-if="mety.id===2">
                <img src="../../public/adobe-illustrator-svgrepo-com.svg" alt="" class="w-16">
            </div>
            <div class="absolute opacity-40 right-0 top-12" v-if="mety.id===2">
                <img src="../../public/172336_photoshop_icon.png" alt="" class="w-16">
            </div>
            <div class="absolute opacity-40 -top-12 right-0" v-if="mety.id===1">
                <img src="../../public/laravel-1-logo-svgrepo-com.svg" alt="" class="w-16">
            </div>
            <div class="absolute opacity-40 bottom-12 right-0" v-if="mety.id===2">
                <img src="../../public/figma-1-logo-svgrepo-com.svg" alt="" class="w-16">
            </div>
            <div class="absolute opacity-40 -bottom-12 right-0" v-if="mety.id===3">
                <img src="../../public/code-square-svgrepo-com.svg" alt="" class="w-16">
            </div>
            <div
                class="absolute overflow-hidden top-4 opacity-60 left-4 w-4 h-20 rounded-t-2xl bg-fuchsia-900 shadow-lg shadow-fuchsia-900">
            </div>
            <div class="px-4">
                <p class="font-bold text-indigo-950">{{ mety.title }}</p>
            </div>
            <div class="py-2 px-5">
                <p class="indent-4 comic py-2">{{ mety.description }} </p>
            </div>
            <div class="" v-if="mety.framework.length>0">
                <div class="text-right px-4 py-1">
                    <p class="font-bold underline underline-offset-2">Framework et langage utlisée</p>
                </div>
                <div class="font-bold text-indigo-950" v-for="(value,index) in mety.framework" :key="index">
                    <div>
                        <p class="text-[14px]">{{ value }}</p>
                    </div>
                </div>
            </div>
            <div class="absolute top-7 right-4" v-if="mety.framework.length>0">
                <i class="fab fa-php fa-2x rotate-[45deg] text-sky-800"></i>
            </div>
            <div class="absolute top-20 right-4" v-if="mety.framework.length>0">
                <i class="fab fa-laravel fa-2x text-red-800"></i>
            </div>
            <div class="absolute top-32 right-4" v-if="mety.framework.length>0">
                <i class="fab fa-wordpress fa-2x  text-stone-800"></i>
            </div>
            <div class="" v-if="mety.outile.length>0">
                <div class="text-right px-4 py-1">
                    <p class="font-bold"></p>
                </div>
                <div class="flex space-x-4 absolute bottom-4 right-10 font-bold ">
                <div class="" v-for="(value,index) in mety.outile" :key="index">
                   <div class="flex">
                        <span class="hover:text-white cursor-pointer">{{ value }} </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        mety:{
            type:Object,
            require:true
        },
        index:{
            type:Object,
            require:true
        }
    }
}
</script>
<style lang="">
    
</style>