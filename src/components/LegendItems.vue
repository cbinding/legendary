<template>
    <div>
        <button 
            class="btn btn-sm btn-outline-secondary mb-2" 
            @click.prevent="addItem()" 
            title="add item" 
            alt="add item"
            id="add"><i class="bi bi-plus-circle me-1"></i>Add Item</button>        
        <ul id="legend-items" class="legend-items list-group">
            <li v-for="[key, value] in items" :key="key" class='list-group-item1 p-0'>
                <LegendItem 
                    :colour="value.colour" 
                    :label="value.label" 
                    :id="key"
                    @change-colour="changeColour(key, $event)" 
                    @change-label="changeLabel(key, $event)"
                    @delete-item="delItem(key, value)"/>                
                <!--<button @click.prevent="moveItemUp()">up</button>-->
                <!--need options to reorder?-->                                
            </li>
        </ul>
    </div>
</template>

<script setup> 
    import { computed } from "vue"
    import { useLegendStore } from "@/stores/useLegendStore.js" 
    import LegendItem from "@/components/LegendItem.vue"
    
    const store = useLegendStore() 
    const items = computed(() => store.$state.items)
    //const items = store.$state.items

    const addItem = () => store.newItem()
    const delItem = (id, item) => {
        if (confirm(`delete "${item.label}" - are you sure?`))
            store.delItem(id)
    }
    const changeColour = (id, value) => store.setItemColour(id, value)
    const changeLabel = (id, value) => store.setItemLabel(id, value)
    //const moveItemUp = () => {}
</script>

<style scoped>
#add { margin: 3px; cursor: pointer; }

.legend-items { 
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    height: 500px;
    overflow: scroll;
}      
</style>