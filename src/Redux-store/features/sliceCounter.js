/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
   name: "counter",
   initialState: {
      todos: localStorage.getItem("todosMap") ?
         JSON.parse(localStorage.getItem("todosMap")) : [],
      allValue: localStorage.getItem("allValue") ?
         JSON.parse(localStorage.getItem("allValue")) : {},
      name: localStorage.getItem("name") ?
         JSON.parse(localStorage.getItem("name")) : "",
      surname: localStorage.getItem("surname") ?
         JSON.parse(localStorage.getItem("surname")) : "",
      fatherName: localStorage.getItem("fatherName") ?
         JSON.parse(localStorage.getItem("fatherName")) : "",
      mail: localStorage.getItem("mail") ?
         JSON.parse(localStorage.getItem("mail")) : "",
      field: localStorage.getItem("field") ?
         JSON.parse(localStorage.getItem("field")) : "",
      motivation: localStorage.getItem("motivation") ?
         JSON.parse(localStorage.getItem("motivation")) : "",
      gender: localStorage.getItem("gender") ?
         JSON.parse(localStorage.getItem("gender")) : "",
      dataDelete: localStorage.getItem("dataDelete") ?
         JSON.parse(localStorage.getItem("dataDelete")) : [],
      show: localStorage.getItem("show") ?
         JSON.parse(localStorage.getItem("show")) : false,
      array: localStorage.getItem("array") ?
         JSON.parse(localStorage.getItem("array")) : {},
      edit: localStorage.getItem("edit") ?
         JSON.parse(localStorage.getItem("edit")) : {},
      testEdit: [],
      dataId: 0
   },
   reducers: {
      inputValue: (state, action) => {
         //   state.todo = action.payload

      },
      todosMap: (state, action) => {
         state.todos = [...state.todos, state.allValue,]
         localStorage.setItem("todosMap", JSON.stringify(state.todos))
      },
      addId: (state, action) => {
         state.allValue = {
            id: action.payload ? action.payload : Math.floor(Math.random() * 1000),
            completed: false,
            name: state.name,
            surname: state.surname,
            fatherName: state.fatherName,
            mail: state.mail,
            field: state.field,
            motivation: state.motivation,
            gender: state.gender
         }
         localStorage.setItem("allValue", JSON.stringify(state.allValue))
      },

      name: (state, action) => {
         state.name = action.payload
         localStorage.setItem("name", JSON.stringify(state.name))
      },
      surname: (state, action) => {
         state.surname = action.payload
         localStorage.setItem("surname", JSON.stringify(state.surname))
      },
      fatherName: (state, action) => {
         state.fatherName = action.payload
         localStorage.setItem("fatherName", JSON.stringify(state.fatherName))
      },
      mail: (state, action) => {
         state.mail = action.payload
         localStorage.setItem("mail", JSON.stringify(state.mail))
      },
      field: (state, action) => {
         state.field = action.payload
         localStorage.setItem("field", JSON.stringify(state.field))
      },
      motivation: (state, action) => {
         state.motivation = action.payload
         localStorage.setItem("motivation", JSON.stringify(state.motivation))
      },
      gender: (state, action) => {
         state.gender = action.payload
         localStorage.setItem("gender", JSON.stringify(state.gender))
      },
      contactDelete: (state, action) => {
         state.todos = state.todos.filter(item => item.id !== action.payload)
         localStorage.setItem("todosMap", JSON.stringify(state.todos))
      },
      showModal: (state, action) => {

         state.array = state.todos.map((i) => {

            if (i.id === action.payload) {
               state.dataId = action.payload
               state.show = !state.show
               localStorage.setItem("array",JSON.stringify(i))
            }

               localStorage.setItem("show",JSON.stringify(state.show))
         })
       
      },
      hideModal: (state, action) => {
         state.show = !state.show
      },
      postContact: (state, action) => {
         state.edit = state.todos.find((edit) => edit.id === action.payload)
         
         let stateEdit = { ...state.edit }
         state.name = stateEdit.name
         state.surname = stateEdit.surname
         state.fatherName = stateEdit.fatherName
         state.mail = stateEdit.mail
         state.field = stateEdit.field
         state.motivation = stateEdit.motivation
         state.gender = stateEdit.gender
         // localStorage.setItem("edit", JSON.stringify(stateEdit))
      },

      editContact: (state, action) => {
         state.todos = state.todos.map((item) => {

            if (item.id === action.payload) {
               console.log({ ...item });
               return {
                  /*   ...item, */
                  id: action.payload,
                  name: state.name,
                  surname: state.surname,
                  fatherName: state.fatherName,
                  mail: state.mail,
                  field: state.field,
                  motivation: state.motivation,
                  gender: state.gender,
                  
               };
               
            }
          
            return item;
           
         });
          localStorage.setItem("todosMap", JSON.stringify(state.todos))
      }

   }
})
export const { 
   inputValue,
   todosMap,
   addId,
   name,
   surname,
   mail,
   fatherName,
   field,
   motivation,
   gender,
   contactDelete,
   showModal,
   hideModal,
   postContact,
   editContact,
   addIdEdit 
} = counterSlice.actions;

export default counterSlice.reducer