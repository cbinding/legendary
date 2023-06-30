<template>
    <div class="palette-display">        
        <div>
            <span v-for="(colour, index) in colours" 
                :key="index" 
                :alt="colour"
                :title="colour"
                class="swatch border-1 rounded-2 align-middle"
                :style="{ 'background-color': colour }">{{colour}}</span>
        </div>
        <button 
            type="button"
            class="btn btn-sm btn-outline-secondary align-middle m-2"
            title="copy palette colour values to clipboard"
            @click.stop="copyToClipboard" 
            :disabled="!colours.length">
            <i class="bi bi-clipboard-plus me-1"></i>
            <span>Copy to clipboard</span>
        </button>        
        
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    const props = defineProps({
        colours: {
            type: Array,
            default() { return [] }
        }
    })
    const copyToClipboard = async () => await navigator.clipboard.writeText(props.colours.join())

    //const hex2rgb = () => {}
    //const rgb2hex = () => {}
    //const defaultColours = ["#E4F1F7","#C5E1EF","#9EC9E2","#6CB0D6","#3C93C2","#226E9C","#0D4A70"]
</script>

<style scoped>
.palette-display {
    width: 100%;    
}
button { 
    cursor: pointer;
    display: inline-block;  
} 
.swatch { 
    display: inline-block;  
    text-align: center; 
    width: 90px; 
    height: 50px;
    margin-right: 3px; 
    border: 1px solid lightgray;
}
</style>
