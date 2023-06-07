import NoteCard from "./NoteCards/NoteCards";
import notes from "../../notes"

function createNotes(noteItem) {
    return <NoteCard
            title={noteItem.title}
            cardContent={noteItem.content}
            />
}

export default function NoteSection() {
    return (
        <>
            <section className="section is-medium">
                <div className="columns is-multiline">
                    {notes.map(createNotes)}
                </div>
            </section>
        </>
    );
}