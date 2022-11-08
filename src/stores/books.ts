import { defineStore } from 'pinia'
import { http } from '../services/http/axios';

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: []
  }),
  actions: {
    async list() {
      const result = await http.request({ url: 'https://fe-interview-api.unnotech.com/books/' }).then((res) => {
        this.books = res.data;
        console.log(res.data)
      })
    },
    async detail(bookId: number) {
    //   const result = await http.getBook(bookId);
    },
    async add(payload: any) {
      try {
        // const result = await http.addBook(payload);
      } catch(err) {}
    },
    async edit(bookId: number, payload: any) {
      try {
        // const result = await http.editBook(bookId, payload);
      } catch(err) {}
    },
    async delete(bookId: number) {
      try {
        // const result = await http.delBook(bookId);
      } catch(err) {}
    },
  }
})