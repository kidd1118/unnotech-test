import { defineStore } from 'pinia'
import { http } from '../services/http/axios'
import { book } from '../types/book'

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: Array<book>,
  }),
  actions: {
    async list() {
      await http.request({ url: 'https://fe-interview-api.unnotech.com/books/' }).then((res) => {
        this.books = res.data;
      })
    },
    async detail(bookId: number): Promise<book> {
      let result: book;
      return await http.request({ url: 'https://fe-interview-api.unnotech.com/books/' + bookId }).then((res) => {
        result = res.data as book;
        return result;
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