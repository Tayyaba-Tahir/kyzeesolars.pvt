import { Bokor } from 'next/font/google'
import React from 'react'
interface IBook {
    id: number
    name: string
    type: string
    available: boolean
}

const Cards = async () => {

    let res = await fetch("https://simple-books-api.glitch.me/books");

    let books: IBook[] = await res.json();
    return (
        <div>
            {
                books.map((book) => {
                    return (
                        <div key={book.id} className='border p-4 rounded m-4'>
                            <h2 >{book.name}</h2>
                        </div>)
                })
            }
        </div>
    )
}

export default Cards





{/* Card 1 */}

{ <div className='h-48 border rounded bg-blue-500 flex-1'>
</div> }
// </div >