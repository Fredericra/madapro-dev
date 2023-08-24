<template>
    <div class="relative ">
        <div class="media z-50 opacity-100 mt-20">
            <div class="col-span-4 flex justify-center items-center blex">
               <div class="space-y-4">
                    <div class="border-l-4 border-purple-600 px-4">
                        <router-link to="/" class="btn px-[66px] hover:px-[74px] duration-1000 transition-all">Contact nous</router-link>
                    </div>
                    <div class="border-l-4 border-purple-600 px-4">
                        <router-link to="/mission" class="btn1 px-[55px] hover:px-[66px] duration-1000 transition-all">Notre mission</router-link>
                    </div>
                    <div class="border-l-4 border-indigo-600 px-4">
                        <router-link to="/about" class="btn2 px-[55px] hover:px-[66px] duration-1000 transition-all">A propos</router-link>
                    </div>
               </div>
            </div>
            <div class="col-span-8 right">
                <div class="flex justify-center items-center h-[310px] z-auto space-x-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>