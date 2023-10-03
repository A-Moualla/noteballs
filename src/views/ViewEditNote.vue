<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent"
                     ref="addEditNoteRef">
            <template v-slot:buttons>
                <button @click="$router.back()" 
                           class="button is-link mr-4"
                    >cancel
                </button>
                <button @click="handleSaveClicked"
                           class="button is-link"
                           :disabled="!noteContent"
                    >save note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const storeNotes = useStoreNotes()
const route = useRoute()
const router = useRouter()
const noteContent = ref ('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent)
    router.push('/')
}
</script>