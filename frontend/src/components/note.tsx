import "../styles/note.css"

interface NotesProp {
  note: Notes,
  onDelete: (id: number) => void 
}

export type Notes = {
  id: number,
  title: string,
  content: string,
  created_at: string
}


export default function Note({ note, onDelete}: NotesProp) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div className='note-container'>
      <p className='note-title'>{note.title}</p>
      <p className='note-content'>{note.content}</p>
      <p className='note-date'>{formattedDate}</p>
      <button className='delete-button' onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  )
}
