<template>
  <section id="todo">
      <Header header="Todo" />
      <NesContainer class="todo-container" title="Todo List" center>
            <NesInputText class="todo-item" placeholder="To do ..."></NesInputText>
            <NesButton class="todo-item">Excercise</NesButton>
            <NesButton class="todo-item">Deploy</NesButton>
            <NesButton class="todo-item">Meeting</NesButton>
            <NesButton class="todo-item">Excercise</NesButton>
            <NesButton class="todo-item">Deploy</NesButton>
            <NesButton class="todo-item">Meeting</NesButton>
            <NesButton class="todo-item">Excercise</NesButton>
            <NesButton class="todo-item">Deploy</NesButton>
            <NesButton class="todo-item">Meeting</NesButton>
            
      </NesContainer>
  </section>
</template>

<script>
import Header from './../common/Header'
import { NesContainer, NesButton, NesInputText } from 'vuenes.css'

export default {
    name: 'Todo',
    components: {
        Header,
        NesContainer,
        NesButton,
        NesInputText
    }
}
</script>

<style scoped>
#todo {
    min-height: 100vh;
    background-color: rgb(43, 168, 43);
    text-align: center !important;
    padding-bottom: 100px;
}

.todo-container {
    width: 80%;
    text-align: center;
    margin-top:60px;
    transform: translateX(12.5%);
    background-color: white;
    color: black;
}

.todo-item {
    display: inline-block;
    width: 80%;
    margin: 10px;
}
</style>