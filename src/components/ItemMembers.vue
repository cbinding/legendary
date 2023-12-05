<template>
    <div>
        <span class="badge text-bg-light ms-1 border rounded-pill">{{ memberCount }}</span>
        <div>
            <button 
                    class="btn btn-sm btn-outline-secondary mb-2" 
                    @click.prevent="addMember()" 
                    title="add member" 
                    alt="add member"
                    id="add"><i class="bi bi-plus-circle me-1"></i>Add Member</button>  
            
            <ul>
                <li v-for="(item, index) in members" :key="index">
                    <span>{{ item }}</span>
                    <button 
                        class="btn btn-sm btn-outline-secondary mb-2" 
                        @click.prevent="delMember(item)" 
                        title="`delete ${member}`"
                        alt="`delete ${member}`"
                        id="del"><i class="bi bi-dash-circle me-1"></i>Delete</button> 
                </li>
            </ul>
        </div>
        <div>{{ members.join() }}</div>
    </div>
</template>

<script setup>
    import { computed } from "vue"
    import { useLegendStore } from "@/stores/useLegendStore.js"
    
    const props = defineProps({
        itemId: {
            type: String,
            required: false,
            default: ""
        }
    })

    const store = useLegendStore() 
    const memberCount = computed(() => store.getMemberCount(props.itemId))
    const members = computed(() => store.getItemMembers(props.itemId))
    const addMember = (value) => store.addItemMember(props.itemId, value)
    const delMember = (value) => store.delItemMember(props.itemId, value)  

    
</script> 