<template>
    <div>
       <div class="px-10 py-4">
            <div class="relative">
                <div class="bg-purple-400 rounded-t-2xl shadow-lg shadow-purple-950 py-2">
                    <p class="text-[14px] font-bold px-4"><span class="">{{ donne.name }}</span><span class=""></span> </p>
                    <p class="text-[14px] font-bold px-4"><span class="">{{ donne.Prenom }}</span><span class=""></span> </p>
                </div>
                <div class="absolute top-5 right-5 rounded-full">
                    <img :src="donne.image" alt="" class="h-14 w-14 shadow-lg shadow-purple-950 rounded-full outline outline-5 outline-purple-700">
                </div>
                <div class="px-4 outline outline-5 rounded-br-2xl h-[280px] hover:h-[320px] transition-all duration-1000 shadow-lg hover:shadow-purple-950 -outline-offset-2 outline-purple-400">
                    <div class="py-4 text-center font-bold underline">
                        <p class="">{{ donne.Dev }}</p>
                    </div>
                    <div class="text-sm text-right text-red-700 font-bold">
                        <p class="">{{ donne.lagage }}</p>
                    </div>
                    <div class="px-4 py-2 text-sky-950 font-bold">
                        <p class="indent-12">{{ donne.profil }}</p>
                    </div>
                    <div class="absolute bottom-2 right-4 py-2 flex justify-end px-4">
                        <a :href="donne.lien">
                        <button class="btn">Lien</button>
                        </a>
                    </div>
                    <div class="absolute bottom-0 left-0">
                        <img src="../../public/vscode2-svgrepo-com.svg" :alt="donne.profil" class="opacity-20 h-52">
                    </div>
                    <div class="absolute top-0 right-0">
                        <img src="../../public/video-library-svgrepo-com.svg" :alt="donne.profil" class="opacity-20 h-52">
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
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