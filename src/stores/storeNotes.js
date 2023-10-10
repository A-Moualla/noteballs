import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [
        ],
        feached: false
    }
  },
  actions: {
    addNote(newNoteContent,id){
    let note = {
        id: id,
        content: newNoteContent
    }

    this.notes.unshift(note)
    },
    deleteNote(idToDelete){
        this.notes = this.notes.filter(note => { return note.id !== idToDelete})
    },
    updateNote(id, content){
      let index = this.notes.findIndex(note => { return note.id === id})
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
     return (id) => {
      return state.notes.filter(note => { return note.id === id})[0].content
     }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharacterCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})