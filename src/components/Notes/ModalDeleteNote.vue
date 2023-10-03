<template>
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete Note?</p>
      <button class="delete" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      Are you sure?
      {{ noteId }}
    </section>
    <footer class="modal-card-foot">
      <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
      <button class="button" @click="closeModal">Cancel</button>
    </footer>
  </div>
</div>
</template>
<script setup>
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

const props = defineProps({
    modelValue: {
        type: Boolean,
        defaults: false
    },
    noteId:{
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
emit('update:modelValue', false)
}
</script>