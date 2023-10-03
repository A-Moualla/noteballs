<template>
    <div class="stats">
        <h1>number of notes: {{ storeNotes.totalNotesCount }}</h1> 
        <h1>number of characters: {{ storeNotes.totalCharacterCount }}</h1> 
    </div>
</template>


<script setup>
import { useStoreNotes } from '@/stores/storeNotes'
const storeNotes = useStoreNotes()
</script>