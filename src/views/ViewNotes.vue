<template>
    <div class="notes">
        <AddEditNote v-model="newNote"
                     ref="addEditNoteRef">
            <template v-slot:buttons>
                <button 
                           class="button is-link"
                           @click="addNote"
                           :disabled="!newNote"
                    >add new note
                </button>
            </template>
        </AddEditNote>
       <Note v-for="note in storeNotes.notes"
              :key="note.id"
              :note="note"
              />

    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()
const newNote = ref('')
const addEditNoteRef = ref(null)

import axios from 'axios'
const posts = ref([])

async function addAllNotes() {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        posts.value = response.data
      })
posts.value.forEach((post) => {
    storeNotes.addNote(post.body,post.id.toString())
})
storeNotes.feached = true
}

if(storeNotes.feached == false){
    addAllNotes()
}


const addNote = () =>{
    storeNotes.addNote(newNote.value,new Date().getTime().toString())
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}


watch(newNote , (newValue) => {
 if(newValue.length == 50){
    alert('stop')
 }
 
})
</script>