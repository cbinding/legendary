<template>    
    <div class="card">
        <div class="card-header text-center fw-bold">Legendary</div>

        <div class="card-body p-2">
            <form>               
                <div class="form-check form-check-inline">
                    <input 
                        class="form-check-input" 
                        type="radio" 
                        name="importSource" 
                        id="importFromFile" 
                        value="fromFile"
                        v-model="importSource" />
                    <label 
                        class="form-check-label" 
                        for="importFromFile">Import from file</label>                
                </div>
                <div class="form-check form-check-inline">
                    <input 
                        class="form-check-input" 
                        type="radio" 
                        name="importSource" 
                        id="importFromURL" 
                        value="fromURL"
                        v-model="importSource" />
                    <label 
                        class="form-check-label" 
                        for="importFromURL">Import from URL</label>
                </div>
                <button 
                    type="button"
                    @click.stop="confirmClearData" 
                    class="btn btn-sm btn-outline-secondary rounded shadow">
                    <i class="bi bi-x-circle me-1"></i>
                    <span>Clear All Data</span>
                </button>   
                <div class="input-group input-group-sm p-1" v-show="importSource == 'fromFile'">
                    <label 
                        for="importFile" 
                        class="input-group-text">
                        <i class="bi bi-filetype-json me-1"></i>Import</label>  
                    <input 
                        type="file" 
                        id="importFile" 
                        name="importFile" 
                        accept="application/json"
                        class="form-control form-control-sm"
                        @change.stop="importFromFile">                     
                </div>
                <div class="input-group input-group-sm p-1" v-show="importSource == 'fromURL'">
                    <label 
                        for="importURL" 
                        class="input-group-text">
                        <i class="bi bi-filetype-json me-1"></i>Import</label> 
                    <input 
                        type="text" 
                        id="importURL" 
                        name="importURL" 
                        class="form-control form-control-sm"
                        v-model="currentURL">
                    <button type="button"
                        @click.stop="importFromURL" 
                        class="btn btn-sm btn-outline-secondary rounded shadow float-right">
                    <i class="bi bi-check-circle me-1"></i>Go</button>      
                </div>   

                <div class="input-group input-group-sm p-1">                         
                    <label 
                        for="exportfile" 
                        class="input-group-text">
                        <i class="bi bi-filetype-json me-1"></i>Export</label> 
                    <button 
                        type="button"
                        id="exportfile" 
                        name="exportfile" 
                        class="btn btn-sm btn-outline-secondary"
                        @click.stop="exportData">Choose file</button>
                    <input type="text" class="form-control form-control-sm" disabled/>            
                    
                </div>                  
            </form>
            <!--define tabs-->
            <div class="nav nav-tabs">                
                <a 
                    class="nav-link" 
                    href="#" 
                    @click.stop="openTab($event, 'Items')" 
                    id="defaultOpen">
                    <span>Items</span>
                    <span class="badge text-bg-light ms-1 border rounded-pill">{{ itemCount }}</span>
                </a>                       
                <a 
                    class="nav-link" 
                    href="#" 
                    @click.stop="openTab($event, 'Metadata')">Metadata</a>   
                <a 
                    class="nav-link" 
                    href="#" 
                    @click.stop="openTab($event, 'Palette')">Palette</a>  
            </div>  

            <div id="Items" class="tabcontent bg-light">
                <LegendItems/>
            </div> 

            <div id="Metadata" class="tabcontent bg-light">
                <LegendMetadata/>    
            </div>  

            <div id="Palette" class="tabcontent bg-light">
                <PaletteDisplay :colours="palette"/>
            </div>       
            
        </div>
        <div class="card-footer small">{{ footerMessage }}</div>
    </div>        
</template>

<script setup>
    import { ref, computed, onMounted} from "vue"
    import { useLegendStore } from "@/stores/useLegendStore"
    import LegendMetadata from "@/components/LegendMetadata"
    import LegendItems from "@/components/LegendItems"
    import PaletteDisplay from "@/components/PaletteDisplay"
    
    const store = useLegendStore() 
    
    const itemCount = computed(() => store.items.length)
    const palette = computed(() => store.palette)
    const importSource = ref("fromFile")
    const currentFile = ref("")
    const currentURL = ref("")
    const footerMessage = ref("")

    //const palette = computed(() => store.items.value.map(item => item.colour).filter(c => c))
    onMounted(() => {
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
    });

    const confirmClearData = () => {
        if(confirm("This will clear all data, are you sure?")) {
            clearData()
        }
    }
    
    const clearData = () => {
        document.getElementById("importFile").value=""
        importSource.value = "fromFile"
        currentFile.value = ""
        currentURL.value = ""
        footerMessage.value = ""
        store.reset()
    }

    const importFromFile = event => { 
        footerMessage.value = ""
        store.reset()
        currentFile.value = event.target.files[0]            
        const reader = new FileReader()
        reader.onload = function(e) {
            store.importJSON(e.target.result)				
        }
        reader.readAsText(currentFile.value)        
	} 

    const importFromURL = async () => {
        //console.log(`URL = '${event.target.value}'`)
        footerMessage.value = ""
        store.reset()
        if(currentURL.value == "") return
        fetch(currentURL.value, { headers: { accept: 'application/json' }})
            .then(response => response.json())
            .then(data => store.importData(data)) 
            .catch(error => footerMessage.value = error)  //todo - display error (in footer?)           
    }

    const timestampISO = () => new Date().toISOString() // e.g. "2022-03-04T08:13:47.578Z"
    const timestamp = () => timestampISO().replaceAll(/[:.\-Z]/g,"") // e.g. "20211225T120523"
    //const datestamp = () => timestamp().slice(0,8) // "YYYYMMDD" eg 20220318
    const exportData = () => {
        const data = store.exportJSON() 
        const fileName = currentFile.value?.name || `legend-${ timestamp() }.json`        
        saveToFile(data, fileName)  
        document.getElementById("importFile").value=""      
    }

    // this function used in Phaser, from https://forum.vuejs.org/t/saving-form-data/38714
    const saveToFile = (jsonData, fileName) => {
        let blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8;' })
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, fileName)
        } else {
            let link = document.createElement('a')
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                let url = URL.createObjectURL(blob)
                link.setAttribute('href', url)
                link.setAttribute('download', fileName)
                link.style.visibility = 'hidden'
                document.body.appendChild(link)
                link.click()
                    document.body.removeChild(link)
            }
        }
    }

    const openTab = (evt, tabName) => {
        // Declare all variables
        var tabcontent, tabs;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent")
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"
        }

        // Get all elements with class="nav-link" and remove the class "active"
        tabs = document.getElementsByClassName("nav-link")
        for (let i = 0; i < tabs.length; i++) {
           tabs[i].className = tabs[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block"
        evt.currentTarget.className += " active"
    }

</script>

<style scoped>
button { cursor: pointer; }

/* Style the tab content */
.tabcontent {
  min-height: 500px;
  display: none;
  padding: 6px 6px;
  border: 1px solid lightgray;
  border-top: none;
}

</style>