<template>
    <div>
        <div class="text-center py-3">
            <p class="text-[28px] text-sky-950 font-bold underline underline-offset-4">Plus langage, plus outils</p>
        </div>
        <div class="media">
                    <Outil
                    v-for="(value) in donne"  :key="index" :mety="value" :index="value.id" class="col-span-4"/>
        </div>
        <div class="">
            <div class="media">
                <div class="col-span-4"></div>
                <div class="col-span-4">
                    <div class="px-5 py-5">
                    </div>
                </div>
                <div class="col-span-4"></div>
            </div>
        </div>
    </div>  
</template>
<script>
import PlusVue from "./Plus.vue"
import Outil from "./Card.vue"
import Card from "./Card.json"
export default {
    components:{
        Outil,PlusVue
    },
    data() {
        return {
            donne:Card
        }
    },
}
</script>
<style lang="">
    
</style>