import { defineStore } from 'pinia'
import { http } from '../services/http/axios'
import { book } from '../types/book'

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: [] as Array<book>,
    book: {} as book
  }),
  actions: {
    async list() {
      await http.request({ url: 'https://fe-interview-api.unnotech.com/books/' }).then((res) => {
        this.books = res.data;
      })
    },
    async detail(bookId: number) {
      await http.request({ url: `https://fe-interview-api.unnotech.com/books/${bookId}` }).then((res) => {
        this.book = res.data as book;  
      })
    },
    async add(payload: any) {

    },
    async edit(bookId: number, payload: any) {

    },
    async delete(bookId: number) {

    },
  }
})