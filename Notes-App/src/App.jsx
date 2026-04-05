import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    setTask(prev => [...prev, { title, details }]);
    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    //  copyTask.pop()
    const ok = window.confirm("Delete this note?");
  if (!ok) return;
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='min-h-screen lg:flex bg-gradient-to-br from-black via-zinc-900 to-black text-white'>

      <form
        onSubmit={(e) => submitHandler(e)}
        className='flex flex-col gap-6 p-10 lg:w-1/2 items-center justify-center'
      >
        <h1 className='text-4xl font-extrabold tracking-wide'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-3 w-full bg-transparent border border-zinc-700 rounded-xl focus:border-white focus:ring-2 focus:ring-white/20 transition'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="5"
          className='px-5 py-3 w-full bg-transparent border border-zinc-700 rounded-xl resize-none focus:border-white focus:ring-2 focus:ring-white/20 transition'
          placeholder='Write Details'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='w-36 flex justify-center items-center bg-white text-black font-bold uppercase py-3 rounded-full hover:bg-zinc-200 active:scale-95 transition'>
          Add Notes
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l border-zinc-700 p-10'>
        <h1 className='text-4xl font-extrabold tracking-wide'>Recent Notes</h1>

        <div className='flex flex-wrap gap-6 mt-6 h-[90%] overflow-auto pr-2'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="relative h-52 w-44 text-black bg-cover bg-[url('https://imgs.search.brave.com/YCHVpD_qQisI0eA3LW_fxmnCRhv1uOtGZ969L5KwyFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NDk5LzE1NS9zbWFs/bC95ZWxsb3ctc3Rp/Y2t5LW5vdGVzLXBu/Zy5wbmc')] backdrop-blur rounded-2xl shadow-lg hover:scale-105 transition p-5">
              <h2 onClick={() => {
                deleteNote(idx)
              }} className='absolute cursor-pointer active:scale-90 top-6 right-2 bg-white text-black px-2 py-1 rounded-full font-extrabold text-sm'>✕</h2>
              <h3 className='leading-tight text-xl py-4 font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium'>{elem.details}</p>
            </div>
          })}
          
        </div>
      </div>

    </div>
  )
}

export default App
