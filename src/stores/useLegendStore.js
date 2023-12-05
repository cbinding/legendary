// useLegendStore
import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import uniqueId from 'lodash.uniqueid'

export const useLegendStore = defineStore('legend', {
    state: () => ({
        title: "",
        description: "",
        creator: "",
        contact: "",
        version: "",
        license: "",
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        //items: reactive(new Map()),
        items: new Map()
    }),
    getters: {
        itemCount: state => state.items.size,
        palette: state => Array.from(state.items.values())
            .map(item => item.colour)
            .filter(c => c)
    },
    actions: {
        reset() {
            this.title = ""
            this.description = ""
            this.creator = ""
            this.contact = ""
            this.version = ""
            this.license = ""
            this.created = new Date().toISOString()
            this.updated = this.created
            //this.items = reactive(new Map())   
            this.items = new Map()     
        },
        importJSON(json) {
            const data = JSON.parse(json)
            this.importData(data)
        },
        importData(data) {
            this.reset()
            this.setTitle(data.title || "")
            this.setDescription(data.description || "")
            this.setCreator(data.creator || "")
            this.setContact(data.contact || "")
            this.setVersion(data.version || "")
            this.setLicense(data.license || "");
            data.items.forEach(item => this.addItem(item))
        },
        exportJSON() {
            function replacer(key, value) { 
                //console.log(`"${key}": "${value instanceof Map}"`)
                if (value instanceof Map) {
                    //console.log(Array.from(value.values()))
                    return (Array.from(value.values())) // or with spread: value: [...value]     
                }
                else 
                    return value
                
            }
            //console.log(Array.from(this.$state.items.values()))
            
            //const values = Array.from(this.items.values())
            //console.log(toRaw(this.$state))
            //console.log(Array.from(toRaw(this.items).values()))
            return JSON.stringify(toRaw(this.$state), replacer)
        },
        stampUpdated() {
            this.updated = new Date().toISOString()
        },
        setTitle(value) {
            const newValue = (value || "").trim()
            if (this.title !== newValue) {
                this.title = newValue
                this.stampUpdated()
            }
        },
        setDescription(value) {
            const newValue = (value || "").trim()
            if (this.description !== newValue) {
                this.description = newValue
                this.stampUpdated()
            }
        },
        setCreator(value) {
            const newValue = (value || "").trim()
            if (this.creator !== newValue) {
                this.creator = newValue
                this.stampUpdated()
            }
        },
        setContact(value) {
            const newValue = (value || "").trim()
            if (this.contact !== newValue) {
                this.contact = newValue
                this.stampUpdated()
            }
        },
        setVersion(value) {
            const newValue = (value || "").trim()
            if (this.version !== newValue) {
                this.version = newValue
                this.stampUpdated()
            }
        },
        setLicense(value) {
            const newValue = (value || "").trim()
            if (this.license !== newValue) {
                this.license = newValue
                this.stampUpdated()
            }
        },       
        newItem() {
            this.addItem({ colour: "#dddddd", label: "new item", members: [] })
        },

        addItem(item) {
            // TODO: validate item fields, rgb2hex if necessary
            // newItem - clone(item)..
            if (!item.members)
                item.members = []
            // todo check other properties prior to adding..
            //this.items.push({ ...item, ...{ id: uniqueId("legendary-") } })
            const id = uniqueId("legendary-")
            this.items.set(id, item)
            //if(item.id)
            //this.items.push(item)
            //else
            //this.items.push({...item, id: this.nextID++})
            this.stampUpdated()
        },
        getItem(id) {
            //const item = this.items.find((obj) => obj.id === id)
            return this.items.get(id) || null
        },
        delItem(id) {
            //this.items = this.items.filter((obj) => obj.id !== id)
            if (this.items.has(id)) {
                this.items.delete(id)
                this.stampUpdated()
            }
        },
        setItemColour(id, colour) {
            const item = this.getItem(id)
            if (item && item.colour !== colour) {
                item.colour = colour
                this.stampUpdated()
            }
        },
        setItemLabel(id, label) {
            const item = this.getItem(id)
            if (item && item.label !== label) {
                item.label = label
                this.stampUpdated()
            }
        },
        getMemberCount(id) {
            const item = this.getItem(id)
            return (item && item.members) ? item.members.length : 0                
        },
        getItemMembers(id) {
            const item = this.getItem(id)
            return item ? item.members || [] : []
        },
        addItemMember(id, value) {
            const item = this.getItem(id)
            // checking if exists first
            const cleanValue = (value || "").trim()
            //if (!item.members.includes(cleanValue)) 
            //not case sensitive..try this instead..
            if(!item.members) item.members = []
            if (!item.members.some(s => s.toLowerCase() == cleanValue.toLowerCase())) {
                item.members.push(cleanValue)
                this.stampUpdated()
            }
        },
        delItemMember(id, value) {
            const item = this.getItem(id)
            const cleanValue = (value || "").trim()
            if(!item.members) item.members = []
            const index = item.members.indexOf(cleanValue)
            if (index !== -1) {
                item.members.splice(index, 1)
                this.stampUpdated()
            }
        }
    },
})