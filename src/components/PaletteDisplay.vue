<template>
  <div class="palette-display">
    <button
      type="button"
      class="btn btn-sm btn-outline-secondary align-middle m-2 shadow"
      title="copy palette colour values to clipboard"
      @click.stop="copyToClipboard"
      :disabled="!colours.length">
    <i class="bi bi-clipboard-plus me-1"></i>
            <span>Copy to clipboard</span>
        </button>        
        <div class="palette">
            <div v-for="(colour, index) in colours" 
                :key="index" 
                :alt="colour"
                :title="colour"                                
                class="border-1 rounded-2 m-1 shadow-sm swatch"
                :style="{ color: getTextColour(colour), 'background-color': colour }"><i>{{colour}}</i></div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        colours: {
            type: Array,
            default() { return [] }
        }
    })
    const copyToClipboard = async () => await navigator.clipboard.writeText(props.colours.join())

    // function to determine suitabl;y contrasting text colour given background colour. modified version from comments on
    // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    const getTextColour = (bgColour) => {
        var colour = (bgColour.charAt(0) === '#') ? bgColour.substring(1, 7) : bgColour;
        var r = parseInt(colour.substring(0, 2), 16); // hexToR
        var g = parseInt(colour.substring(2, 4), 16); // hexToG
        var b = parseInt(colour.substring(4, 6), 16); // hexToB
        return ((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186 ? 'black' : 'white'
    }
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
.palette {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;    
}
.swatch { 
    display: grid; 
    text-align: center;
    place-items: center; 
    width: 100px; 
    height: 50px;
    border: 1px solid lightgray;       
}
</style>
