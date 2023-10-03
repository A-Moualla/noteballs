<template>
    <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea class="textarea"
                            placeholder="add new note"
                            ref="textareaRef"
                            :value="modelValue"
                            @input="$emit('update:modelValue', $event.target.value)"
                            maxlength="50"
                            v-autofocus
                            />
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
               <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const textareaRef = ref(null)

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})

const vAutofocus = {
    mounted: (el) =>{
        el.focus()
    }
}
</script>