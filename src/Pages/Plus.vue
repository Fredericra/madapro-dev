<template>
    <div>
        <div class="px-10 py-4">
            <div class="relative h-[340px] hover:h-[300px] hover:rotate-[12deg] hover:bg-purple-400 shadow-lg shadow-blue-950 px-4 transtion duration-1000 hover:-hue-rotate-90 py-4 rounded-md hover:shadow-2xl">
                <div class="text-center">
                    <p class=" bg-clip-text text-transparent bg-gradient-to-r font-extrabold hover:text-indigo-950" :class="donne.id%2===0?' from-purple-950 to-emerald-300':' from-emerald-300 to-orange-600'">{{ donne.title }}</p>
                </div>
                <div class="flex justify-center py-2 items-center right-0" v-if="donne.id===1">
                    <img src="../../public/code-square-svgrepo-com.svg" alt="" class="w-10 hover:animate-pulse">
                </div>
                <div class="flex justify-center py-2 right-0" v-if="donne.id===2">
                    <img src="../../public/code-laptop-svgrepo-com.svg" alt="" class="w-10 hover:animate-pulse">
                </div>
                <div class="flex justify-center py-2 right-0" v-if="donne.id===3">
                    <i class="fas fa-lock text-indigo-950 hover:animate-pulse fa-2x"></i>
                </div>
                <div class="flex justify-center py-2 right-0" v-if="donne.id===4">
                    <i class="fas fa-hand-holding-heart text-indigo-950 hover:animate-pulse fa-2x"></i>
                </div>
                <div class="py-4 absolute bottom-0">
                    <p class="indent-12 border-l-2 font-thin px-4 border-b-2 border-b-fuchsia-950 rounded-bl-2xl py-2 border-l-blue-950">{{ donne.description }}</p>
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
        donne:{
            type:Object,
            require:true
        }
    }
}
</script>
<style lang="">
    
</style>